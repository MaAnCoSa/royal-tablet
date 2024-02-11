import { Typography } from '@mui/material';
import React, { useState } from 'react';
import BackButton from './backButton';
import tabletTexture from '../images/tablet_texture.jpg';
import coor from '../images/Coor.png';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/insidePage.css';

const InsidePage: React.FC<{
    clave: string,
    msg: string
}> = (props) => {

    const [closing, setClosing] = useState<string>('openingInside');

    const history = useNavigate();
    const delayAndGo = (e: any) => {
        e.preventDefault();

        setClosing('closingInside');

        setTimeout(() => history('/'), 1000);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0',
                alignItems: 'center',
                backgroundColor: 'lavender',
                width: '320px',
                height: '590px',
                backgroundImage: `url(${tabletTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '80px',
                boxShadow: '10px 10px 10px black',
        }}>

            <div
                className={closing}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    backgroundImage: `url(${tabletTexture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    margin: 'auto',
                    padding: '20px',
                    width: '260px',
                    height: '530px',
                    borderRadius: '70px',
                boxShadow: 'inset black 2px -2px 15px',
                transition: '1s'
            }}>
                

                <div
                    style={{
                        color: 'white',
                        width: '120px',
                        height: '120px',
                        border: 'none',
                        padding: 'none',
                        borderRadius: '100%',
                        marginBottom: '50px',
                        userSelect: 'none'
                    }}>
                        <img src={coor} alt='coor' style={{
                            width: '100%'
                        }} />
                </div>

                    
                    <div style={{
                        color: '#3F3A2F',
                        fontWeight: 'bold',
                        fontFamily: '"Gideon Roman"',
                        fontSize: '25px',
                        textAlign: 'center',
                        marginBottom: '50px',
                        userSelect: 'none'
                    }}>
                        {props.msg}    
                </div>



                <div style={{
                    color: '#3F3A2F',
                    fontWeight: 'bold',
                    fontFamily: '"Gideon Roman"',
                    fontSize: '25px',
                    textAlign: 'center',
                    marginBottom: '15px',
                    userSelect: 'none'
                }}>
                    CLAVE:
                </div>

                

                <div style={{
                    color: '#3F3A2F',
                    fontWeight: 'bold',
                    fontFamily: '"Gideon Roman"',
                    fontSize: '25px',
                    textAlign: 'center',
                    marginBottom: '50px',
                    userSelect: 'none',
                    padding: '5px 10px',
                    boxShadow: 'black -1px 1px 5px',
                    borderRadius: '20px',
                    backgroundImage: `url(${tabletTexture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    {props.clave}
                </div>

                
                
                <BackButton delayAndGo={delayAndGo} />

                </div>

        </div>
        
    );
};

export default InsidePage;