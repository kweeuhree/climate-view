const User = require('../models/UserModel');

// get all users
const fetchAllUsers = async (req, res) => {
    //find all and send as a response
    const users = await User.find();
    res.status(200).json({ users: users });
}


// get a specific user
const getUser = async (req, res) => {
    // find by id
    const user = await User.findById(req.userId);
    res.status(200).json({ user: user });
}

// update a user
const updateUser = async (req, res, next) => {
    //update object with req body
    const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, { new: true }) // store updated value
    console.log(`profileController: updated User ${updatedUser}`);
    //send updated object
    res.status(201).json({ updatedUser });
    next();
}

// delete a user
const deleteUser = async (req, res) => {
    // delete using id
    await User.findByIdAndDelete(req.userId);
    res.status(200).json({ msg: 'User deleted' });
}


module.exports = {
    fetchAllUsers, getUser, updateUser, deleteUser
};