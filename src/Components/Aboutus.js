import React from 'react';
import './Aboutus.css';
import TeamImage from './Assets/Team.jpeg';

function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-content">
                <h2>About Us</h2>
                <p>We are a passionate team dedicated to providing innovative,
                     AI-powered solutions to revolutionize your business. Our 
                     mission is to empower you to reach new heights through 
                     cutting-edge technology and personalized service.</p>
            </div>
            <img src={TeamImage} alt="Our Team" className="team-image" />
        </section>
    );
}

export default AboutUs;
