import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LockPage from './components/lockPage';
import InsidePage from './components/insidePage';
import backgroundTexture from './images/background_texture.jpg';
import './styles/Modal.css';
import { useEffectOnce } from 'react-use';
import { comb } from './comb';
import { changeCombList, changeCode, changeMsg } from './redux/combsSlice';
import { useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch()

  const [loginModal, setLoginModal] = useState<boolean>(true)
  const [tableName, setTableName] = useState<string>("")
 
  const cookies = new Map()

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
    date.setMinutes(date.getMinutes() + 30)
    document.cookie = `royal-tablet-table-name=${table_name}; expires=${date.toUTCString()}`

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ table_name: table_name })
    }
    await fetch('https://backcaliria.vercel.app/rtlogin-user', requestOptions)
    .then(res => res.json())
    .then((sol: { auth: boolean, combs: string[] }) => {
        if (sol.auth) {
          const newCombList: comb[] = []
          sol.combs.forEach((comb) => {
            const parsedComb = JSON.parse(comb)
            newCombList.push(parsedComb)
          })
          dispatch(changeCombList(newCombList))

          setLoginModal(false)
        }
    });
  }

  const cerrarSesion = () => {
    document.cookie = `royal-tablet-table-name=${cookies.get('royal-tablet-table-name')}; expires=${new Date()}`
    dispatch(changeCombList([]))
    dispatch(changeMsg(""))
    dispatch(changeCode(""))
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

      {(!loginModal) && 
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <div className='table-name'>
          Mesa - {tableName}
        </div>

        <Routes>
          <Route path='/' element={<LockPage />} />
          <Route path='/ze' element={<InsidePage />} />
        </Routes>

        <div style={{
          marginTop: '25px'
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
