import React from 'react';
import Box from './box';

interface GridProps {
  board: Array<'X' | 'O' | null>;
  handleClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({ board, handleClick }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' }}>
      {board.map((value, index) => (
        <Box key={index} value={value} handleClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Grid;
