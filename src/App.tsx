import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LockPage from './components/lockPage';
import InsidePage from './components/insidePage';
import backgroundTexture from './images/background_texture.jpg';
import './styles/Modal.css';



function App() {
  const [loginModal, setLoginModal] = useState<boolean>(true)
  const [tableName, setTableName] = useState<string>("")
  //const [tableId, setTableId] = useState<string>("")

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

  const login = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ table_name: tableName })
    }
    await fetch('https://backcaliria.vercel.app/rtlogin-user', requestOptions)
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
          //setTableId(sol.table_id)
        }

    });
  }

  /* const [d1, setD1] = useState<number>(0)
  const [d2, setD2] = useState<number>(0)
  const [d3, setD3] = useState<number>(0)
  const [d4, setD4] = useState<number>(0)
  const [d5, setD5] = useState<number>(0)
  const [clave, setClave] = useState<string>("")
  const [mensaje, setMensaje] = useState<string>("") */

  /* const get_RT_sol = async () => {
      await fetch(`https://backcaliria.vercel.app/rtsol/${tableId}`)
      .then(res => res.json())
      .then(sol => {
          const newSol = {
            d1: sol.comb.d1,
            d2: sol.comb.d2,
            d3: sol.comb.d3,
            d4: sol.comb.d4,
            d5: sol.comb.d5,
            msg: sol.comb.msg,
            code: sol.comb.code
          }
          setSol(newSol)

      });
  } */

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

          <button
            className='close-modal'
            onClick={() => login()} >
            ENTRAR
          </button>
        </div>


        
      </div>
      )}

      {!loginModal && 
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
      }
    </div>
    
  );
}

export default App;
