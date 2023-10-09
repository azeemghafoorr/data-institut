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
                        <h3 className="font-nokora mb-5">Dashboard</h3>

                        <div className="d-flex justify-content-between align-items-center">

                            <h4 className="font-nokora progress-heading"><span className="active">In Progress</span>
                                <span>Completed</span></h4>
                            <a href="">View all</a>
                        </div>

                        <div className="progress-blocks">
                            {/* Repeat this block as needed */}
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
                            {/* End of repeated block */}
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
                        </div> {/* progress-block */}

                        <div className="clearfix"></div> {/* must add this div */}

                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-nokora"><img src="/assets/images/icon-certification-heading.svg" alt="" className="me-3" />Certifications</h4>
                            <a href="">View all</a>
                        </div>

                        <div className="certification-blocks">
                            {/* Repeat this block as needed */}
                            <div className="block">
                                <div className="tag">HTML</div>
                                <h5>Intro to Web Design</h5>
                                <p>Devon Lane</p>
                            </div>
                            {/* End of repeated block */}

                            <div className="block">
                                <div className="tag">HTML</div>
                                <h5>Intro to Web Design</h5>
                                <p>Devon Lane</p>
                            </div>

                            <div className="block">
                                <div className="tag">HTML</div>
                                <h5>Intro to Web Design</h5>
                                <p>Devon Lane</p>
                            </div>

                            <div className="block">
                                <div className="tag">HTML</div>
                                <h5>Intro to Web Design</h5>
                                <p>Devon Lane</p>
                            </div>
                        </div> {/* certification-blocks */}

                        <div className="clearfix"></div> {/* must add this div */}

                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-nokora"><img src="/assets/images/icon-workspace.svg" alt="" className="me-3" />Workspace</h4>
                            <a href="">View all</a>
                        </div>

                        <div className="workspace-blocks">
                            {/* Repeat this block as needed */}
                            <div className="block">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <h5 className="me-3 float-start">Workspace 1</h5>
                                        <span className="badge bg-private">Private</span>
                                    </div>

                                    <div className="dropdown">
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
                                <p>July 20 at 10:21 AM</p>
                            </div>
                            {/* End of repeated block */}
                            <div className="block">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <h5 className="me-3 float-start">Workspace 1</h5>
                                        <span className="badge bg-public">Public</span>
                                    </div>

                                    <div className="dropdown">
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
                                <p>July 20 at 10:21 AM</p>
                            </div>

                        </div>

                        <div className="clearfix"></div> {/* must add this div */}

                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-nokora"><img src="/assets/images/icon-weekly-status.svg" alt="" className="me-3" />Weekly Status</h4>
                        </div>

                        <div className="weekly-status-blocks">
                            {/* Repeat this block as needed */}
                            <div className="block">
                                <h5>Completed Problems</h5>
                                <img className="img-center" src="/assets/images/progress-circle-image.svg" alt="" />
                            </div>
                            {/* End of repeated block */}
                            <div className="block">
                                <h5>Current Streak</h5>
                                <img className="img-center" src="/assets/images/streak-image.svg" alt="" />
                            </div>

                            <div className="block chart">
                                <img className="img-center" src="/assets/images/chart-image.svg" alt="" />
                            </div>
                        </div>

                        <div className="clearfix"></div> {/* must add this div */}

                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-nokora"><img src="/assets/images/icon-jobs.svg" alt="" className="me-3" />Jobs</h4>
                            <a href="">View all</a>
                        </div>

                        <div className="jobs">
                            {/* Repeat this block as needed */}
                            <div className="block">
                                <h5>Data Analyst</h5>
                                <div className="img-container">
                                    <img src="/assets/images/icon-apple.svg" alt="" />
                                    Apple
                                </div>
                                <p>Leveraging algorithms to solve real-world problems with data.</p>
                            </div>
                            {/* End of repeated block */}
                            <div className="block">
                                <h5>Data Analyst</h5>
                                <div className="img-container">
                                    <img src="/assets/images/icon-apple.svg" alt="" />
                                    Apple
                                </div>
                                <p>Leveraging algorithms to solve real-world problems with data.</p>
                            </div>
                            <div className="block">
                                <h5>Data Analyst</h5>
                                <div className="img-container">
                                    <img src="/assets/images/icon-apple.svg" alt="" />
                                    Apple
                                </div>
                                <p>Leveraging algorithms to solve real-world problems with data.</p>
                            </div>
                            <div className="block">
                                <h5>Data Analyst</h5>
                                <div className="img-container">
                                    <img src="/assets/images/icon-apple.svg" alt="" />
                                    Apple
                                </div>
                                <p>Leveraging algorithms to solve real-world problems with data.</p>
                            </div>
                        </div>

                        <div className="clearfix"></div> {/* must add this div */}

                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="font-nokora"><img src="/assets/images/icon-recomended-courses.svg" alt="" className="me-3" />Recommended Courses</h4>
                            <a href="">View all</a>
                        </div>

                        <div className="recommended-blocks mb-0">
                            {/* Repeat this block as needed */}
                            <div className="block">
                                <div className="block-header">
                                    <h5>Data Visualization</h5>
                                    <p>3 Courses</p>
                                </div>
                                <div className="block-body">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut. Lorem ipsum </p>
                                </div>
                                <div className="block-footer">
                                    <div className="buttons-row d-flex justify-content-start">
                                        <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                        <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                    </div>
                                </div>
                            </div>
                            {/* End of repeated block */}
                            <div className="block">
                                <div className="block-header">
                                    <h5>Data Visualization</h5>
                                    <p>3 Courses</p>
                                </div>
                                <div className="block-body">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut. Lorem ipsum </p>
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
                                    <h5>Data Visualization</h5>
                                    <p>3 Courses</p>
                                </div>
                                <div className="block-body">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut. Lorem ipsum </p>
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
                                    <h5>Data Visualization</h5>
                                    <p>3 Courses</p>
                                </div>
                                <div className="block-body">
                                    <p>Lorem ipsum dolor sit amet consectetur. Ut. Lorem ipsum </p>
                                </div>
                                <div className="block-footer">
                                    <div className="buttons-row d-flex justify-content-start">
                                        <div className="btn btn-brand btn-48 btn-outline-primary me-1">Python</div>
                                        <div className="btn btn-brand btn-48 btn-outline-primary ms-1">Beginner</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix"></div> {/* must add this div */}
                    <Footer/>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
