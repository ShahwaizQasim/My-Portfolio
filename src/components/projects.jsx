import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'

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
                                className="column nature col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2 mt-4">GrandWriting Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2" style={{
                                                    fontWeight: '400',
                                                    paddingInline: "30px"
                                                }}>
                                                    A user-friendly website designed to assist individuals and organizations in creating and managing grant applications.
                                                    Built with HTML, CSS, and JavaScript, the site provides an intuitive interface for grant writing, submission
                                                    tracking, and resource management
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://shahwaizqasim.github.io/GrandWriting-Website-Project/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/GrandWriting-Website-Project'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Github Repo <FontAwesomeIcon icon={faGithub} className='ps-1' />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="column nature col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2 mt-4">NEOH Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    NEOH Website Design By <br /> ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn4 mt-2">View Website</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="column nature col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2 mt-4">Casa Hotel Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Casa Hotel Website Design By ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn4 mt-2">View Website</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
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

                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
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

                                    </div>
                                </div>
                            </div>
                            <div
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2 mt-4">Calculator</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2">
                                                    Calculator Design By <br /> ShahwaizQasim.
                                                </h6>
                                            </center>
                                            <button className="btn5 mt-2">View Calculator</button>
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