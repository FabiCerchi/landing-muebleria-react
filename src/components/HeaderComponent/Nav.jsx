import React from 'react';
import denver_icon from './assets/nav-icon.png';

const Nav = () => {
    return (
        <div>
            <div className='container-fluid facilidades d-none d-sm-block'>
                <p>Hasta 6 cuotas sin interés. Compras en Efectivo o Transferencia 15% off</p>
            </div>
            <nav className="navbar navbar-expand-lg p-2">
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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Destacados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse col-4 justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;