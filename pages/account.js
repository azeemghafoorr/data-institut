// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function Dashboard() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />
            <div className="dashboard account">
                <div className="container-fluid">
                    <sidebar>
                       <OffCanvas/>
                    </sidebar>
                    <div>
                        <h3 className="font-nokora mb-5">Account Settings</h3>

                        <div className="mycard mb-5">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center user">
                                    <div className="img-container">
                                        <img src="/assets/images/dashboard-user-main.png" alt="" />
                                    </div>
                                    <div className="text-container">
                                        <h4>Devon</h4>
                                        <p>Developer</p>
                                        <p>L.A</p>
                                    </div>
                                </div>
                                <div>
                                    <Link href="/account-edit" legacyBehavior>
                                    <a className="btn btn-brand btn-48">Edit</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mycard">
                            <Link href="/account-edit" legacyBehavior>
                                <a className="btn btn-brand btn-48">Edit</a>
                            </Link>

                            <h4 className="font-nokora mb-5">Personal Information</h4>

                            <ul className="personal-info">
                                <li>
                                    <p>First Name</p>
                                    <p>Devon</p>
                                </li>
                                <li>
                                    <p>Last Name</p>
                                    <p>Lane</p>
                                </li>
                                <li>
                                    <p>Email address</p>
                                    <p>DevonLane96@Gmail.Com</p>
                                </li>
                                <li>
                                    <p>Phone</p>
                                    <p>111111111111</p>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>

                        <div className="form-check float-end my-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Allow Others to See My Profile
                            </label>
                        </div>
                        <div className="float-end clearfix">
                            <button type="button" className="btn btn-brand btn-48">
                                Save changes
                            </button>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
