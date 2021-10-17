exports.isAuthenticated = (socket, next) => {
    console.log(socket.id);
    next();
};
