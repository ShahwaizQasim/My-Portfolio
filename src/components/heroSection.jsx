import React from 'react'
import heroImg from '../assets/hero-img.png'

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div
        className="container-fluid c-f1"
      >
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5">
              <div className="dis">
                <p className="hdg1" style={{paddingTop:'70px', fontSize:'0.8rem', textTransform:"uppercase"}}>Welcome to my World</p>
                <h1
                  className="mt-3 hdg animate__animated animate__fadeInUp animate__delay-1s"
                >
                  Hi, I am Syed Shahwaiz Qasim
                </h1>
                <h5 className="mt-3 hdg1 animate__animated animate__fadeInUp animate__delay-2s">
                  These Is Correct Platform To Design Your Website
                </h5>
                <a href="#project">
                  <button
                    type="button"
                    className="btn1 mt-3 animate__animated animate__fadeInUp animate__delay-3s"
                  >
                    View Work
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  mt-5 mb-5">
              <div className="dis mt-5 mb-5 animate__animated animate__zoomIn">
                <img
                  src={heroImg}
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

export default HeroSection