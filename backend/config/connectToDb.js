require('dotenv').config();
const mongoose  = require('mongoose');

const DB_URL = process.env.DB_URL;

const connectToDb = async () => {
    mongoose.connect(DB_URL);
    console.log('konnekted to kluster');
};

module.exports = connectToDb;