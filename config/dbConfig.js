const mongoose = require('mongoose');

mongoose.connection.on(
    'error',
    console.error.bind(console, 'Connection Error:')
);

mongoose.connection.on('open', () => {
    console.log('Connected to DB!');
});

const db = mongoose.connect(`http://127.0.0.1:27017/chatapp`);

module.exports = db;
