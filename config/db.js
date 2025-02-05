//connecting mondoDB database
const mongoose = require('mongoose');
require('dotenv').config(); //load enviroment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

            dbname : 'mydb'

        });
        console.log('MongoDb connected!');
    }
    catch(error){
        console.error('Connection Failed...', error);
        process.exit(1);
    }
}

module.exports = connectDB; //exports connectDB function so that it can be imported and used in other files within the application.