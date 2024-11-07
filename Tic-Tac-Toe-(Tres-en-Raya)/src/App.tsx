import React from 'react';  
import Game from './components/game';

const App: React.FC = () => (  
  <div>  
    <h1 
    style={{
      fontFamily: 'Raya Display, cursive',
      fontSize: '50px',
      textAlign: 'center',
      textShadow: '0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f'
      }}>Tic-Tac-Toe
      </h1> 
    <Game/>  
  </div>  
);  

export default App;