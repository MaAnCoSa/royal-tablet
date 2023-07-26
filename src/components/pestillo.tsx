import React from 'react';
import '../stylesheets/pestillo.css';

const Pestillo = ({ pestillo, valPestillo, cambiarPestillo, symbol, altSymbol }: { pestillo: number, valPestillo: number, cambiarPestillo: Function, symbol: any, altSymbol: string}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <div
                className='pestillo'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    //backgroundColor: 'lightgray',
                    // width: '100%',
                    // height: '100%',
                    padding: 'auto',
                    //marginRight: '20px',
                    borderRadius: '5px'
            }}>
                <div
                    className='pestilloBtn'
                    onClick={() => cambiarPestillo(pestillo, -1)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#BC8A5F',
                        width: '20px',
                        height: '15px',
                        fontSize: '50px',
                        //backgroundColor: 'brown',
                        margin: 'auto',
                        cursor: 'pointer',
                        textShadow: '-1px 1px 3px black',
                        userSelect: 'none'
                }}>
                    ❰
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto 4px auto 2px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#E7BC91',
                    color: 'black',
                    fontSize: '45px',
                    boxShadow: 'inset 0 0 5px black',
                    userSelect: 'none'
                }}>
                    {valPestillo}
                </div>
                

                <div
                    className='pestilloBtn'
                    onClick={() => cambiarPestillo(pestillo, 1)}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#BC8A5F',
                        width: '20px',
                        height: '15px',
                        fontSize: '50px',
                        //backgroundColor: 'brown',
                        margin: 'auto',
                        cursor: 'pointer',
                        textShadow: '-1px 1px 3px black',
                        userSelect: 'none'
                }}>
                    ❱
                </div>
            </div>



            <div style={{
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100px',
                userSelect: 'none'
            }}>
                <img src={symbol} alt={altSymbol} className='symbol' />
            </div>
        </div>
    )
}

export default Pestillo;