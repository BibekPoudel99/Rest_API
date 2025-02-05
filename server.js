//main entry point

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const cors = require('cors');  //to handle requests from different origins(domains)

const app = express(); 
connectDB(); //connect to mongoDB

//middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});
