import React from 'react';  

interface CasillaProps {  
  valor: 'X' | 'O' | null;  
  manejarClick: () => void;  
}  

const Casilla: React.FC<CasillaProps> = ({ valor, manejarClick }) => {  
  return (  
    <button style={{  
      width: '100px',  
      height: '100px',  
      fontSize: '24px',  
      backgroundColor: '#f0f0f0',  
      cursor: 'pointer'  
    }} onClick={manejarClick}>  
      {valor}  
    </button>  
  );  
};  

export default Casilla;