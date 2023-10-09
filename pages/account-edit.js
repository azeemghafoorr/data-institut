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
                                        <h4 className="mb-3"><b>Devon</b></h4>
                                        <div className="mb-3">
                                            <label className="form-label">Role</label>
                                            <select className="form-select mb-3" aria-label="Default select example">
                                                <option selected>Select</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-brand btn-48">Edit</button>
                                </div>
                            </div>
                        </div>

                        <div className="mycard">
                            <button className="btn btn-brand btn-48">Edit</button>

                            <h4 className="font-nokora mb-5">Personal Information</h4>

                            <ul className="personal-info">
                                <li>
                                    <label htmlFor="exampleFormControlInput2" className="form-label">First Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="" />
                                </li>
                                <li>
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Last Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="" />
                                </li>
                                <li>
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput4" placeholder="" />
                                </li>
                                <li>
                                    <label htmlFor="exampleFormControlInput5" className="form-label">Phone</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput5" placeholder="" />
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
