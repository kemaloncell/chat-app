const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000);

app.use(express.static('public'));

const io = socket(server);

// Capture Connection from Server
io.on('connection', (socket) => {
  // The id of the socket (from the server)
  console.log(socket.id);

  //Incoming data capture
  socket.on('chat', (data) => {
    // Broadcast Send data to All Sockets
    io.socket.emit('chat', data);
  });
});
