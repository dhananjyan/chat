const mongoose = require('mongoose');
exports.userSchema = new mongoose.Schema({
    soketId: {
        type: String
    },
    name: {
        type: String
    }
});
