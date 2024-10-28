import React from 'react';
import Box from './box';

interface GridProps {
  board: Array<'X' | 'O' | null>;
  handleClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 100px)',
      gap: '5px',
      backgroundColor: '#111', // Fondo oscuro para resaltar el neón
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)', // Sombra neón
    }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Grid;
