require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cookieParser = require('cookie-parser');

const connectToDb = require('./config/connectToDb');
const cors = require('cors');

const authRouter = require('./routes/authRouter');
const commentRouter = require('./routes/commentRouter');
const profileRouter = require('./routes/profileRouter');

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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