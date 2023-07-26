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
        <Route path='/' element={<LockPage />} />
        <Route path='/ze' element={<InsidePage />} />
      </Routes>
    </div>
    
  );
}

export default App;
