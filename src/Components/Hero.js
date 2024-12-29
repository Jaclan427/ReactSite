import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Modern Websites for Visionary Businesses.</h1>
                <p>Innovative designs tailored to elevate your online presence.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-primary">Learn More</button>
                </div>
            </div>
            <div className="hero-right">
                <img
                    src="https://via.placeholder.com/300x400" /* Replace with your image URL */
                    alt="Placeholder"
                />
            </div>
        </section>
    );
}

export default Hero;
