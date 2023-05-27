import React from 'react';
import denver_icon from './assets/nav-icon.png';
import ml from './assets/ml.svg';
import ig from './assets/ig.svg';
import fb from './assets/fb.svg';
const Nav = () => {
    return (
        <div>
            <div className='container-fluid facilidades d-none d-sm-block fixed-top' id="home">
                <p>Hasta 6 cuotas sin interés. Compras en Efectivo o Transferencia 15% off</p>
            </div>
            <nav className="navbar navbar-expand-lg p-2 fixed-top mt-md-4">
                <div className="container-fluid">
                    <div className="col-4">
                        <a href="#"><img src={denver_icon} alt="denver-icon" style={{ width: '100px' }} /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse col-4 justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="#productos">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse col-4 justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link red" href="https://www.facebook.com" target='blank'><img src={fb} alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link red" href="https://www.instagram.com"target='blank'><img src={ig} alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link red" href="https://www.mercadolibre.com.ar" target='blank'><img src={ml} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;