const http = require('http');
const express = require('express');
const { Server } = require("socket.io");
const socket = require('./socket.js');

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

socket(io);

server.listen(8000, () => {
    console.log('listening on *:8000');
});