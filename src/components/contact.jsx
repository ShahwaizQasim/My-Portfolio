import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {

    const [loading, setLoading] = useState(false)
    const form = useRef();

    // email.js documentation
    const sendEmail = (e) => {
        e.preventDefault();
         
        setLoading(true)
        emailjs
            .sendForm('service_sq5vr3k', 'template_l4dni2j', form.current, {
                publicKey: 'CQbnlL99Afn3QeHpb',
            })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Message Sent Successfully!');
                form.current.reset();
                setLoading(false)
            },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Message Sending Failed!');
                },
            );
    };

    return (
        <section className="contact" id="contact">
            <div className="container-fluid c-f4">
                <div className="container pt-5">
                    <h1
                        className="text-center hdg2 pt-4 text-xl"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                    >
                        Contact Us
                    </h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                            <form ref={form} onSubmit={sendEmail}>
                                <center>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="form1 mb-3 mt-5"
                                        name='to_name'
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                        required=""
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email:"
                                        name='from_email'
                                        className="form1 mb-3"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                        required=""
                                    />
                                    <textarea
                                        type="text"
                                        placeholder="Enter Message"
                                        className="form1 p-2"
                                        name='message'
                                        style={{ height: 150 }}
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                        required=""
                                        defaultValue={""}
                                    />
                                    <button
                                        type='submit'
                                        className="btn1 mt-4 mb-2"
                                        data-aos="fade-up"
                                        data-aos-duration={1000}
                                    >
                                        {loading ? 'loading...' : 'Send Message'}
                                    </button>
                                </center>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="dis4" data-aos="fade-up" data-aos-duration={1000}>
                                        <center>
                                            {/* <i className="fa-solid fa-location-dot ic" /> */}
                                            <FontAwesomeIcon icon={faLocationDot} className='ic' />
                                            <h4 className="hdg5">Address</h4>
                                            <span className="hdg1" style={{ fontSize: 14 }}>
                                                Karachi, Pakistan
                                            </span>
                                        </center>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="dis4" data-aos="fade-up" data-aos-duration={1000}>
                                        <center>
                                            {/* <i className="fa-solid fa-phone ic" /> */}
                                            <FontAwesomeIcon icon={faPhone} className='ic' />
                                            <h4 className="hdg5">Call Us</h4>
                                            <span className="hdg1" style={{ fontSize: 14 }}>
                                                +92 3102166573
                                            </span>
                                        </center>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="dis4" data-aos="fade-up" data-aos-duration={1000}>
                                        <center>
                                            <i className="fa-solid fa-envelope ic" />
                                            <FontAwesomeIcon icon={faEnvelope} className='ic' />
                                            <h4 className="hdg5">Email Us</h4>
                                            <span className="hdg1" style={{ fontSize: 14 }}>
                                                syedshahwaiz32@gmail.com
                                            </span>
                                        </center>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="dis4" data-aos="fade-up" data-aos-duration={1000}>
                                        <center>
                                            <i className="fa-solid fa-clock ic" />
                                            <FontAwesomeIcon icon={faClock} className='ic' />
                                            <h4 className="hdg5">Working Days</h4>
                                            <span className="hdg1" style={{ fontSize: 14 }}>
                                                Monday-Saturday
                                            </span>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact