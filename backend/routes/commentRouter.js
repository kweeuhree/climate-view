const express = require('express');
const router = express.Router();

const Comment = require('../models/CommentModel');
const commentController = require('../controllers/commentController');



// id params
router.param('id', async (req, res, next, id) => {
    try {
        const found = await Comment.findById(id);
        if (found) {
            req.commentId = id;
            next(); // call next function
        } else { // if id doesn't exist send 404 status
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500);
    }
});

// get all comments
router.get('/', commentController.fetchAllComments);

// get a specific comment
router.get('/:id', commentController.getComment);

// update a comment
router.put('/:id', commentController.updateComment);

// create a comment
router.post('/', commentController.createComment);

// delete a comment
router.delete('/:id', commentController.deleteComment);



module.exports = router;






