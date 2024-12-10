import React from 'react'

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
            <h1
              className="mt-3 hdg animate__animated animate__fadeInUp animate__delay-1s"
              style={{ paddingTop: 80 }}
            >
              We Have Latest Skills To Turn Your Creativity Into Reality{" "}
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
              src="../assets/hero-img.png"
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