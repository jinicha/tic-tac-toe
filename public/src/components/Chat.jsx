import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Messages from './Messages.jsx';

export default function Chat() {
  const socket = io()
  const [input, setInput] = useState('');
  const [msgs, setMsg] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', input);
    setMsg([...msgs, input]);
    setInput('');
  }

  useEffect(() => {
    socket.on('message', (msg) => {
      setMsg([...msgs, msg]);
    })
  }, [msgs])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={handleInput}
        />
        <input
          type='submit'
          value='send'
        />
      </form>
      <Messages msgs={msgs}/>
    </div>
  );
};
