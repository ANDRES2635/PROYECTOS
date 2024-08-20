import React from 'react';
import './css/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="overlay">
                <h1>Explore Ecuador</h1>
                <p>Discover the most impressive destinations in our country..</p>
                <button className="cta-btn">Start your journey</button>
            </div>
        </section>
    );
};

export default Hero;
