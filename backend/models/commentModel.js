const mongoose = require('mongoose');

const CommentModel = new mongoose.Schema({
    body: { type: String, requried: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, requried: true }
}, 
    { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentModel);

module.exports = Comment;