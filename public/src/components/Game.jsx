import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Board from './Board.jsx';

export default function Game() {
  const socket = io();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calulateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = calulateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    } else {
      boardCopy[i] = xIsNext ? 'X' : 'O';
      socket.emit('clickSquare', boardCopy[i], i);
    }
  }

  useEffect(() => {
    socket.on('clickSquare', (val, loc) => {
      const boardCopy = [...board];
      boardCopy[loc] = val;
      setBoard(boardCopy);
      setXIsNext(!xIsNext);
    })
  })

  return (
    <div>
      <Board squares={board} handleClick={handleClick} />
      <div>{winner ? `Winner: ${winner}` : `Next: ${(xIsNext ? 'X' : 'O')}`}</div>
    </div>
  );
};
