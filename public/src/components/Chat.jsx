import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Messages from './Messages.jsx';

export default function Chat({ socket }) {
  const [input, setInput] = useState('');
  const [msgs, setMsg] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', input);
    setInput('');
  }

  useEffect(() => {
    socket.on('message', (msg) => {
      setMsg([...msgs, msg]);
    });
  }, [msgs])

  return (
    <ChatDiv>
      <MessagesSection>
        <Messages msgs={msgs}/>
      </MessagesSection>
      <form onSubmit={handleSubmit}>
        <UserInput
          type='text'
          value={input}
          onChange={handleInput}
        />
        <SendButton
          type='submit'
          value='send'
        />
      </form>
    </ChatDiv>
  );
};

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const MessagesSection = styled.div`
  max-height: 29rem;
  width: 22.2rem;
  overflow-y: auto;
`;

const UserInput = styled.input`
  height: 2rem;
  width: 17rem;
`;

const SendButton = styled.input`
  height: 2rem;
  width: 4.7rem;
  font-size: 1rem;
`;
