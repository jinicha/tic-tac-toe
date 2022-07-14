const express = require('express');
const { createServer } = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const port = 3009;

app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(express.json());

// const server = app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// })

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', (msg) => {
    console.log('message: ', msg);
    io.emit('message', msg);
  });

  socket.on('clickSquare', (val, loc) => {
    console.log('val, loc: ', val, loc);
    io.emit('clickSquare', val, loc);
  })
})
