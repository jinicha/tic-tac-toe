import React, { useState } from 'react';
import Messages from './Messages.jsx';

export default function Chat() {
  const [input, setInput] = useState('');
  const [msgs, setMsg] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const handleClick = (e) => {
    e.preventDefault();
    setMsg([...msgs, input]);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
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
