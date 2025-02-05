//implememt authentication (middleware for JWT verification)

const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization'); //retrieves the JWT form the Authorization header of the request

    if(!token) return res.status(401).json({message : 'Access denied!'}); //checks if token is present

    try { 
        const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); //extracts the actual token part form the Bearer <token> format.
        req.user = verified; //attaches the verified token payload to the req.user object
        next(); // calls the next function to pass control to the next middleware or route handler.
    }
    catch(error){
        res.status(400).json({message : 'Invalid Token!!'});
    }
}

module.exports = authMiddleware;