import React, { useEffect } from 'react';
import openSocket from 'socket.io-client'
import Game from './Game.jsx';
import Chat from './Chat.jsx';
const socket = openSocket('http://localhost:3009');

export default function App() {
  // const socket = io();

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     // socket.emit('reload');
  //   });

  //   socket.on('disconnect', () => {
  //     console.log('disconnect')
  //   });

  //   return () => { // cleanup
  //     socket.off('connect');
  //     socket.off('disconnect');
  //   };
  // }, []);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Game socket={socket} />
      <Chat socket={socket} />
    </div>
  );
};