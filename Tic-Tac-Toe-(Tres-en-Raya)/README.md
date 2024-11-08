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
    - **¿Qué hace este fragmento de código?**
      Define un componente de React llamado Box, que representa una celda en una cuadrícula. El componente 
      recibe dos propiedades: value, que determina el contenido de la celda, y handleClick, que se ejecuta al hacer clic en la celda.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Cumple con el requisito de crear un componente de React al encapsular la lógica y el estilo de una celda en un solo lugar. Utiliza 
      propiedades para manejar la interacción y el estado visual, lo que es fundamental en el desarrollo de interfaces de usuario en 
      React.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque utiliza las características de React, como componentes funcionales y propiedades, para crear una interfaz interactiva y 
      dinámica.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Incluye componentes para las casillas, la cuadrícula y la lógica del juego.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Crea componentes reutilizables para la cuadrícula y las casillas, permitiendo una estructura modular y fácil de mantener.
    - **¿Por qué es la mejor forma de implementarlo?**
      Utiliza React para gestionar el estado y la interfaz, lo que permite una actualización eficiente de la UI. La separación de 
      componentes mejora la legibilidad y la organización del código.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Define un componente de React llamado Grid, que renderiza una cuadrícula 3x3 utilizando JSX. Cada celda de la cuadrícula se 
      representa mediante un componente Box, que se activa al hacer clic.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Cumple con el requisito de usar JSX al estructurar visualmente la cuadrícula y los elementos del juego. JSX permite escribir un 
      marcado similar a HTML dentro de JavaScript.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque JSX proporciona una sintaxis clara y declarativa, lo que mejora la legibilidad y el mantenimiento del código. Además, 
      permite integrar la lógica de renderizado y la estructura visual en un solo lugar.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Utiliza JSX para renderizar un componente Box para cada elemento en el array board. Cada Box recibe una clave única (key) y un 
      manejador de clics que llama a handleClick con el índice correspondiente. Esto permite que cada casilla del juego sea interactiva 
      y se actualice correctamente al hacer clic.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Permite integrar lógica de JavaScript dentro del marcado, lo que es esencial para controlar el estado del juego. Al asignar un key 
      a cada Box, React puede identificar y gestionar eficientemente cada componente, facilitando la verificación de las casillas 
      seleccionadas y el seguimiento del estado del juego.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque combina la lógica de renderizado y la interacción del usuario en un solo lugar. Esto mejora la legibilidad y el 
      mantenimiento del código, además de optimizar el rendimiento de React al permitir una actualización selectiva de componentes 
      basados en cambios de estado.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Este código define dos componentes en React: Box para mostrar el valor de una casilla (X, O o vacío) y Grid para gestionar el 
      tablero.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Cumple al utilizar props para pasar información entre componentes. Box recibe su valor y una función de clic, mientras que Grid 
      maneja el estado del tablero.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque promueve la reutilización de componentes y la separación de responsabilidades. Cada componente es simple, claro y fácil de 
      mantener, facilitando la gestión del estado del juego.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Este fragmento de código maneja el clic en una casilla de un juego, actualizando el estado del tablero y alternando el turno entre 
      los jugadores. Si la casilla ya está ocupada o hay un ganador, no se realiza ninguna acción.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Cumple con el requisito de renderizar condicionalmente al mostrar 'X' o 'O' en las casillas según el turno del jugador. Esto se 
      logra mediante la asignación de newBoard[index] = turn, que actualiza la casilla correspondiente.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque utiliza un enfoque claro y directo para manejar el estado del juego. La verificación de condiciones antes de actualizar el 
      tablero asegura que no se realicen acciones inválidas.
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      Define un componente Grid en React que renderiza una cuadrícula de casillas. Utiliza la función map para iterar sobre el array 
      board, creando un componente Box para cada elemento, lo que permite mostrar múltiples componentes de manera eficiente.
    - **¿Cómo cumple con el requisito de la habilidad?**
      Cumple con el requisito de renderizar múltiples componentes al utilizar el método map de JavaScript. Este método transforma cada 
      elemento del array board en un componente Box, asegurando que todos los elementos se rendericen en la cuadrícula de forma dinámica 
      y organizada.
    - **¿Por qué es la mejor forma de implementarlo?**
      Porque map es una técnica eficiente y declarativa para renderizar listas en React.
- **Habilidades**:
    - **Mantener componentes puros**: Asegurar que las casillas no muten el estado directamente y solo reciban información a través de props.
      ```
      {board.map((value, index) => (
      <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
      ```
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
    - **Gestionar el estado**: Controlar el estado del juego, incluyendo qué casillas están ocupadas y qué jugador está en turno.
      ```
      const [board, setBoard] = useState<Array<Player>>(Array(9).fill(null));
      //
      const [turn, setTurn] = useState<Player>('X');
      ```
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
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
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
- **Habilidades**:
    - **Efectos opcionales**: Podrías usar `useEffect` para manejar acciones como reiniciar el juego automáticamente o guardar el historial de partidas.
      ```
      useEffect(() => {
      const winner = calculateWinner(board);
      if (winner || isBoardFull(board)) {
      const result = winner ? `Winner: ${winner}` : 'Draw!';
      setHistory(prevHistory => [...prevHistory, result]);
      }
      }, [board]);
      ```
    - **¿Qué hace este fragmento de código?**
      
    - **¿Cómo cumple con el requisito de la habilidad?**
      
    - **¿Por qué es la mejor forma de implementarlo?**
      
