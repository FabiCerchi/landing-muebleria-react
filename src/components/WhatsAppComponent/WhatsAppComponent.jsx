import React from 'react';
import ws from './assets/ws.svg';

const WhatsApp = () => {
    return (
        <div>
            <div className="fixed-bottom d-flex justify-content-end">
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='d-none d-md-block rounded bg-light-subtle '><p className='m-3 fs-6'>Hola, Necesitás Ayuda?</p></div>
                    <div><a href="https://www.whatsapp.com" target='blank'><img src={ws} alt="whatsapp icon" className='m-3' /></a></div>
                </div>

            </div>
        </div>
    );
}

export default WhatsApp;