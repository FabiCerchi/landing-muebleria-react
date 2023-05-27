import React from 'react';
import silla from './assets/silla.webp';
import set from './assets/set.webp';
import home from './assets/home.webp';
import sofa from './assets/sofa.webp';
import muebles from './assets/muebles.webp';
import mesas from './assets/mesas.webp';

const Main = () => {
    return (
        <div className='mt-5' id='productos'>
            <div className="container pt-md-5">
                <div className="row mt-md-2">
                    <div className="col-sm">
                        <img src={silla} alt="sillas" className='img-fluid' />
                    </div>
                    <div className="col-sm">
                        <img src={set} alt="sets muebles" className='img-fluid' />
                    </div>
                    <div className="col-sm">
                        <img src={home} alt="home office" className='img-fluid' />
                    </div>
                </div>
                <div className="row mt-md-2">
                    <div className="col-sm">
                        <img src={sofa} alt="sofa" className='img-fluid' />
                    </div>
                    <div className="col-sm">
                        <img src={muebles} alt="muebles varios" className='img-fluid' />
                    </div>
                    <div className="col-sm">
                        <img src={mesas} alt="mesas" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;