// Set up environments
require('dotenv').config();
require('./config/dbConfig');

// Set up imports
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const authRouter = require('./routes/AuthRoutes');
const authController = require('./controllers/AuthController');

// Set up app
const app = express();

// Set up middlewares
// app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());

// Set up routes
// app.use('/auth', authRouter);
app.get('/', (req, res) => {
    res.send('hello');
});
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
// });

// Set up io
const server = http.createServer(app);
const io = new socketio.Server(server);

// IO middleware for auth
io.of('/chat').use(authController.isAuthenticated);

// IO code
io.of('/chat').on('connect', (socket) => {
    console.log(`User connected : ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`User disconnected : ${socket.id}`);
    });
});

// Set up listener
server.listen(3000, () => {
    console.log('Server is up and running!');
});
