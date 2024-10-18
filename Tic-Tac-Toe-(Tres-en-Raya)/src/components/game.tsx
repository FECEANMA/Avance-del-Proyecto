import React, { useState } from 'react';
import Grid from './grid';

type Player = 'X' | 'O' | null;

const Game: React.FC = () => {
  const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
  const [turn, setTurn] = useState<Player>('X');

  const handleClick = (index: number) => {
    const newBoard = [...board];

    if (newBoard[index] || calculateWinner(newBoard)) {
      return;
    }

    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const calculateWinner = (board: Array<Player>): Player => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };

  const winner = calculateWinner(board);
  const gameStatus = winner ? `Winner: ${winner}` : `Next turn: ${turn}`;

  return (
    <div>
      <h2>{gameStatus}</h2>
      <Grid board={board} handleClick={handleClick} />
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default Game;
