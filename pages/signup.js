// pages/about.js

import Navbar from "../components/Navbar";
import Link from "next/link";
function Signup() {
    return (
        <div className="wrapper" id="wrapper">
            <Navbar />
            <div className="page-margin">
                <div className="login-page">
                    <h2 className="font-nokora text-center">Sign Up Now</h2>
                    <h4 className="font-nokora text-center"></h4>

                    <form className="mt-5" action="">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="input-group-text"><img src="/assets/images/icon-eye.svg" alt="" /></span>
                            </div>
                        </div>

                       {/* <div className="d-flex justify-content-between mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" />
                                <label className="form-check-label">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password">Forgot Password</Link>
                        </div>*/}

                        <button type="button" className="btn btn-brand btn-block btn-56">Sign Up</button>
                    </form>

                    <hr className="my-5" />

                    <div className="links">
                        <p>Or sign up with</p>
                        <ul>
                            <li>
                                <a href=""><img src="/assets/images/icon-google.svg" alt="" /> Google</a>
                            </li>
                            <li>
                                <a href=""><img src="/assets/images/icon-linkedin.svg" alt="" /> Linkedin</a>
                            </li>
                            <li>
                                <a href=""><img src="/assets/images/icon-apple.svg" alt="" /> Apple</a>
                            </li>
                        </ul>
                    </div>

                    <hr />

                    <p className="text-center">No account yet? <Link legacyBehavior href="/login"><a className="text-decoration-underline">Log In</a></Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
