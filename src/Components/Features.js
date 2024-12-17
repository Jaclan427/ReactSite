import React from 'react';
import './Features.css';
import { FaRocket, FaCogs, FaLightbulb } from 'react-icons/fa';

function Features() {
    return (
        <section className="features">
            <h2>Our Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <FaRocket size={40} />
                    <h3>Fast Performance</h3>
                    <p>Our solution is optimized for fast, responsive experiences.</p>
                </div>
                <div className="feature-card">
                    <FaCogs size={40} />
                    <h3>Customizable</h3>
                    <p>Adapt our solutions to meet your specific business needs.</p>
                </div>
                <div className="feature-card">
                    <FaLightbulb size={40} />
                    <h3>Innovative Solutions</h3>
                    <p>We use cutting-edge technology to revolutionize your business.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
