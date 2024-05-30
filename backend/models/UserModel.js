const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    comments: [ { type: String } ]
}, 
    { timestamps: true }
);

//create a model
const User = mongoose.model('User', UserSchema);

//export
module.exports = User;