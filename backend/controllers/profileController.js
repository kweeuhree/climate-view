const User = require('../models/UserModel');

// get all users
const fetchAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users: users });
}


// get a specific user
const getUser = async (req, res) => {
    // console.log('userid inside get user ', req.userId)
    //populate all their comments----------------------------------------
    const user = await User.findById(req.userId);
    res.status(200).json({ user: user });
}

// update a user
const updateUser = async (req, res) => {
  
    const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, { new: true }) // store updated value

    res.status(201).send(`User ${updatedUser.name} updated`);
}

// create a user
// const createUser = async (req, res) => {
//     const found = await User.findById(req.userId);
//     if(found) {
//         res.status(400).send('User with this ID already exists');
//     } else {
//         const newUser = await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
            

//         res.status(201).send(`User ${newUser.name} created`);
//     }
// }

// delete a user
const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.userId);
    res.status(200).json({ msg: 'User deleted' });
}


module.exports = {
    fetchAllUsers, getUser, updateUser, deleteUser
};