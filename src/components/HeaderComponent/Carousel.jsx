import React from 'react';
import cEnvios from './assets/c-envios.webp';
import cCuotas from './assets/c-cuotas.webp';
import cLocales from './assets/c-locales.png';
const Carousel = () => {

    const imageUrl = 'https://cdn.shopify.com/s/files/1/0664/8063/6125/files/IMG_9973.jpg?v=1668527137&width=3840';
    return (
        <div className='mt-5'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={cLocales} alt="locales" className='w-100'/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={cEnvios} alt="envios"  className='w-100' />
                    </div>
                    <div className="carousel-item">
                        <img src={cCuotas} alt="cuotas"  className='w-100'/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
