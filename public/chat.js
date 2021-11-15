// Establishing a Connection from the Client
const socket = io.connect('http://localhost:3000');

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const sender = document.getElementById('feedback');

//Sending data to the connected socket
submitBtn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    sender: FileSystemDirectoryEntry.value,
  });
});

//Incoming data capture
socket.on('chat', (data) => {
  output.innerHTML += `<p><strong>${data.sender}</strong>${data.message}</p>`;
});
