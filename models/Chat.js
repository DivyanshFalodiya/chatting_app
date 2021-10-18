const mongoose = require('mongoose');

// Define the schema
const ChatSchema = mongoose.Schema({
    people: [String], //  participants
    messages: [
        {
            type: new mongoose.Schema(
                {
                    sender: { String },
                    content: { String },
                },
                {
                    timestamps: true,
                }
            ),
        },
    ],
});

// Define the model
const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
