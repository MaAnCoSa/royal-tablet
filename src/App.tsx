import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LockPage from './components/lockPage';
import InsidePage from './components/insidePage';
import backgroundTexture from './images/background_texture.jpg';

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: '-10px',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Routes>
        <Route path='/' element={<LockPage
          digit1={1}
          digit2={1}
          digit3={1}
          digit4={1}
          digit5={1}
        />} />
        <Route path='/ze' element={<InsidePage 
          msg={"ABRIR ZONA DE ENTRENAMIENTO"}
          clave={"CO'ORPHIK"}
        />} />
      </Routes>
    </div>
    
  );
}

export default App;
