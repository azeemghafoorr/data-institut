import React from 'react';

function HomeValues() {
    return (
        <section className="home-values">
            <div className="container-fluid">
                <div className="inner-container">
                <h2 className="font-bebas">CORE VALUES</h2>

                <div className="row">
                    <div className="col-md-4">
                        <img src="/assets/images/icon-community.svg" alt="Community Icon" />
                        <h4 className="font-nokora">Community Engagement</h4>
                        <p>We believe in the power of collaboration and the value of shared experiences.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/assets/images/icon-practicality.svg" alt="Practicality Icon" />
                        <h4 className="font-nokora">Practicality</h4>
                        <p>We believe in a hands-on learning approach, providing learners with real-world projects and scenarios to apply their knowledge.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="/assets/images/icon-accessability.svg" alt="Accessibility Icon" />
                        <h4 className="font-nokora">Accessibility</h4>
                        <p>We believe that education should not be limited by barriers such as location, background, or financial constraints.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default HomeValues;
