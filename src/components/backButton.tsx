import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import tabletTexture from '../images/tablet_texture.jpg';
import back from '../images/back.png';

const OpenLockButton: React.FC<{
    delayAndGo: MouseEventHandler<HTMLAnchorElement>
}> = (props) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>

            <Link to='/' onClick={props.delayAndGo}>
                <button
                className='lock-button'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    backgroundImage: `url(${tabletTexture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    boxShadow: 'black -3px 3px 15px',
                    cursor: 'pointer',
                    border: 'none',
                    padding: 'none',
                    margin: 'none',
                    borderRadius: '100%',
                    transition: '0.1s'
                }}>
                    <div style={{
                        backgroundImage: `url(${tabletTexture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '20px',
                        height: '20px',
                        boxShadow: 'inset black -3px 3px 15px',
                        border: 'none',
                        padding: 'none',
                        margin: 'none',
                        borderRadius: '100%',
                    }}>

                    </div>
                </button>
            </Link>

            <div style={{
                color: '#3F3A2F',
                fontFamily: '"Gideon Roman"',
                fontWeight: 'bold',
                fontSize: '23px',
                marginTop: '20px',
                userSelect: 'none'
            }}>
                CERRAR
            </div>

        </div>
            
    )
};

export default OpenLockButton;