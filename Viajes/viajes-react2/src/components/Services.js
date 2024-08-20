import React from 'react';
import Departure from './image/departures.png';
import Hotel from './image/hotel.png';
import Global from './image/global-market.png';
import Car from './image/car.png';
import './css/Services.css';

const Services = () => {
    return (
        <section className="servicios" id="services">
        <h2>Our services</h2>
        <div className="services-container">
            <div className="service-box">
                <img src={Departure} alt="Departure" className="service-icon" />
                <h3>Flight Reservations</h3>
                <p>We organize and manage your flights with the best rates available.</p>
            </div>
            <div className="service-box">
                <img src={Hotel} alt="Hotel" className="service-icon" />
                <h3>Hotel Reservations</h3>
                <p>Find the best accommodations for your trips, with exclusive offers.</p>
            </div>
            <div className="service-box">
                <img src={Global} alt="Global" className="service-icon" />
                <h3>Tourist Guides</h3>
                <p>Explore cities and countries with experienced, local guides.</p>
            </div>
            <div className="service-box">
                <img src={Car} alt="Car" className="service-icon" />
                <h3>Car Rental</h3>
                <p>Enjoy the freedom to move at your own pace with our car rental services.</p>
            </div>
        </div>
    </section>
    
    );
};

export default Services;
