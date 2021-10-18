const mongoose = require('mongoose');

// Define the schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    friends: [String], //  _id's
    requests: [String], //  _id's
    pending: [String], //  _id's
});

// Define the model
const User = mongoose.model('User', UserSchema);

module.exports = User;
