import React from 'react'
import Programming from '../assets/Programming-amico.png'

function About() {
    return (
        <section className="about" id="about">
            <div className="container-fluid c-f2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-5">
                            <div
                                className="dis1 mt-5"
                                data-aos="fade-up"
                                data-aos-duration={2000}
                            >
                                <h1 className="hdg2 pt-5">About Me</h1>
                                <span className="hdg1 mb-4 d-block">
                                    I am Web Designer and Developer. I consider myself a responsible
                                    an orderly person. These Is Correct Platform To Design Your
                                    Website.
                                </span>
                                <span className="hdg2">Name : </span>
                                <span className="hdg1 d-inline">&nbsp;Syed Shahwaiz Qasim</span>
                                <br />
                                <span className="hdg2 ">Profile : </span>
                                <span className="hdg1 d-inline">Frontend Web Developer</span>
                                <br />
                                <span className="hdg2 ">Email : </span>
                                <span className="hdg1 d-inline">
                                    &nbsp;syedshahwaiz32@gmail.com
                                </span>
                                <br />
                                <span className="hdg2 ">Phone : </span>
                                <span className="hdg1 d-inline">+92 3102166573</span>
                                <br />
                                <a href="Assets/Shahwaiz Resume.pdf" target="_blank">
                                    <button className="btn2 mt-5">
                                        Download CV
                                        <i className="fa-solid fa-arrow-right ml-2" />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-5 mb-5">
                            <div
                                className="dis1 mt-5 mb-3"
                                data-aos="fade-up"
                                data-aos-duration={2000}
                            >
                                <img
                                    src={Programming}
                                    className="img-fluid"
                                    height="100%"
                                    width="100%"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About