import React from 'react';

function Try() {
    return (
        <section className="try">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 align-self-center">
                        <h2 className="font-bebas">Try It Out</h2>
                        <p>Whether you&lsquo;re a seasoned developer or a curious beginner, our coding learning platform offers a dynamic and engaging experience that will ignite your passion for programming. Step into the world of code, explore hands-on exercises, and witness the power of bringing your ideas to life through programming. Our coding demo is your gateway to an exciting journey of discovery and creativity.</p>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="right-col">
                            <img className="img-fluid" src="/assets/images/img-coding-demo.jpg" alt="Coding Demo" />
                            <div className="coding-bottom">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <button type="button" className="btn btn-green">Run Code</button>
                                    <p> <a href="#">Sign up</a> to keep up the good work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Try;
