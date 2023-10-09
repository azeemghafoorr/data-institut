import React from 'react';

function Testimonial() {
    return (
        <section className="testimonial">
            <div className="container-fluid">
                <div className="inner-container">
                <div className="inner-section">
                    <div className="slider">
                        <div className="d-flex">
                            <div className="left-col">
                                <img src="/assets/images/testimonial-img-1.png" alt="Testimonial" />
                            </div>
                            <div className="right-col align-self-center">
                                <img className="left-icon" src="/assets/images/icon-testimonial-left.svg" alt="Testimonial Icon" />
                                <p>I was amazed by the depth of knowledge I gained from this data learning platform. The interactive lessons and hands-on exercises made complex concepts feel effortless to grasp. Thanks to this platform, I now confidently handle data analysis for our business, and the results have been outstanding!</p>
                                <img className="right-icon" src="/assets/images/icon-testimonial-right.svg" alt="Testimonial Icon" />
                                <p className="text-center client-name"><small>John T, Data Analyst</small></p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="left-col">
                                <img src="/assets/images/testimonial-img-1.png" alt="Testimonial" />
                            </div>
                            <div className="right-col align-self-center">
                                <img className="left-icon" src="/assets/images/icon-testimonial-left.svg" alt="Testimonial Icon" />
                                <p>I was amazed by the depth of knowledge I gained from this data learning platform. The interactive lessons and hands-on exercises made complex concepts feel effortless to grasp. Thanks to this platform, I now confidently handle data analysis for our business, and the results have been outstanding!</p>
                                <img className="right-icon" src="/assets/images/icon-testimonial-right.svg" alt="Testimonial Icon" />
                                <p className="text-center client-name"><small>John T, Data Analyst</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
