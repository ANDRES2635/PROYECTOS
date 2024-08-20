import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Destinations />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;