require("dotenv").config(); // require env to get access to environment variables
const express = require('express');
// app express instance
const app = express();
//port
const port = process.env.PORT || 3000;


//requires ----------------------
const cookieParser = require('cookie-parser');

const connectToDb = require('./config/connectToDb');
const cors = require('cors');

const authRouter = require('./routes/authRouter');
const commentRouter = require('./routes/commentRouter');
const profileRouter = require('./routes/profileRouter');
// --------------------------------

//middleware
//secure cross-origin requests and data transfers between browsers and servers
app.use(cors())
//parse json
app.use(express.json());
// parse incoming url requests,allow for rich objects like arrays to be encoded 
app.use(express.urlencoded({ extended: true }));
//read cookies off request body
app.use(cookieParser())

//connect to db
connectToDb();

//router
app.use('/comments', commentRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);

//listen
app.listen(port, (req, res) => {
    console.log('Listening on port ', port);
})