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
            <div className="pricing">
                <div className="container-fluid">
                    <div className="text-container">
                        <h2 className="font-nokora">Pricing</h2>
                        <p>Our plans provide excellent value to receive top-notch coding education at an affordable
                            rate.</p>
                        <div className="button-row my-5">
                            <a href="">Completed</a>
                            <div className="form-check form-switch mx-3">
                                <input className="form-check-input toggle-on-off" type="checkbox"
                                       id="flexSwitchCheckDefault"/>
                            </div>
                            <span className="save-text">
                        <img src="/assets/images/pricing-absolute-save.svg" alt=""/>
                        <a href="">
                            <b>Annually</b>
                        </a>
                    </span>

                        </div>
                    </div>

                    <div className="row pricing-row">
                        <div className="col-md-4">
                            <div className="pricing-col">
                                <div className="inner-container">
                                    <h4 className="mb-2"><b>Standard</b></h4>
                                    <p className="text-center">For individuals who want to level up their coding
                                        skills. </p>
                                    <div className="price">
                                        <span className="cancelled-price">
                                    <small>$</small>24
                                </span>
                                        <sup>$</sup>
                                        <b className="font-nokora">18</b>
                                        <span>/month</span>
                                    </div>

                                    <div className="bottom">
                                        <ul>
                                            <li>Full access to our course catalog</li>
                                            <li>Full access to certificates and badges</li>
                                            <li>Professional Profile</li>
                                            <li>Job board access</li>
                                            <li>Unlimited mentorship access</li>
                                        </ul>

                                        <a href="" className="btn btn-brand btn-block btn-56">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-col active">
                                <div className="inner-container">
                                    <img className="sale-banner" src="/assets/images/sale-payment-banner.svg" alt=""/>
                                        <h4 className="mb-2"><b>Standard</b></h4>
                                        <p className="text-center">For individuals who want to level up their coding
                                            skills. </p>
                                        <div className="price">
                                             <span className="cancelled-price">
                                    <small>$</small>24
                                </span>
                                            <sup>$</sup>
                                            <b className="font-nokora">18</b>
                                            <span>/month</span>
                                        </div>

                                        <div className="bottom">
                                            <ul>
                                                <li>Full access to our course catalog</li>
                                                <li>Full access to certificates and badges</li>
                                                <li>Professional Profile</li>
                                                <li>Job board access</li>
                                                <li>Unlimited mentorship access</li>
                                            </ul>

                                            <a href="" className="btn btn-brand btn-block btn-56">Get Started</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pricing-col">
                                <div className="inner-container">
                                    <h4 className="mb-2"><b>Standard</b></h4>
                                    <p className="text-center">For individuals who want to level up their coding
                                        skills. </p>
                                    <div className="price">
                                        <sup>$</sup>
                                        <b className="font-nokora">18</b>
                                        <span>/month</span>
                                    </div>

                                    <div className="bottom">
                                        <ul>
                                            <li>Full access to our course catalog</li>
                                            <li>Full access to certificates and badges</li>
                                            <li>Professional Profile</li>
                                            <li>Job board access</li>
                                            <li>Unlimited mentorship access</li>
                                        </ul>

                                        <a href="" className="btn btn-brand btn-block btn-56">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
