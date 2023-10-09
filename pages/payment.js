// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function CourseDetail() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />
            <div className="payment">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-col">
                                <div className="express-checkout">
                                    <p>Express Checkout</p>
                                    <ul>
                                        <li>
                                            <a href=""><img src="/assets/images/amazon-pay.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="/assets/images/google-pay.png" alt="" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="/assets/images/paypal.svg" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="credit-hr">
                                    <small>
                                        OR CONTINUE BELOW TO PAY WITH A CREDIT CARD
                                    </small>
                                </div>

                                <form action="">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">Cardholder Name</label>
                                                <input type="email" className="form-control" id="" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="form-label">Card number</label>
                                                <input type="email" className="form-control" id="" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label">Exp Date</label>
                                                        <input type="email" className="form-control" id="" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label htmlFor="" className="form-label">CVV</label>
                                                        <input type="email" className="form-control" id="" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Set Card as default
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row pb-2 mt-4 mb-2 border-bottom">
                                                <div className="col-md-6">
                                                    <p>Premium Monthly Subscription</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="float-end"> <b> $18/mo</b></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row my-3">
                                                <div className="col-md-6">
                                                    <input type="email" className="form-control" id="" placeholder="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <button className="btn btn-brand btn-48">APPLY</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="row border-top pt-1 mb-3">
                                                <div className="col-md-6">
                                                    <p><b>Subtotal:</b></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="float-end"> <b> $18/mo</b></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button className="btn btn-brand btn-block btn-56">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="right-col">
                                <img className="sale-banner" src="/assets/images/sale-payment-banner.svg" alt="" />
                                <h4><b>Premium</b></h4>
                                <p className="text-center">For individuals who want to level up their coding skills.</p>
                                <div className="price">
                                    <sup>$</sup>
                                    <b className="font-nokora">18</b>
                                    <span>/month</span>
                                </div>

                                <div className="bottom">
                                    <ul>
                                        <li>Full access to our course catalog</li>
                                        <li>Full access to certificates and badges</li>
                                        <li>Professional Profile</li>
                                        <li>Job board access</li>
                                        <li>Unlimited mentorship access</li>
                                    </ul>

                                    <a href="" className="btn btn-brand btn-block btn-56">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <Footer/>
        </div>
    );
}

export default CourseDetail;
