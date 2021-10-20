const userController = require('./UserController');

// Middle ware for auth check
// Everything we need when connection is setup is added to the socket as an object here.
exports.isAuthenticated = async (socket, next) => {
    const email = socket.handshake.auth.email;
    if (!email) return next(new Error('Invalid email!'));

    const user = await userController.getUserByEmail(email);
    if (!user) return next(new Error('User not found!'));

    socket.email = email;
    socket.user = user;
    socket.friends = await userController.getFriendsByUser(socket.user);
    next();
};
