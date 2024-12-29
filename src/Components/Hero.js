import React from 'react';
import './Hero.css';
import Tampa from './Assets/Tampa.jpeg';
import TypingEffect from './TypingEffect';

//function Hero() {
//const words = ['Engineer', 'Developer', 'Plumber', 'Artist', 'Designer', 'Chef', 'Doctor']; // Words to shuffle through

    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${Tampa})` }}
        >
            <div className="hero-content">
//                //<TypingEffect words={words} typingSpeed={150} deletingSpeed={100} pauseTime={1000} />
                <p>Revolutionize the way you do business with AI-powered solutions.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
