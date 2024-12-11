import React from 'react'
import { Link } from 'react-router';

function Projects() {

    return (
        <section className="project" id="project">
            <div className="container-fluid c-f5 pt-5">
                <div className="container pt-5">
                    <h2
                        className="hdg2 text-center mb-5"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        Our Projects
                    </h2>
                    <center>
                        {/* Portfolio Gallery Grid */}
                        <div className="row">
                            <div
                                className="column nature col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-4">Architect Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Architect Website Design By ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn4 mt-2">View Website</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/img2.png)" }}
                                        >
                                            <Link to="https://shahwaizqasim.github.io/Architect-Website/" target="_blank">
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column nature col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-4">NEOH Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    NEOH Website Design By <br /> ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn4 mt-2">View Website</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/bg.jpg)" }}
                                        >
                                            <a
                                                href="Assets/Projects/Web Project 2/index.html"
                                                target="_blank"
                                            >
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column nature col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-4">Casa Hotel Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Casa Hotel Website Design By ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn4 mt-2">View Website</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/hero-1.jpg)" }}
                                        >
                                            <a
                                                href="Assets/Projects/Web Project 3/Index.html"
                                                target="_blank"
                                            >
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-4">Quiz Application</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Quiz Application Design By
                                                    <br /> ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn5 mt-2">View Application</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/App 1.png)" }}
                                        >
                                            <a
                                                href="Assets/Projects/Quiz Application/index.html"
                                                target="_blank"
                                            >
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-2">Login Form</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Login Form Design ByShahwaizQasim.
                                                </h6>
                                                <h6 className="hdg1 pt-2">
                                                    Email : sha@gmail.com <br /> Password : 12345
                                                </h6>
                                            </center>
                                            <button className="btn5 mt-2">View Login Form</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/App 2.png)" }}
                                        >
                                            <a
                                                href="Assets/Projects/Login Form/Login.html"
                                                target="_blank"
                                            >
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-4 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                            style={{ border: "1px solid #CE9160" }}
                                        >
                                            <h4 className="hdg2 mt-4">Calculator</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Calculator Design By <br /> ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn5 mt-2">View Calculator</button>
                                        </div>
                                        <div
                                            className="flip-box-back"
                                            style={{ backgroundImage: "url(Assets/img/App 3.png)" }}
                                        >
                                            <a
                                                href="Assets/Projects/Calculator/index.html"
                                                target="_blank"
                                            >
                                                <button className="btn2" style={{ marginTop: 80 }}>
                                                    Click
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                    {/* END GRID */}
                </div>
            </div>
        </section>


    )
}

export default Projects;