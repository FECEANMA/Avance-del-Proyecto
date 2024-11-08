import React, { useState, useEffect } from 'react';
import Grid from './grid';

type Player = 'X' | 'O' | null;

const Game: React.FC = () => {
  const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
  const [turn, setTurn] = useState<Player>('X');
  const [history, setHistory] = useState<Array<string>>([]);

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

  const isBoardFull = (board: Array<Player>): boolean => {
    return board.every(cell => cell !== null);
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner || isBoardFull(board)) {
      const result = winner ? `Winner: ${winner}` : 'Draw!';
      setHistory(prevHistory => [...prevHistory, result]);
    }
  }, [board]);

  const winner = calculateWinner(board);
  const gameStatus = winner 
    ? `Winner: ${winner}` 
    : isBoardFull(board) 
      ? 'Draw!' 
      : `Next turn: ${turn}`;

  return (
    <div>
      <h2 style={{
        fontFamily: 'Raya Display, cursive',
        textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000',
        textAlign: 'center'
      }}>{gameStatus}</h2>
      <Grid board={board} handleClick={handleClick} />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px', fontFamily: 'Raya Display, cursive'}}>
        <button onClick={newGame}>New Game</button>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3 style={{
      fontFamily: 'Raya Display, cursive',
      textAlign: 'center',
      textShadow: '0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0'
      }}>Game History</h3>
        <ol>
          {history.map((entry, index) => (
            <li style={{
              fontFamily: 'Raya Display, cursive',
              textAlign: 'center',
              textShadow: '0 0 5px #FF5F1F, 0 0 10px #FF5F1F, 0 0 15px #FF5F1F'
              }}key={index}>{entry}</li>
          ))}
        </ol>
      </div>
    </div>  
  );
};

export default Game;