import React from 'react';

const Footer = () => {

    //Aca se realiza la funcionalidad
    const fecha = new Date().getFullYear();
    return (
        <div>
            <h5>Soy un footer año {fecha} </h5>

        </div>
      );
}
 
export default Footer;