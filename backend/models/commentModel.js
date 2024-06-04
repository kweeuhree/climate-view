const mongoose = require('mongoose');

const CommentModel = new mongoose.Schema({
    body: { type: String, requried: true },
    // require a user who posted the comment
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, requried: true }
}, 
    { timestamps: true }
);

//create a model
const Comment = mongoose.model('Comment', CommentModel);


//export module
module.exports = Comment;