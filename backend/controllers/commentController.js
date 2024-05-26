const Comment = require('../models/CommentModel');


// get all comments
const fetchAllComments = async (req, res) => {
    const comments = await Comment.find();
    res.status(200).json({ comments: comments });
}


// get a specific comment
const getComment = async (req, res) => {
    // console.log('commentid inside get comment ', req.commentId)
    const comment = await Comment.findById(req.commentId).populate('postedBy');
    res.status(200).json({ comment: comment });
}

// update a comment
const updateComment = async (req, res) => {

    const updatedComment = await Comment.findByIdAndUpdate(req.commentId, req.body, { new: true }) // store updated value

    res.status(201).json({ updatedComment });
}

// create a comment
const createComment = async (req, res) => {

    console.log(req.body.postedBy, 'inside createComment');

    const newComment = await Comment.create({
        body: req.body.body,
        postedBy: req.body.postedBy // send req.user._id with auth
    });

    res.status(201).json({ comment: newComment});
}

// delete a comment
const deleteComment = async (req, res) => {
    await Comment.findByIdAndDelete(req.commentId);
    res.status(200).json({ msg: 'CommentController: Comment deleted' });
}


module.exports = {
    fetchAllComments, getComment, updateComment, createComment, deleteComment
};