import React from 'react';
import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        { name: 'John Doe', quote: 'This company is fucking ass!', image: './Assets/john.jpg' },
        { name: 'Jane Smith', quote: 'RUN from doing businesss with them!', image: './Assets/jane.jpg' },
    ];

    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p>"{testimonial.quote}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
