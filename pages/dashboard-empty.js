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
                        <h4 className="font-nokora">In Progress</h4>
                    </div>

                    <div className="progress-blocks m-0 mb-5">
                        <div className="empty-block">
                            <img className="my-3" src="/assets/images/dashboard-empty-man.png" alt="" />
                            <h5><b>Oops, It’s Empty Here</b></h5>
                            <p>Get started now and add some courses</p>
                        </div>
                    </div> {/* progress-block */}
                    <div className="clearfix"></div> {/* must add this div */}

                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="font-nokora"><img src="/assets/images/icon-certification-heading.svg" alt="" className="me-3" />Certifications</h4>
                    </div>

                    <div className="certification-blocks m-0 mb-5">
                        <div className="empty-block">
                            <img className="my-3" src="/assets/images/dashboard-empty-man.png" alt="" />
                            <h5><b>Oops, It’s Empty Here</b></h5>
                            <p>Get started now and add some courses</p>
                        </div>
                    </div> {/* certification-blocks */}
                    <div className="clearfix"></div> {/* must add this div */}

                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="font-nokora"><img src="/assets/images/icon-workspace.svg" alt="" className="me-3" />Workspace</h4>
                        <a href="">View all</a>
                    </div>

                    <div className="workspace-blocks m-0 mb-5">
                        <div className="empty-block">
                            <img className="my-3" src="/assets/images/dashboard-empty-man.png" alt="" />
                            <h5><b>Oops, It’s Empty Here</b></h5>
                            <p>Get started now and add some courses</p>
                        </div>
                    </div>
                    <div className="clearfix"></div> {/* must add this div */}

                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="font-nokora"><img src="/assets/images/icon-jobs.svg" alt="" className="me-3" />Jobs</h4>
                        <a href="">View all</a>
                    </div>

                    <div className="jobs">
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

                    <div className="empty-banner">
                        <div className="text-container">
                            <h3>Unlock exclusive features and premium benefits</h3>
                            <a href="" className="btn btn-brand btn-56">Upgrade Now</a>
                        </div>
                    </div>

                   <Footer/>
                </div> {/* container-fluid */}
            </div>
        </div>
    );
}

export default Dashboard;
