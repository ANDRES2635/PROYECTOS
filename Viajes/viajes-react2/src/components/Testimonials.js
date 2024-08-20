import React from 'react';
import './css/Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonios" id="testimonials">
            <h2>What our clients say</h2>
            <div className="testimonio">
                <p>“The trip was amazing, and the organization was perfect. Without a doubt, an experience I will repeat..”</p>
                <h4>— Juan Pérez</h4>
            </div>
            <div className="testimonio">
                <p>“LThe destinations were beautiful, and the service was excellent. Highly recommended.”</p>
                <h4>— María Gómez</h4>
            </div>
        </section>
    );
};

export default Testimonials;
