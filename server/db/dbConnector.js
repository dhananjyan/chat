const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { messageSchema } = require('./schema/messageSchema.js');
const { userSchema } = require('./schema/userSchema.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Message = mongoose.model('Message', messageSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Message, User };