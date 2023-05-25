import React from 'react';
import icon from './assets/nav-icon.png'

const Nav = () => {
    return (
        <div>
            <div className='container-fluid facilidades d-none d-sm-block'>
                <p>Hasta 6 cuotas sin interés. Compras en Efectivo o Transferencia 15% off</p>
            </div>
            <nav class="navbar navbar-expand-lg p-2">
                <div class="container-fluid">
                    <div className="col">
                        <a href="#"><img src={icon} alt="denver-icon" style={{ width: '100px' }} /></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse col"  id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Destacados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;