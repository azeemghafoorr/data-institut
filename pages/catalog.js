// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import FilterSidebar from '../components/FilterSidebar';
import Footer from "../components/Footer";
function Catalog() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />

            <div className="dashboard catalog">
                <div className="container-fluid">
                    <sidebar>
                        <FilterSidebar />
                    </sidebar>

                    <h3 className="font-nokora mb-5">Catalog</h3>

                    <h4 className="font-nokora">Skill Paths</h4>

                    <div className="d-flex justify-content-between">
                        <p>Ready to master a subject? Select a skill path to start your journey.</p>
                        <div className="input-group search-bar">
                            <button className="input-group-text" id="basic-addon1"><img src="/assets/images/icon-search.svg" alt="" /></button>
                            <input type="text" className="form-control" placeholder="Search in Catalog" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="catalog-blocks">
                        {/* Repeat the following block as many times as needed */}
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-blue">Beginner</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                <a className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                        {/* End of block repetition */}
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-yellow">Intermediate</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                    <a  className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-red">Advanced</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                    <a  className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-blue">Beginner</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                    <a  className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-yellow">Intermediate</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                    <a  className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <div className="d-flex justify-content-start">
                                    <img src="/assets/images/icon-python.png" alt="" />
                                    <h4>Master Python</h4>
                                </div>
                                <div className="d-flex align-items-start align-items-center">
                                    <span className="badge bg-red">Advanced</span>
                                    <h5 className="float-start ms-3">10 Courses</h5>
                                </div>
                            </div>
                            <div className="block-body">
                                <h5>You’ll learn:</h5>
                                <ul>
                                    <li>Python Fundamentals</li>
                                    <li>Data Manipulation</li>
                                    <li>Data Visualization</li>
                                    <li>Data Analysis</li>
                                    <li>Real-world Applications</li>
                                </ul>
                            </div>
                            <div className="block-footer">
                                <Link href="/course-detail" legacyBehavior>
                                    <a  className="btn btn-brand btn-48">View Path</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="d-flex justify-content-center mt-5">
                        <button type="button" className="btn btn-brand btn-outline-primary btn-56 load-more" data-bs-toggle="modal" data-bs-target="#exampleModal">Load More</button>
                    </div>

                    {/* Modal */}
                    <div className="modal fade catalog-modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        <img src="/assets/images/icon-modal-cross-white.svg" alt="" />
                                    </button>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-4 left-col">
                                                <h4 className="text-center mb-5">Popular Journeys</h4>
                                                <a href="" className="btn btn-brand btn-48">Full-Stack Engineer</a>
                                                <a href="" className="btn btn-brand btn-48">Full-Stack Engineer</a>
                                                <a href="" className="btn btn-brand btn-48">Full-Stack Engineer</a>
                                                <a href="" className="btn btn-brand btn-48">Full-Stack Engineer</a>
                                                <a href="" className="btn btn-brand btn-48">Full-Stack Engineer</a>
                                            </div>
                                            <div className="col-md-8 right-col">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <h4 className="text-center mb-5">Popular Journeys</h4>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h4 className="text-center mb-5">Learn New Technology</h4>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                            <a href="" className="btn btn-brand btn-outline-primary btn-48">Full-Stack Engineer</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </div>
        </div>
        </div>
    );
}

export default Catalog;
