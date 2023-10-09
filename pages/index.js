// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeValues from '../components/HomeValues';
import Try from '../components/Try';
import CareerPath from '../components/CareerPath';
import Journey from '../components/Journey';
import Empower from '../components/Empower';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <div className="wrapper" id="wrapper">
            <Navbar />
            <Hero />
            <HomeValues />
            <Try />
            <CareerPath />
            <Journey />
            <Empower />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default HomePage;
