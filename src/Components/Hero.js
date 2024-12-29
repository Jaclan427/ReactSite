import React from 'react';
import './Hero.css';

<<<<<<< HEAD
function Hero() {
    return (
        <section className="hero">
            <div className="hero-left">
                <h1>Modern Websites for Visionary Businesses.</h1>
                <p>Innovative designs tailored to elevate your online presence.</p>
=======
//function Hero() {
//const words = ['Engineer', 'Developer', 'Plumber', 'Artist', 'Designer', 'Chef', 'Doctor']; // Words to shuffle through

    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${Tampa})` }}
        >
            <div className="hero-content">
//<TypingEffect words={words} typingSpeed={150} deletingSpeed={100} pauseTime={1000} />
                <p>Revolutionize the way you do business with AI-powered solutions.</p>
>>>>>>> eee6f0e3ed74b0ce3fefb22b9141a68ae628d631
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
