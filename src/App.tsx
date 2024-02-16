import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LockPage from './components/lockPage';
import InsidePage from './components/insidePage';
import backgroundTexture from './images/background_texture.jpg';
import { useEffectOnce } from 'react-use';



function App() {

  const [d1, setD1] = useState<number>(0)
  const [d2, setD2] = useState<number>(0)
  const [d3, setD3] = useState<number>(0)
  const [d4, setD4] = useState<number>(0)
  const [d5, setD5] = useState<number>(0)
  const [clave, setClave] = useState<string>("")
  const [mensaje, setMensaje] = useState<string>("")


  useEffectOnce(() => {
    get_RT_sol()
  })

  const get_RT_sol = async () => {
      await fetch('https://backcaliria.vercel.app/rtsol')
      .then(res => res.json())
      .then(sol => {
          setD1(sol.digit1)
          setD2(sol.digit2)
          setD3(sol.digit3)
          setD4(sol.digit4)
          setD5(sol.digit5)
          setClave(sol.clave)
          setMensaje(sol.message)

      });
      console.log("Se hizo un GET")
  }

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
          digit1={d1}
          digit2={d2}
          digit3={d3}
          digit4={d4}
          digit5={d5}
        />} />
        <Route path='/ze' element={<InsidePage 
          msg={mensaje}
          clave={clave}
        />} />
      </Routes>
    </div>
    
  );
}

export default App;
