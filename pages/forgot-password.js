// pages/about.js

import Navbar from "../components/Navbar";
import Link from "next/link";
function ForgotPassword() {
    return (
        <div className="wrapper" id="wrapper">
            <Navbar />
            <div className="page-margin">
                <div className="login-page">
                    <h2 className="font-nokora text-center">Forgot Password</h2>

                    <form className="mt-5" action="">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <button type="button" className="btn btn-brand btn-block btn-56">Send Email</button>
                    </form>

                    <hr className="my-5" />

                    <hr />

                    <p className="text-center">Remember Password? <Link legacyBehavior href="/login"><a className="text-decoration-underline">Log In</a></Link></p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
