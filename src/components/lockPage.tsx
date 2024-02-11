import React, { useState } from 'react';
import MainLock from './mainLock';
import tabletTexture from '../images/tablet_texture.jpg';
import leatherTexture from '../images/leather_texture.jpg';
import brassTexture from '../images/brass_texture.jpg';
import { Link } from 'react-router-dom';

const LockPage: React.FC<{
    digit1: number,
    digit2: number,
    digit3: number,
    digit4: number,
    digit5: number
}> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

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
                boxShadow: '10px 10px 10px black'

        }}>
            <MainLock setOpen={setOpen}
                digit1={props.digit1}
                digit2={props.digit2}
                digit3={props.digit3}
                digit4={props.digit4}
                digit5={props.digit5}
            />

        </div>
        
    );
};

export default LockPage;