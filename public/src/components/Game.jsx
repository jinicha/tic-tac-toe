import React, { useState, useEffect } from 'react';
import Board from './Board.jsx';

export default function Game({ socket }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [hasClicked, setHasClicked] = useState(0);

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
      boardCopy[i] = xIsNext ? 'x' : 'o';
      socket.emit('clickSquare', boardCopy[i], i);
    }
  }

  const restartButton = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  useEffect(() => {
    socket.on('clickSquare', (val, loc) => {
      const boardCopy = [...board];
      boardCopy[loc] = val;
      setHasClicked(hasClicked + 1);
      setBoard(boardCopy);
      setXIsNext(!xIsNext);
    })
  }, [board])

  return (
    <div>
      <button onClick={restartButton}>restart</button>
      <Board squares={board} handleClick={handleClick} />
      <div>{winner ? `${winner} won!` : (hasClicked === 9 ? 'draw' : `next player: ${(xIsNext ? 'x' : 'o')}`)}</div>
    </div>
  );
};
