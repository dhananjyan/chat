const mongoose = require('mongoose');
exports.messageSchema = new mongoose.Schema({
    socketId: {
        type: String
    },
    msg: {
        type: String
    },
});
