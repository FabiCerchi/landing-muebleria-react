import React from 'react';

const Footer = () => {
    //Aca se realiza la funcionalidad
    const fecha = new Date().getFullYear();
    return (
        <div className='bg-black text-light mt-5 p-5'>
            <div className="row text-center">
                    <a href="#" className='nav-link'>Arriba</a>
                    <p>Denver Design. Todos los derechos reservados. {fecha} </p>
            </div>
        </div>
    );
}

export default Footer;