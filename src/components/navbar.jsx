import React, { useState } from 'react'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleLinkClick = () => {
        setIsOpen(false); // Close the navbar when a link is clicked
    };

    return (
        <div className="container-fluid c-f pt-2 pb-2">
            <div className="container con">
                <nav className=" navbar-light" style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Link to="/" className="navbar-brand fontl pt-2">
                        ShahwaizQasim
                    </Link>
                    <button onClick={handleToggle} className="navicon-btn pt-2">
                        <FontAwesomeIcon icon={faBars} className='navicon' />
                    </button>
                    <div className={`${isOpen ? 'sidebar2' : 'sidebar'}`} id="navi">
                        <Link
                            onClick={handleToggle}
                            className='closebtn'
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>
                        <div className={`sidebar-content`}>
                            <ul>
                                <li>
                                    <ScrollLink
                                        to="hero" // ID of the section
                                        smooth={true}
                                        duration={500}
                                        onClick={handleLinkClick} // Close navbar
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ce9160'
                                        }}
                                    >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="about" // ID of the section
                                        smooth={true}
                                        duration={1000}
                                        onClick={handleLinkClick} // Close navbar
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ce9160'
                                        }}
                                    >
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="service" // ID of the section
                                        smooth={true}
                                        duration={1000}
                                        onClick={handleLinkClick} // Close navbar
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ce9160'
                                        }}
                                    >
                                        Services
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="project" // ID of the section
                                        smooth={true}
                                        duration={1000}
                                        onClick={handleLinkClick} // Close navbar
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ce9160'
                                        }}
                                    >
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink
                                        to="contact" // ID of the section
                                        smooth={true}
                                        duration={1000}
                                        onClick={handleLinkClick} // Close navbar
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ce9160'
                                        }}
                                    >
                                        Contact
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar


