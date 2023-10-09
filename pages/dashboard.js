// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function Dashboard() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />

            <div className="dashboard">
                <div className="container-fluid">
                    <sidebar>
                        <OffCanvas/>
                    </sidebar>

                    <h3 className="font-nokora mb-5">
                        <img className="me-3" src="/assets/images/dashboard-back-icon.svg" alt="" />
                        Dashboard
                    </h3>

                    <div className="all-courses-top-bar">
                        <ul className="d-flex justify-content-start align-items-center">
                            <li className="active">
                                All Courses <img className="ms-2" src="/assets/images/icon-dashboard-top-all-courses.svg" alt="" />
                            </li>
                            <li>
                                Completed <img className="ms-2" src="/assets/images/icon-dashboard-top-completed.svg" alt="" />
                            </li>
                            <li>
                                In Progress <img className="ms-2" src="/assets/images/icon-dashboard-top-pending.svg" alt="" />
                            </li>
                        </ul>
                    </div>

                    <div className="progress-blocks mb-0">
                        {/* Repeat this block for each course */}
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        {/* End of course block */}
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-header">
                                <h5 className="font-nokora">Intro to Python</h5>
                                <p>4 Chapters</p>
                                <div className="dropdown progress-menu">
                                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/icon-progress-menu.svg" alt="" />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="block-body">
                                <p>Building infrastructures to manage data efficiently.</p>
                                <p>Progress:</p>
                                <p>50% Complete</p>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="block-footer">
                                <div className="buttons-row d-flex justify-content-start">
                                    <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                    <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                   <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
