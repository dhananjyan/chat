const PORT =  8080;
module.exports = {
    PORT,
    environment: {
        development: {
            serverURL: `http://localhost:${PORT}/`,
            dbString: 'mongodb://localhost:27017/chat'
        },
        production: {
            serverURL: `http://localhost:${PORT}/`,
            dbString: 'mongodb://localhost:27017/chat-prod'
        }
    }
}