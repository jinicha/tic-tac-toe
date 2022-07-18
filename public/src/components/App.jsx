import React, { useEffect } from 'react';
import openSocket from 'socket.io-client';
import styled from 'styled-components';
import Game from './Game.jsx';
import Chat from './Chat.jsx';
const socket = openSocket('http://localhost:3009') || openSocket('http://52.72.197.119:3009');

export default function App() {
  return (
    <AppSection>
      <Title>
        <h1>Tic Tac Toe</h1>
      </Title>
      <Body>
        <Game socket={socket} />
        <ChatSection>
          <Chat socket={socket} />
        </ChatSection>
      </Body>
    </AppSection>
  );
};

const AppSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ChatSection = styled.div`
  display: flex;
  justify-content: center;
`;