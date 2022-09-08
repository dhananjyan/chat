
const { User, Message } = require('./db/dbConnector.js');
const socket = io => {
    io.on('connection', (socket) => {
        console.log('a user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
        socket.on('newUser', (name) => {
            const connectedUser = new User({
                soketId: socket.id,
                name
            });
            connectedUser.save((err) => {
                if (err) console.log(err)
            });
        });
        socket.on('chat message', async ({ msg, username }) => {

            const newMessage = new Message({
                soketId: socket.id,
                msg
            });
            newMessage.save((err) => {
                if (err) console.log(err)
            });
            io.emit('chat message', { msg, username, id: socket.id });
        });
    });
}

module.exports = socket