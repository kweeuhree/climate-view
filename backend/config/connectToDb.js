require('dotenv').config(); //require env to access enviroment variables
const mongoose  = require('mongoose'); 

//mongo db url
const DB_URL = process.env.DB_URL;

//connect to mongo
const connectToDb = async () => {
    mongoose.connect(DB_URL);
    console.log('konnekted to kluster');
};

module.exports = connectToDb;