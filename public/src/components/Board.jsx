import React from 'react';
import styled from 'styled-components';
import Square from './Square.jsx';

export default function Board({ squares, handleClick }) {
  return (
    <GameBoard>
      {squares.map((square, i) => {
        return (
          <Square key={i} val={square} handleClick={() => handleClick(i)} />
        );
      })}
    </GameBoard>
  );
};

const GameBoard = styled.div`
    display: grid;
    grid-template-rows: 20vh 20vh 20vh;
    grid-template-columns: 20vh 20vh 20vh;
`;
