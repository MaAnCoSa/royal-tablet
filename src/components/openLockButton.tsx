import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import tabletTexture from '../images/tablet_texture.jpg';
import coor from '../images/Coor.png';

const OpenLockButton : React.FC<{
    open: boolean,
    delayAndGo: MouseEventHandler<HTMLAnchorElement>
}> = (props) => {

    return (
        <>
            {props.open ? (
                <Link to='/ze' onClick={props.delayAndGo}>
                    <button
                    className='lock-button'
                    style={{
                        backgroundImage: `url(${tabletTexture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        color: 'white',
                        width: '120px',
                        height: '120px',
                        boxShadow: 'black -3px 3px 15px',
                        cursor: 'pointer',
                        border: 'none',
                        padding: 'none',
                        borderRadius: '100%',
                        transition: '0.1s'
                    }}>
                        <img src={coor} alt='coor' style={{
                            width: '90%'
                        }} />
                    </button>
                </Link>
            ) : (
                    <button
                    className='lock-button'
                    style={{
                        backgroundImage: `url(${tabletTexture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        color: 'white',
                        width: '120px',
                        height: '120px',
                        boxShadow: 'black -3px 3px 15px',
                        cursor: 'pointer',
                        border: 'none',
                        padding: 'none',
                        borderRadius: '100%',
                        transitionDuration: '0.1s'
                }}>
                        <img src={coor} alt='coor' style={{
                            width: '90%'
                        }} />
                </button>
            ) }
        </>
    )
};

export default OpenLockButton;