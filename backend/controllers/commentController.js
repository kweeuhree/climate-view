const Comment = require('../models/CommentModel');


// get all comments
const fetchAllComments = async (req, res) => {
    const comments = await Comment.find();
    res.status(200).json({ comments: comments });
}


// get a specific comment
const getComment = async (req, res) => {
    // console.log('commentid inside get comment ', req.commentId)
    const comment = await Comment.findById(req.commentId);
    res.status(200).json({ comment: comment });
}

// update a comment
const updateComment = async (req, res) => {
    const { body } = req.body; // destructure body object

    const updatedComment = await Comment.findByIdAndUpdate(req.commentId, {
        body: body
    }, { new: true }) // store updated value

    res.status(201).send(`comment ${updatedComment.body} updated`);
}

// create a comment
const createComment = async (req, res) => {
    const { body, postedBy } = req.body;

    const newComment = await Comment.create({
        body: body,
        postedBy: postedBy // req.user._id when auth
    });

    res.status(201).send(`Comment created: ${newComment.body}`);
}

// delete a comment
const deleteComment = async (req, res) => {
    await Comment.findByIdAndDelete(req.commentId);
    res.status(200).json({ msg: 'Comment deleted' });
}


module.exports = {
    fetchAllComments, getComment, updateComment, createComment, deleteComment
};