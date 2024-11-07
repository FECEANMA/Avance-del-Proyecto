- **Habilidades**:
    - **Escribir tu primer componente de React**: Crear un componente `Casilla` que represente cada celda de la cuadrícula.
      ```
      const Box: React.FC<BoxProps> = ({ value, handleClick }) => {
      return (
      <div 
      onClick={handleClick} 
      style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
        color: value === 'X' ? '#FF5733' : value === 'O' ? '#337AB7' : '#FFF', 
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
        transition: 'transform 0.2s',
      }}
      >
        {value}
      </div>
      );
      };
      ```
    - **Crear archivos con múltiples componentes**: Crear componentes para la cuadrícula, las casillas y los controles del juego.
      ```
      //Box
      
      import React from 'react';

      interface BoxProps {
      value: 'X' | 'O' | null;
      handleClick: () => void;
      }

      const Box: React.FC<BoxProps> = ({ value, handleClick }) => {
      return (
      <div onClick={handleClick} style={{ /* estilos */ }}>
      {value}
      </div>
      );
      };

      export default Box;
      
      //Grid
      
      import React from 'react';
      import Box from './box';

      interface GridProps {
      board: Array<'X' | 'O' | null>;
      handleClick: (index: number) => void;
      }

      const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
      return (
      <div style={{ /* estilos */ }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      </div>
      );
      };

      export default Grid;
      
      //Game
      
      import React, { useState } from 'react';
      import Grid from './grid';

      const Game: React.FC = () => {
      const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
      const [turn, setTurn] = useState<Player>('X');

      const handleClick = (index: number) => { /* lógica */ };
      const calculateWinner = (board: Array<Player>): Player => { /* lógica */ };
      const newGame = () => { /* lógica */ };

      return (
      <div>
      <h2>{gameStatus}</h2>
      <Grid board={board} handleClick={handleClick} />
      <button onClick={newGame}>New Game</button>
      </div>
      );
      };

      export default Game;
      ```
    - **Añadir marcado a JavaScript con JSX**: Usar JSX para estructurar la cuadrícula 3x3 y los elementos del juego.
      ```
      const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
      return (
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 100px)',
      gap: '5px',
      backgroundColor: '#111', 
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', 
      }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      </div>
      );
      };
      ```
    - **Añadir llaves con JSX**: Utilizar llaves para controlar las casillas seleccionadas y verificar si hay un ganador.
      ```
      {board.map((value, index) => (
      <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      
      //
      
      for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
      }
      }
      ```
    - **Configurar componentes con props**: Pasar información sobre las casillas (X o O) y el estado del juego como props.
      ```
      interface BoxProps {
      value: 'X' | 'O' | null; // Prop para el valor de la casilla
      handleClick: () => void; // Prop para la función de clic
      }

      const Box: React.FC<BoxProps> = ({ value, handleClick }) => {
      return (
      <div onClick={handleClick} style={{ /* estilos */ }}>
      {value} // Se muestra el valor de la casilla
      </div>
      );
      };
      
      //
      
      interface GridProps {
      board: Array<'X' | 'O' | null>; // Prop para el estado del tablero
      handleClick: (index: number) => void; // Prop para la función de clic
      }

      const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
      return (
      <div style={{ /* estilos */ }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      </div>
      );
      };
      ```
    - **Renderizar condicionalmente**: Mostrar X o O en las casillas según el turno del jugador.
      ```
      const handleClick = (index: number) => {
      const newBoard = [...board];

      if (newBoard[index] || calculateWinner(newBoard)) {
      return; // Si la casilla ya tiene un valor o hay un ganador, no se hace nada
      }

      newBoard[index] = turn; // Se coloca la marca del jugador actual
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X'); // Cambia el turno
      };
      ```
    - **Renderizar múltiples componentes a la vez**: Renderizar todas las casillas de la cuadrícula utilizando `map`.
      ```
      const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
      return (
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 100px)',
      gap: '5px',
      backgroundColor: '#111', 
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', 
      }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      </div>
      );
      };
      ```
    - **Mantener componentes puros**: Asegurar que las casillas no muten el estado directamente y solo reciban información a través de props.
      ```
      {board.map((value, index) => (
      <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      ```
    - **Entender la UI como árboles**: Organizar los componentes de forma jerárquica, donde las casillas son nodos hijos de la cuadrícula.
      ```
      const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
      return (
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 100px)',
      gap: '5px',
      backgroundColor: '#111', 
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', 
      }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      </div>
      );
      };
      ```
    - **Controlar eventos del usuario**: Capturar los clics en las casillas para alternar entre los turnos de los jugadores.
      ```
      const handleClick = (index: number) => {
      const newBoard = [...board];

      if (newBoard[index] || calculateWinner(newBoard)) {
      return;
      }

      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      };
      ```
    - **Gestionar el estado**: Controlar el estado del juego, incluyendo qué casillas están ocupadas y qué jugador está en turno.
      ```
      const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
      //
      const [turn, setTurn] = useState<Player>('X');
      ```
    - **Renderizado condicional (detectar ganador)**: Verificar si hay un ganador y mostrar un mensaje cuando el juego termine.
      ```
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
      
      //
      
      const winner = calculateWinner(board);
      const gameStatus = winner 
      ? `Winner: ${winner}` 
      : isBoardFull(board) 
      ? 'Draw!' 
      : `Next turn: ${turn}`;
      
      //
      
      return (
      <div>
      <h2 style={{
      fontFamily: 'Raya Display, cursive',
      textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000',
      textAlign: 'center'
       }}>{gameStatus}</h2>
      <Grid board={board} handleClick={handleClick} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontFamily: 'Raya Display, cursive' }}>
      <button onClick={newGame}>New Game</button>
      </div>
      </div>  
      );
      ```
    - **Actualizar el estado**: Actualizar el estado de las casillas a medida que los jugadores colocan X o O.
      ```
      const handleClick = (index: number) => {
      const newBoard = [...board];

      if (newBoard[index] || calculateWinner(newBoard)) {
      return;
      }

      newBoard[index] = turn; // **Actualiza el estado de la casilla**
      (newBoard); // **Actualiza el estado del tablero**
      setTurn(turn === 'X' ? 'O' : 'X'); // **Cambia el turno**
      };
      ```
    - **Levantar el estado**: Compartir el estado entre los componentes para que la cuadrícula y los controles del juego estén sincronizados.
      ```
      const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
      const [turn, setTurn] = useState<Player>('X');
      
      //
      
      const handleClick = (index: number) => {
      const newBoard = [...board];

      if (newBoard[index] || calculateWinner(newBoard)) {
        return;
      }

      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === 'X' ? 'O' : 'X');
      };
      
      //
      
      <Grid board={board} handleClick={handleClick} />
      ```
    - **Efectos opcionales**: Podrías usar `useEffect` para manejar acciones como reiniciar el juego automáticamente o guardar el historial de partidas.
      ```
      
      ```
