import React from 'react';
import './Header.css';
import Nav from '../NavBarComponent/Nav';
import Carousel from './Carousel';

const Header = () => {
    return(
        <div>
            <Nav/>
            <Carousel/>
        </div>
    );
}

export default Header;