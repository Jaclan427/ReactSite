import React, { useState } from 'react';
import './Navbar.css';
import Logo from './Assets/Logo.png';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
                <span>EDGE</span>
            </div>
            <nav>
                <ul className="navbar-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li
                        className="dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>More</span>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#Aboutus">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
