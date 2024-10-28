import React from 'react';

interface BoxProps {
  value: 'X' | 'O' | null;
  handleClick: () => void;
}

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
        color: value === 'X' ? '#FF5733' : value === 'O' ? '#33FF57' : '#FFF', // Colores para X y O
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)', // Sombra neón
        transition: 'transform 0.2s',
      }}
    >
      {value}
    </div>
  );
};

export default Box;
