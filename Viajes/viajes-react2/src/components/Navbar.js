
import React, { useState, useEffect } from 'react';
import mainLogo from './image/flag.png';
import './css/Navbar.css'; // Importa los estilos específicos de la barra de navegación

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    // Agregar o quitar la clase 'scrolled' en función del desplazamiento de la página
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="container">
                <div className="logo-container">
                    <img src={mainLogo} alt="Main Logo" className="main-logo" />
                    <h1 className="logo">ExploreEcuador</h1>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
