import React, { useState } from 'react';
import galapagos from './image/Galapagos.jpg';
import quito from './image/quito.png';
import cuenca from './image/Cuenca.jpg';
import './css/Destinations.css';

const Destinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    const destinations = [
        { name: 'Islas Galápagos', image: galapagos, description: 'The Galapagos Islands are famous for their unique biodiversity and rich natural history.' },
        { name: 'Quito', image: quito, description: 'Quito is the capital of Ecuador, known for its well-preserved historic center and vibrant culture.' },
        { name: 'Cuenca', image: cuenca, description: 'Cuenca is known for its colonial architecture and picturesque mountain landscapes.' }
    ];

    const openModal = (destination) => {
        setSelectedDestination(destination);
    };

    const closeModal = () => {
        setSelectedDestination(null);
    };

    return (
        <section className="destinos" id="destinations">
            <h2>Popular Destinations</h2>
            <div className="carousel">
                {destinations.map((destination, index) => (
                    <div key={index} className="carousel-item" onClick={() => openModal(destination)}>
                        <img src={destination.image} alt={destination.name} />
                        <h3>{destination.name}</h3>
                    </div>
                ))}
            </div>

            {selectedDestination && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedDestination.image} alt={selectedDestination.name} className="modal-image" />
                        <h3>{selectedDestination.name}</h3>
                        <p>{selectedDestination.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Destinations;
