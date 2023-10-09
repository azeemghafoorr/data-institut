import React from 'react';

function Footer() {
    return (
        <footer>
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <img src="/assets/images/logo.svg" alt="Logo" />
                    </div>
                    <div className="col-md-9">
                        <div className="d-flex justify-content-between">
                            <div className="my-column links">
                                <h6>About</h6>
                                <div><a href="">About Us</a></div>
                                <div><a href="">Contact Us</a></div>
                                <div><a href="">Success Stories</a></div>
                                <div><a href="">Partnership Programs</a></div>
                            </div>
                            <div className="my-column links">
                                <h6>Learn</h6>
                                <div><a href="">Catalog</a></div>
                                <div><a href="">Python</a></div>
                                <div><a href="">HTML</a></div>
                                <div><a href="">SQL</a></div>
                                <div><a href="">Power BI</a></div>
                            </div>
                            <div className="my-column links">
                                <h6>Become</h6>
                                <div><a href="">Data Analyst</a></div>
                                <div><a href="">Data Scientist</a></div>
                                <div><a href="">Data Engineer</a></div>
                            </div>
                            <div className="my-column links">
                                <h6>Explore</h6>
                                <div><a href="">Pricing Plans</a></div>
                                <div><a href="">For Business</a></div>
                                <div><a href="">For Academia</a></div>
                                <div><a href="">Community</a></div>
                                <div><a href="">Blog</a></div>
                            </div>
                            <div className="my-column links">
                                <h6>Support</h6>
                                <div><a href="">Help Center</a></div>
                                <div><a href="">Become an Instructor</a></div>
                                <div><a href="">Become an Affiliate</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-3">
                            <p><small>All rights reserved 2023 - Data Institut, Inc.</small></p>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <a href="" className="me-2">Terms of Use</a>
                                    <a href="">Privacy Policy</a>
                                </div>
                                <div>
                                    <ul className="">
                                        <li>
                                            <a href=""><img src="/assets/images/icon-twitter.svg" alt="Twitter" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="/assets/images/icon-instagram.svg" alt="Instagram" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="/assets/images/icon-linkedin.svg" alt="LinkedIn" /></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="/assets/images/icon-youtube.svg" alt="YouTube" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
