const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

//Post Save email

router.post('/', async(req, res)=>{
    const{email} = req.body;

    if(!email) return res.status(400).json({message:'Email is required'});

    try{
        const newSub = new Subscriber({email});
        await newSub.save();
        res.status(201).json({ message: 'Subscribe Successfully' });
    }
    catch(err){
        if (err.code === 11000){
            res.status(409).json({ message: 'Email already subcscribed' });
        }
        else{
            res.status(500).json({ message: 'Server error' })
        }
    }
})
module.exports = router;