import React from 'react';

function CareerPath() {
    return (
        <section className="career-path">
            <div className="container-fluid">
                <div className="inner-container">
                <h2 className="font-bebas">CORE VALUES</h2>
                <p className="subtitle">Charting the Course: Navigate the exciting path to professional success</p>

                <div className="row">
                    <div className="col-md-3">
                        <img src="/assets/images/icon-engage.svg" alt="Engage Icon" />
                        <h4 className="font-nokora">Engage</h4>
                        <p>We encourage learners to actively engage with the platform&apos;s chat groups and virtual meetups.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/images/icon-explore.svg" alt="Explore Icon" />
                        <h4 className="font-nokora">Explore</h4>
                        <p>We offer a variety of interactive elements, coding exercises, quizzes, real-world projects, and collaborative learning opportunities.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/images/icon-learn.svg" alt="Learn Icon" />
                        <h4 className="font-nokora">Learn</h4>
                        <p>Our platform offers a variety of interactive elements, coding exercises, quizzes, real-world projects, and collaborative learning opportunities.</p>
                    </div>
                    <div className="col-md-3">
                        <img src="/assets/images/icon-progress.svg" alt="Progress Icon" />
                        <h4 className="font-nokora">Progress</h4>
                        <p>We prioritize the ability for students to track their progress within courses and set personalized learning goals.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default CareerPath;
