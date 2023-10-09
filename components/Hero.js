import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left-col">
                            <div className="text-container">
                                <h1 className="font-bebas">UNLOCK YOUR<br/>POTENTIAL</h1>
                                <p>Join us at Data Institut and embark on a transformative learning experience that goes beyond textbooks and lectures</p>
                                <a href="#" className="btn btn-brand">Start Learning for Free</a>
                            </div>
                            <div className="links">
                                <p>Or sign in with</p>
                                <ul>
                                    <li>
                                        <a href="#"><img src="/assets/images/icon-google.svg" alt="Google" /> Google</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" /> Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="/assets/images/icon-apple.svg" alt="Apple" /> Apple</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-col">
                            <img className="img-fluid" src="/assets/images/hero-img.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
