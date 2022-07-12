const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const port = 3009;

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

const io = new Server(server);


// app.get('/', (req, res) => {
//   res.send('hello from server');
// })

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('chat message', (msg) => {
//     console.log('message: ', msg);
//     io.emit('chat message', msg);
//   });
// })

