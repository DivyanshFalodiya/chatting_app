const User = require('../models/User');

// Get User by ID
exports.getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

// Get user by username
exports.getUserByEmail = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
};

// Get Friends by User
exports.getFriendsByUser = async (user) => {
    const friends = [];
    friends = user.friends.map(async (fid) => {
        return await this.getUserById(fid);
    });
    return friends;
};

// Get Pending by User
exports.getPending = async (user) => {
    const pending = [];
    pending = user.pending.map(async (pid) => {
        return await this.getUserById(pid);
    });
    return pending;
};

// Get Requests by User
exports.getRequests = async (user) => {
    const requests = [];
    requests = user.requests.map(async (rid) => {
        return await this.getUserById(rid);
    });
    return requests;
};
