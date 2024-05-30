const express = require('express');
const router = express.Router();

const User = require('../models/UserModel');
const userController = require('../controllers/profileController');

// id params
router.param('id', async (req, res, next, id) => {
    try {
        const found = await User.findById(id);
        if (found) {
            //if user exists assign their id to userId
            req.userId = id;
            next(); // call next function
        } else { // if id doesn't exist send 404 status
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500);
    }
});



// get all users
router.get('/', userController.fetchAllUsers);

// get a specific user
router.get('/:id', userController.getUser);

// update a user
router.put('/:id', userController.updateUser);

// delete a user
router.delete('/:id', userController.deleteUser);

//export
module.exports = router;




