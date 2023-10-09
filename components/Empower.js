import React from 'react';

function Empower() {
    return (
        <section className="empower pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/images/home-empower-image.png" alt="Empower your team" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center align-self-center">
                        <h5>Empower your team</h5>
                        <h2 className="font-bebas">For businesses</h2>
                        <p className="my-3">Whether you are a small startup or an established enterprise, we have the perfect plan to meet your unique requirements. Our business plans are thoughtfully curated to provide you with comprehensive data-driven insights and hands-on learning experiences.</p>

                        <div className="buttons-row d-flex justify-content-center">
                            <a href="#" className="btn btn-brand btn-48 me-1">Sign up</a>
                            <a href="#" className="btn btn-brand btn-48 btn-outline-primary ms-1">Free Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Empower;
