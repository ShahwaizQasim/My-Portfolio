import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'

function Projects() {

    return (
        <section className="project" id="project">
            <div className="container-fluid c-f5 pt-5">
                <div className="container">
                    <h2
                        className="hdg2 text-center mb-5 mobile_size2"
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
                                            <h4 className="hdg2">Capital Shop</h4>
                                            <center>
                                                <h6 className="mobile_Screen hdg1 pt-2">
                                                    Capital Shop is a feature-rich e-commerce platform designed to deliver an engaging and user-friendly
                                                    shopping experience. <span style={{ fontWeight: '600px' }}>Built with React.js, Tailwind CSS, and Firebase </span>, it combines cutting-edge frontend
                                                    design with real-time database integration for efficient and scalable performance.
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://capital-shop-alpha.vercel.app/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/Capital-Shop'} target={"_blank"}>
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
                                            <h4 className="hdg2">GrandWriting Website</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2 mobile_Screen">
                                                    A responsive and interactive platform designed to simplify grant application processes.
                                                    <span style={{ fontWeight: '600px' }}> Built using HTML, CSS, and JavaScript </span>, the website
                                                    features an intuitive interface for creating, managing, and tracking grant proposals efficiently
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
                                            <h4 className="hdg2">CLI Github Clone</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2 mobile_Screen">
                                                    A responsive GitHub CLI website clone, developed to enhance skills in frontend design and implementation.
                                                    This project demonstrates attention to detail and proficiency in recreating modern web interfaces.
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://cli-github-30f0ea.netlify.app/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/CLI-Github_React'} target={"_blank"}>
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
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2">Quiz App</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2 mobile_Screen">
                                                    A modern Quiz App built with <span style={{ fontWeight: '600px' }}>React.js and Tailwind CSS </span>, featuring a responsive design
                                                    and real-time score tracking. This project highlights the ability to create engaging and
                                                    user-friendly web applications
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://quiz-app-nine-henna.vercel.app/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/Quiz-App'} target={"_blank"}>
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
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2">Quiz App</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2 mobile_Screen">
                                                    A responsive weather application designed to fetch and display real-time weather data.
                                                    <span style={{ fontWeight: '600px' }}> Built with JavaScript, HTML, and CSS </span>, it showcases efficient API integration and a user-friendly
                                                    interface.
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://shahwaizqasim.github.io/Weather-App/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/Weather-App'} target={"_blank"}>
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
                                className="column cars col-lg-6 col-md-12 col-sm-12"
                                data-aos="fade-up"
                                data-aos-duration={1000}
                            >
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div
                                            className="flip-box-front"
                                        >
                                            <h4 className="hdg2">NEOH Website Clone</h4>
                                            <center>
                                                <h6 className="hdg1 pt-2 mobile_Screen">
                                                    "A responsive NEOH Website clone, developed to enhance skills in frontend design and implementation.
                                                    This project demonstrates attention to detail and proficiency in recreating modern web interfaces
                                                </h6>
                                            </center>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px'
                                            }}>
                                                <Link to={'https://shahwaizqasim.github.io/Neoh-website.github.io/'} target={"_blank"}>
                                                    <button className="btn4 mt-3 mb-4" style={{
                                                        borderRadius: '5px'
                                                    }}>
                                                        Hosted Link <FontAwesomeIcon icon={faLink} className='ps-1' />
                                                    </button>
                                                </Link>
                                                <Link to={'https://github.com/ShahwaizQasim/Neoh-website.github.io'} target={"_blank"}>
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
                        </div>
                    </center>
                    {/* END GRID */}
                    <center>
                        <Link to={'https://github.com/ShahwaizQasim?tab=repositories'} target='_blank'>
                            <button
                                type="button"
                                className="btn4 mt-3 text-center" style={{
                                    borderRadius: '5px'
                                }}
                            >
                                See All Projects
                            </button>
                        </Link>
                    </center>
                </div>
            </div>
        </section>


    )
}

export default Projects;