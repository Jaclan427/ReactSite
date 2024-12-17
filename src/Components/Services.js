import React from 'react';
import './Services.css';

function Services() {
    const services = [
        { title: 'AI Solutions', description: 'Advanced AI tools for your business.' },
        { title: 'Web Development', description: 'Custom websites tailored to your needs.' },
        { title: 'Digital Marketing', description: 'Reach your audience effectively.' },
    ];

    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
