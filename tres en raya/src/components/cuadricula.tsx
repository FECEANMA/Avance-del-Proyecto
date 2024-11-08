import React from 'react';  
import Casilla from './casilla';  

interface CuadrículaProps {  
  tablero: Array<'X' | 'O' | null>;  
  manejarClick: (index: number) => void;  
}  

const Cuadrícula: React.FC<CuadrículaProps> = ({ tablero, manejarClick }) => {  
  return (  
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>  
      {tablero.map((valor, index) => (  
        <Casilla key={index} valor={valor} manejarClick={() => manejarClick(index)} />  
      ))}  
    </div>  
  );  
};  

export default Cuadrícula;