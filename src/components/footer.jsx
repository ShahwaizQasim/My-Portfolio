import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router'
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll

function Footer() {
    return (
        <div className="container-fluid c-f5 pt-5 pb-5" style={{
            borderTop: '1px solid #ce9160'
        }}>
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-5"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <h3 className="hdg2 mt-5 mb-2 mobile_size2">ShahwaizQasim</h3>
                        <br />
                        <p className="hdg12 smallPara">
                            I specialize in building responsive and interactive web applications using modern tools like React.js, Redux,
                            and Node.js. My goal is to create user-friendly, accessible, and visually appealing digital experiences
                        </p>
                        <Link to="https://www.instagram.com/syedshahwaizqasim/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className='ic1' />
                        </Link>
                        <Link href="https://wa.me/03102166573?text=Hello%20there!" target='_blank'>
                            <FontAwesomeIcon icon={faWhatsapp} className='ic12' />
                        </Link>
                        <Link href="https://www.facebook.com/syed.shahwaiz.129" target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} className='ic12' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/syed-shahwaiz-qasim-01467b26b/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='ic12' />
                        </Link>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-5"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <h3 className="hdg2 mt-5 mb-4">Useful Links</h3>
                        <ul>
                            <li className="hdg2 mt-2">
                                <ScrollLink
                                    to="hero" // ID of the section
                                    smooth={true}
                                    duration={500}
                                    className='hdg6'
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li className="hdg2 mt-2">
                                <ScrollLink
                                    to="about" // ID of the section
                                    smooth={true}
                                    duration={500}
                                    className='hdg6'
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    About
                                </ScrollLink>
                            </li>
                            <li className="hdg2 mt-2">
                                <ScrollLink
                                    to="service" // ID of the section
                                    smooth={true}
                                    duration={500}
                                    className='hdg6'
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Services
                                </ScrollLink>
                            </li>
                            <li className="hdg2 mt-2">
                                <ScrollLink
                                    to="project" // ID of the section
                                    smooth={true}
                                    duration={500}
                                    className='hdg6'
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Projects
                                </ScrollLink>
                            </li>
                            <li className="hdg2 mt-2">
                                <ScrollLink
                                    to="contact" // ID of the section
                                    smooth={true}
                                    duration={500}
                                    className='hdg6'
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-5"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <h3 className="hdg2 mt-5 mb-4">Our Services</h3>
                        <ul>
                            <li className="hdg2 mt-2">
                                <a href="" className="hdg6">
                                    Web &amp; Mobile Design
                                </a>
                            </li>
                            <li className="hdg2 mt-2">
                                <a href="" className="hdg6">
                                    Web Development
                                </a>
                            </li>
                            <li className="hdg2 mt-2">
                                <a href="" className="hdg6">
                                    E-Commerce
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-5"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        <h3 className="hdg2 mt-5 mb-4">Contact Us</h3>
                        <p className="hdg1">Phone :</p>
                        <p className="hdg1" style={{ marginTop: "-15px" }}>
                            +92 3102166573
                        </p>
                        <p className="hdg1 mt-3">Email :</p>
                        <p className="hdg1" style={{ marginTop: "-15px" }}>
                            syedshahwaiz32@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer