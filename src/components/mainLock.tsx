import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OpenLockButton from './openLockButton';
import Pestillo from './pestillo';
import tabletTexture from '../images/tablet_texture.jpg';
import '../stylesheets/lockPage.css';
import kSymbol from '../images/k.png';
import oSymbol from '../images/o.png';
import o2Symbol from '../images/o2.png';
import rSymbol from '../images/r.png';
import zSymbol from '../images/z.png';



const MainLock = ({ setOpen }: { setOpen: Function }) => {

    const [pestillo1, setPestillo1] = useState<number>(0);
    const [pestillo2, setPestillo2] = useState<number>(0);
    const [pestillo3, setPestillo3] = useState<number>(0);
    const [pestillo4, setPestillo4] = useState<number>(0);
    const [pestillo5, setPestillo5] = useState<number>(0);

    const [lockPage, setLockPage] = useState<string>('openLockPage');



    const cambiarPestillo = (pestillo: number, inc: number) => {
        switch (pestillo) {
            case 1:
                if (inc == 1) {
                    pestillo1 == 9 ? setPestillo1(0) : setPestillo1(pestillo1 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo1 == 0 ? setPestillo1(9) : setPestillo1(pestillo1 + inc);
                    break;
                } else {
                    break;
                }
            case 2:
                if (inc == 1) {
                    pestillo2 == 9 ? setPestillo2(0) : setPestillo2(pestillo2 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo2 == 0 ? setPestillo2(9) : setPestillo2(pestillo2 + inc);
                    break;
                } else {
                    break;
                }
            case 3:
                if (inc == 1) {
                    pestillo3 == 9 ? setPestillo3(0) : setPestillo3(pestillo3 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo3 == 0 ? setPestillo3(9) : setPestillo3(pestillo3 + inc);
                    break;
                } else {
                    break;
                }
            case 4:
                if (inc == 1) {
                    pestillo4 == 9 ? setPestillo4(0) : setPestillo4(pestillo4 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo4 == 0 ? setPestillo4(9) : setPestillo4(pestillo4 + inc);
                    break;
                } else {
                    break;
                }
            case 5:
                if (inc == 1) {
                    pestillo5 == 9 ? setPestillo5(0) : setPestillo5(pestillo5 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo5 == 0 ? setPestillo5(9) : setPestillo5(pestillo5 + inc);
                    break;
                } else {
                    break;
                }
            default:
                break;
        }
    };

    const revisarCombinacion = () => {
        const open: boolean =
            pestillo1 === 3
            && pestillo2 === 4
            && pestillo3 === 8
            && pestillo4 === 2
            && pestillo5 === 5;
        open ? setOpen(true) : setOpen(false);
        return open;
    };

    const history = useNavigate();
    const delayAndGo = (e: any) => {
        e.preventDefault();

        setLockPage('closeLockPage');

        setTimeout(() => history('/ze'), 1000);
    };

    return (
        <div>
            <div
                className={lockPage}
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    <Pestillo
                        pestillo={1}
                        valPestillo={pestillo1}
                        cambiarPestillo={cambiarPestillo}
                        symbol={kSymbol}
                        altSymbol="kSymbol" />

                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    
                    <Pestillo
                        pestillo={2}
                        valPestillo={pestillo2}
                        cambiarPestillo={cambiarPestillo}
                        symbol={oSymbol}
                        altSymbol='oSymbol' />

                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    <Pestillo
                        pestillo={3}
                        valPestillo={pestillo3}
                        cambiarPestillo={cambiarPestillo}
                        symbol={o2Symbol}
                        altSymbol='o2Symbol' />

                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    <Pestillo
                        pestillo={4}
                        valPestillo={pestillo4}
                        cambiarPestillo={cambiarPestillo}
                        symbol={rSymbol}
                        altSymbol='rSymbol' />

                </div>
                        
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    <Pestillo
                        pestillo={5}
                        valPestillo={pestillo5}
                        cambiarPestillo={cambiarPestillo}
                        symbol={zSymbol}
                        altSymbol='o2Symbol' />

                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                    
                    <OpenLockButton open={revisarCombinacion()} delayAndGo={delayAndGo} />

                </div>
            
            

            </div>
        </div>
        
    );
};

export default MainLock;