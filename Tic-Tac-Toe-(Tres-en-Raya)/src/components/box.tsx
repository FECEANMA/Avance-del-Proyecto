import React from 'react';

interface BoxProps {
  value: 'X' | 'O' | null;
  handleClick: () => void;
}

const Box: React.FC<BoxProps> = ({ value, handleClick }) => {
  return (
    <button
      style={{
        width: '100px',
        height: '100px',
        fontSize: '24px',
        backgroundColor: '#646cff',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Box;
