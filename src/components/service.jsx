import React from 'react'
import ScreenShot from '../assets/Screenshot__.png'
import ScreenShot1 from '../assets/Screenshot_.png'
import ScreenShot2 from '../assets/Screenshot.png'

function Service() {
    return (
        <section className="service" id="service">
            <div className="container-fluid c-f4">
                <div className="container pt-5">
                    <h1
                        className="text-center hdg2 pt-4 mobile_size2"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        Services
                    </h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mb-5">
                            <div className="dis3" data-aos="fade-up" data-aos-duration={1000}>
                                <center>
                                    <img src={ScreenShot2} alt="icon-img" />
                                    <h5 className="hdg2 pt-1 pb-1">Web &amp; Mobile Design</h5>
                                    <p className="para pt-2 pe-4 ps-4 pb-3">
                                        Sed eleifend sed nibh fringilla. Donec eu cursus sem vitae
                                        tristique ante ibero
                                    </p>
                                </center>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12  col-12 mb-5">
                            <div className="dis3" data-aos="fade-up" data-aos-duration={1000}>
                                <center>
                                    <img src={ScreenShot} alt="icon-img" />
                                    <h5 className="text-center hdg2 pt-1 pb-1">Web Development</h5>
                                    <p className="para pt-2 pe-4 ps-4 pb-3">
                                        Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae
                                        tristique ante ibero
                                    </p>
                                </center>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 col-12 mb-5">
                            <div className="dis3" data-aos="fade-up" data-aos-duration={1000}>
                                <center>
                                    <img src={ScreenShot1} alt="icon-img" />
                                    <h5 className="text-center hdg2 pt-1 pb-1">E-Commerce</h5>
                                    <p className="para pt-2 pb-3 pe-4 ps-4">
                                        Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae
                                        tristique ante ibero
                                    </p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Service