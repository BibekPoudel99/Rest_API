//create authentication route helps by organizing and managing the endpoints for 
// user authentication, such as login, registration and token verification.

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); //mongoose model that represents a collection in your mongodb database
require('dotenv').config();

const router = express.Router(); //is used to define routes for handling HTTP requests.

//user registration 

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    //check if exists
    try{
        let user = await User.findOne({email});
        if(user) return res.status(400).json({message : 'User already exists!!'});

        //hash password
        const salt = await bcrypt.genSalt(10);//generates a random value with a cost factor of 10. the higher cost factor means more security but also more processing time.
        const hashedPassword = await bcrypt.hash(password, salt); //salt is combined with password before hashing .

        //create new user
        user = new User({name, email, password : hashedPassword});
        await user.save();
        res.status(201).json({message : 'User registered successfully ..'});
    }
    catch(error){
        res.status(500).json( {message:'server error'});
    }
});

//user login

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid credentials"});

        //validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({message: 'Invalid credentials'});

        //generate jwt token
        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn : '1H'}); //method form the json web token to create a new token

        res.json({token}); // sends a json response containing the token. then use this token for authenticated requests to protected routes.
    }
    catch (error){
        res.status(500).json({message: 'Server Error!'});

    }
});

module.exports = router;