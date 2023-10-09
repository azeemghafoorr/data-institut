import React from 'react';

const OffCanvas = () => {
    return (
        <div className="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header text-center">
                <img className="user-image mb-4" src="/assets/images/dashboard-user-main.png" alt="" />
                <h4 className="font-nokora">Devon Lane</h4>
                <p>Developer, Los Angeles, CA</p>
            </div>
            <div className="offcanvas-body">
                <h4 className="font-nokora">Reminder</h4>
                <ul>
                    <li>
                        <a href="">
                            <img src="/assets/images/icon-upcoming-course.svg" alt="" /> Upcoming Course
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/assets/images/icon-payment-due.svg" alt="" /> Payment due soon
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="/assets/images/icon-upcoming-course.svg" alt="" /> Upcoming Course
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OffCanvas;
