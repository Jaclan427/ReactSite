import React from 'react';
import Navbar from './Components/Navbar.js';
import Hero from './Components/Hero.js';
import Features from './Components/Features.js';
import Aboutus from './Components/Aboutus.js';
import Services from './Components/Services.js';
import Testimonials from './Components/Testimonials.js';
import CTA from './Components/CTA.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <Aboutus />
            <Services />
            <Testimonials />
            <CTA />
        </div>
    );
}

export default App;
