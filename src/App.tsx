import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LockPage from './components/lockPage';
import InsidePage from './components/insidePage';
import backgroundTexture from './images/background_texture.jpg';
import './styles/Modal.css';
import { useEffectOnce } from 'react-use';



function App() {
  const [loginModal, setLoginModal] = useState<boolean>(true)
  const [tableName, setTableName] = useState<string>("")
 
  const cookies = new Map()

  type comb = {
    d1: number,
    d2: number,
    d3: number,
    d4: number,
    d5: number,
    msg: string,
    code: string
  }

  const emptyComb = {
    d1: 0,
    d2: 0,
    d3: 0,
    d4: 0,
    d5: 0,
    msg: "",
    code: ""
  }

  const [actualComb, setActualComb] = useState<comb>(emptyComb)

  useEffectOnce(() => {
    const cookiesRaw = document.cookie.split('; ')
    cookiesRaw.forEach(i => {
      const pair = i.split('=')
      cookies.set(pair[0], pair[1])
    })
    console.log(cookies)

    if (cookies.has('royal-tablet-table-name')) {
      setTableName(cookies.get('royal-tablet-table-name'))
      login(cookies.get('royal-tablet-table-name'))
    }
  })

  const login = async (table_name: string) => {
    let date = new Date()
    date.setSeconds(date.getSeconds() + 120)
    document.cookie = `royal-tablet-table-name=${table_name}; expires=${date.toUTCString()}`

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ table_name: table_name })
    }
    //await fetch('https://backcaliria.vercel.app/rtlogin-user', requestOptions)
    await fetch('http://localhost:5000/rtlogin-user', requestOptions)
    .then(res => res.json())
    .then((sol: {auth: boolean, comb: string, table_id: string}) => {
        if (sol.auth) {
          const parsedSol = JSON.parse(sol.comb)
          const newSol = {
            d1: parsedSol.d1,
            d2: parsedSol.d2,
            d3: parsedSol.d3,
            d4: parsedSol.d4,
            d5: parsedSol.d5,
            msg: parsedSol.msg,
            code: parsedSol.code
          }
          setActualComb(newSol)
          console.log(parsedSol)
          console.log(actualComb)
          setLoginModal(false)
        }

    });
  }

  const cerrarSesion = () => {
    document.cookie = `royal-tablet-table-name=${cookies.get('royal-tablet-table-name')}; expires=${new Date()}`
    setLoginModal(true)
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

      {loginModal && (
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2 style={{fontSize: '40px'}}>Royal Tablet</h2>

          <h2>Login</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'right',
            height: '50px',
            width: '100%',
            margin: '5px',
            alignItems: 'center'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: 'bold',
              height: '20px',
              padding: 'none',
              margin: '20px 10px'
            }}>Mesa: </p>
            <input style={{
              width: '100%',
              height: '20px',
              marginTop: '10px',
              padding: 'none',
              backgroundColor: '#241707',
              color: '#f7e2c6',
              boxShadow: 'none'
            }} type="text" value={tableName} onChange={(event) => setTableName(event.target.value)} />
          </div>

          <Link to='/'>
            <button
              className='close-modal'
              onClick={() => login(tableName)} >
              ENTRAR
            </button>
          </Link>
        </div>
      </div>
      )}

      {!loginModal && 
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Routes>
          <Route path='/' element={<LockPage
            digit1={actualComb.d1}
            digit2={actualComb.d2}
            digit3={actualComb.d3}
            digit4={actualComb.d4}
            digit5={actualComb.d5}
          />} />
          <Route path='/ze' element={<InsidePage 
            msg={actualComb.msg}
            clave={actualComb.code}
          />} />
        </Routes>

        <div style={{
          marginTop: '40px'
        }}>
          <button className="cerrar-sesion" onClick={() => cerrarSesion()}>
            CERRAR SESIÓN
          </button>
        </div>
      </div>
      }
    </div>
    
  );
}

export default App;
