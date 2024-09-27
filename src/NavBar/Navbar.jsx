import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul className="nav-menu">
                <a href='/home'>Home</a>
                <a href='/explorer'>Explorer</a>
                <a href='/about'>About</a>
                <a href='/contact' className='nav-contact'>Contact</a>
            </ul>
        </div>
    );
};

export default Navbar;
