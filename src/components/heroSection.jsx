import React, { useEffect } from 'react'
// import heroImg from '../assets/hero-img.png'
import myImg from '../assets/myImg.jfif'
import Typed from 'typed.js';

function HeroSection() {
  useEffect(() => {
    // Typing Effect
    const typed = new Typed(".typedText", {
      strings: ["Syed Shahwaiz Qasim", "Full Stack Developer", "Freelancer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    })
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div
        className="container-fluid c-f1"
      >
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5">
              <div className="dis1">
                <p className="hdg animate__animated animate__fadeInUp" style={{
                  paddingTop: '90px', fontSize: '0.8rem', textTransform: "uppercase", fontWeight: '600'
                }}>Welcome to my World</p>
                <h1
                  className="mt-3 hdg animate__animated animate__fadeInUp animate__delay-1s" style={{
                    fontWeight: "normal",
                    fontSize: "2.7rem"
                  }}
                >
                  Hi, I am <span className="typedText"></span>
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
                {/* <img
                  src={myImg}
                  className="img-fluid"
                  height="100%"
                  width="100%"
                  alt=""
                /> */}
                <div className="myImg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection