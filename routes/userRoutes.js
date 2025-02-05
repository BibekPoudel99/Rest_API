const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../config/auth');

const router = express.Router();

//get all users(protected routes)

router.get('/', authMiddleware, async (req, res) => {

    try{
        const users = await User.find().select('-password'); //exclude passwords
        res.json(users);
    }catch (error){
        res.status(500).json({message : "Server Error!"});
    }

});

//get loggedin users(Protected route)
router.get('/me', authMiddleware, async (req, res) => {

    try{
        const user = await User.findById(req.user.id).select('-password'); //exclude passwords
        res.json(users);
    }catch (error){
        res.status(500).json({message : "Server Error!"});
    }

});

module.exports = router;