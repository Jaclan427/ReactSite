import React, { useState } from 'react';
import './Navbar.css';
import Logo from './Assets/Logo.png';

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
<<<<<<< HEAD
                <span>Edge</span>
=======
                <span>Modern Blurprint</span>
>>>>>>> eee6f0e3ed74b0ce3fefb22b9141a68ae628d631
            </div>
            <nav>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <button className="get-started-btn">Get Started</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
