// pages/about.js

import Link from "next/link";
import NavBarLogin from "../components/NavbarLogin";
import OffCanvas from "../components/OffCanvas";
import Footer from "../components/Footer";
function CourseDetail() {
    return (
        <div className="wrapper" id="wrapper">
            <NavBarLogin />

            <div className="course-page">
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="main-text-container">
                                <h2 className="font-nokora mb-2">Introduction to Relational Databases in SQL</h2>
                                <p>Embark on a journey into SQL with our introductory training, tailored for all experience levels. Discover the art of data querying and grouping, explore the intricacies of joins and subqueries, and refine your filtering skills with data from diverse sources. By the course&apos;s end, you&apos;ll be confidently navigating, exploring, and extracting valuable insights from data, equipped with the fundamentals to embrace the world of SQL.</p>

                                <ul>
                                    <li>
                                        <img src="/assets/images/icon-clock.svg" alt="" />
                                        4 Hours
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon-video.svg" alt="" />
                                        13 Videos
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon-exercise.svg" alt="" />
                                        <Link href="/exercise" legacyBehavior>
                                            <a> 45 Exercises </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <img src="/assets/images/icon-participants.svg" alt="" />
                                        403 Participants
                                    </li>
                                </ul>
                                <Link href="/payment" legacyBehavior>
                                    <a className="btn btn-brand btn-56 btn-block">Enroll for Free</a>
                                </Link>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid main-img" src="/assets/images/course-detail-main-image.png" alt="" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="key">
                                <h4 className="font-nokora mb-3">Key Skills</h4>
                                <ul>
                                    <li>Learn to write and execute SQL queries to retrieve, modify, and manage data in relational databases.</li>
                                    <li>Acquire knowledge about designing efficient and well-structured relational databases to ensure optimal data organization.</li>
                                    <li>Develop skills in performing data manipulation tasks, such as filtering, sorting, and joining data sets using SQL.</li>
                                    <li>Understand the principles of managing and maintaining relational databases, including data integrity and security measures.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why">
                                <h4 className="font-nokora mb-3">Why Data Institut?</h4>
                                <div className="block">
                                    <img src="/assets/images/icon-sql-fundamental.svg" alt="" />
                                    <div className="text-container">
                                        <h4 className="font-nokora mb-1">SQL Fundamentals</h4>
                                        <p>Learn exactly what you need to achieve your goals. Don’t waste time on unrelated lessons</p>
                                    </div>
                                </div>

                                <div className="block">
                                    <img src="/assets/images/icon-challenge.svg" alt="" />
                                    <div className="text-container">
                                        <h4 className="font-nokora mb-1">Challenge yourself with exercises</h4>
                                        <p>Work with real data from day one with interactive lessons and hands-on exercises.</p>
                                    </div>
                                </div>

                                <div className="block">
                                    <img src="/assets/images/icon-certification-big.svg" alt="" />
                                    <div className="text-container">
                                        <h4 className="font-nokora mb-1">Showcase your certification</h4>
                                        <p>Impress employers by completing a capstone project and certifying it with an expert review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="path mt-5">
                        <h3 className="font-nokora mb-3">Course Path</h3>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {/* Accordion Item 1 */}
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h4>Intro to SQL and Databases</h4>
                                        <p>Learn the fundamentals of SQL and database management for effective data navigation and manipulation</p>
                                    </button>
                                </div>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {/* Accordion Content for Item 1 */}
                                        <div className="block">
                                            <img src="/assets/images/accordion-play.svg" alt="" className="me-3 float-start" />
                                            <h5>Database Fundamentals - 15 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                                <div className="level-2 ps-4">
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the importance of indexing
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Familiarize with NoSQL databases
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the core concepts of databases
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Accordion Content for Item 1 */}
                                    </div>
                                </div>
                            </div>
                            {/* End of Accordion Item 1 */}

                            {/* Accordion Item 2 */}
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h4>Intro to SQL and Databases part 2</h4>
                                        <p>Learn the fundamentals of SQL and database management for effective data navigation and manipulation</p>
                                    </button>
                                </div>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {/* Accordion Content for Item 2 */}
                                        <div className="block">
                                            <img src="/assets/images/accordion-play.svg" alt="" className="me-3 float-start" />
                                            <h5>Database Fundamentals - 15 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                                <div className="level-2 ps-4">
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the importance of indexing
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Familiarize with NoSQL databases
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the core concepts of databases
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Accordion Content for Item 2 */}
                                    </div>
                                </div>
                            </div>
                            {/* End of Accordion Item 2 */}

                            {/* Accordion Item 3 */}
                            <div className="accordion-item">
                                <div className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h4>Intro to SQL and Databases</h4>
                                        <p>Learn the fundamentals of SQL and database management for effective data navigation and manipulation</p>
                                    </button>
                                </div>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {/* Accordion Content for Item 3 */}
                                        <div className="block">
                                            <img src="/assets/images/accordion-play.svg" alt="" className="me-3 float-start" />
                                            <h5>Database Fundamentals - 15 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                                <div className="level-2 ps-4">
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the importance of indexing
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Familiarize with NoSQL databases
                                                    </div>
                                                    <div className="level-2-row">
                                                        <img src="/assets/images/accordion-tick.svg" alt="" className="float-start me-3 ps-5" />
                                                        Understand the core concepts of databases
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <img src="/assets/images/accordion-lock.svg" alt="" className="me-3 float-start" />
                                            <h5>Data Manipulation - 35 Min</h5>
                                            <div className="level-1 ps-5">
                                                <div className="level-1-heading">
                                                    <img src="/assets/images/accordion-arrow-down.svg" alt="" className="float-start me-3" />
                                                    Learning Outcomes
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Accordion Content for Item 3 */}
                                    </div>
                                </div>
                            </div>
                            {/* End of Accordion Item 3 */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default CourseDetail;
