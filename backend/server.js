const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const subscriberRoute = require('./routes/subscriberRoute');

// Load environment variables from .env file
dotenv.config();

// Initialize the app
const app = express();

// Use the port provided by Render (or fallback to 5000 locally)
const PORT = process.env.PORT || 5000;

// CORS setup for frontend (change the URL to your actual frontend URL)
app.use(cors({
    origin: "https://e-commerce-omega-two-33.vercel.app" // Replace with your actual frontend URL
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Routes
app.use('/api/subscribe', subscriberRoute);

// MongoDB connection using the URI from .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected");
    // Start the server after successful MongoDB connection
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDB connection failed:", err);
});
