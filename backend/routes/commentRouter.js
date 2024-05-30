const express = require('express');
const router = express.Router();
//comment model
const Comment = require('../models/CommentModel');
//comment controller
const commentController = require('../controllers/commentController');

// id params
router.param('id', async (req, res, next, id) => {
    try {
        const found = await Comment.findById(id);
        if (found) {
            //assign id as a commentId
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


//export
module.exports = router;






