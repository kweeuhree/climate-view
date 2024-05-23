const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const connectToDb = require('./config/connectToDb');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const commentRouter = require('./routes/commentRouter');

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db
connectToDb();

//router
app.use('/comments', commentRouter);
app.use('/users', userRouter);

//listen
app.listen(port, (req, res) => {
    console.log('Listening on port ', port);
})