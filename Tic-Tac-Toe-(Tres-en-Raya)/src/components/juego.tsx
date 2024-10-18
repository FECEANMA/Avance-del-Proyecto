import React, { useState } from 'react';  
import Cuadrícula from './cuadricula';  

type Jugador = 'X' | 'O' | null;  

const Juego: React.FC = () => {  
  const [tablero, setTablero] = useState<Array<Jugador>>(Array(9).fill(null));  
  const [turno, setTurno] = useState<Jugador>('X');  

  const manejarClick = (index: number) => {  
    const nuevoTablero = [...tablero];  

    if (nuevoTablero[index] || calcularGanador(nuevoTablero)) {  
      return;  
    }  

    nuevoTablero[index] = turno;  
    setTablero(nuevoTablero);  
    setTurno(turno === 'X' ? 'O' : 'X');  
  };  

  const calcularGanador = (tablero: Array<Jugador>): Jugador => {  
    const combinacionesGanadoras = [  
      [0, 1, 2],  
      [3, 4, 5],  
      [6, 7, 8],  
      [0, 3, 6],  
      [1, 4, 7],  
      [2, 5, 8],  
      [0, 4, 8],  
      [2, 4, 6],  
    ];  

    for (let combinacion of combinacionesGanadoras) {  
      const [a, b, c] = combinacion;  
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {  
        return tablero[a];  
      }  
    }  
    return null;  
  };  

  const nuevoJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno('X');
  };

  const ganador = calcularGanador(tablero);  
  const estadoJuego = ganador ? `Ganador: ${ganador}` : `Turno de: ${turno}`;  

  return (  
    <div>  
      <h2>{estadoJuego}</h2>  
      <Cuadrícula tablero={tablero} manejarClick={manejarClick} />  
      <button onClick={nuevoJuego}>Nueva Partida</button>
    </div>  
  );  
};  

export default Juego;