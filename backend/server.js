const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');
const subscriberRoute = require('./routes/subscriberRoute');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/subscribe', subscriberRoute);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)
    )
}).catch(err => console.log(err)
)
