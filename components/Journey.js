import React from 'react';

function Journey() {
    return (
        <section className="journey">
            <div className="container-fluid">
                <div className="header-text">
                    <h2 className="font-bebas">Journey</h2>
                    <p className="my-2">Explore our wide range of courses and learning paths.</p>
                    <div className="buttons-row d-flex justify-content-center">
                        <a href="#" className="btn btn-brand btn-48 me-1">Sign up</a>
                        <a href="#" className="btn btn-brand btn-48 btn-outline-primary ms-1">Discover</a>
                    </div>
                </div>
                <div className="main-block">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-center font-nokora">Learn a new program</h3>
                            <ul>
                                <li>
                                    <img src="/assets/images/icon-python.png" alt="Python Icon" /> Python
                                </li>
                                <li>
                                    <img src="/assets/images/icon-tableau.svg" alt="Tableau Icon" /> Tableau
                                </li>
                                <li>
                                    <img src="/assets/images/icon-sql.svg" alt="SQL Icon" /> SQL
                                </li>
                            </ul>

                            <a href="#" className="btn btn-outline-primary btn-56">View more</a>
                        </div>

                        <div className="col-md-4">
                            <h3 className="text-center font-nokora">Master a skill</h3>
                            <ul>
                                <li>
                                    <img src="/assets/images/icon-data.svg" alt="Data Manipulation Icon" /> Data Manipulation
                                </li>
                                <li>
                                    <img src="/assets/images/icon-data.svg" alt="Data Visualization Icon" /> Data Visualization
                                </li>
                                <li>
                                    <img src="/assets/images/icon-data.svg" alt="SQL Fundamentals Icon" /> SQL Fundamentals
                                </li>
                            </ul>

                            <a href="#" className="btn btn-outline-primary btn-56">View more</a>
                        </div>

                        <div className="col-md-4">
                            <h3 className="text-center font-nokora">Prepare for a new career</h3>
                            <ul>
                                <li>
                                    <img src="/assets/images/icon-data-scientist.svg" alt="Data Scientist Icon" /> Data Scientist
                                </li>
                                <li>
                                    <img src="/assets/images/icon-programming.svg" alt="Programming Icon" /> Programming
                                </li>
                                <li>
                                    <img src="/assets/images/icon-data-analyst.svg" alt="Data Analyst Icon" /> Data Analyst
                                </li>
                            </ul>

                            <a href="#" className="btn btn-outline-primary btn-56">View more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Journey;
