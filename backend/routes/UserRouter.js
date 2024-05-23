const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel');
const userController = require('../controllers/UserController');

// id params
router.param('id', async (req, res, next, id) => {

    const found = await User.findById(id);
    //if id exists, create a userId
    if(found) {
        req.userId = id;
        next(); //call next function
    } else { //if id doesn't exist send 404 status
        res.status(404).send('User not found');
    }
});

// get all users
router.get('/', userController.fetchAllUsers);

// get a specific user
router.get('/:id', userController.getUser);

// update a user
router.get('/:id', userController.updateUser);

// create a user
router.get('/', userController.createUser);

// delete a user
router.get('/:id', userController.deleteUser);

module.exports = router;








module.exports = router;