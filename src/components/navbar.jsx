import React, { useState } from 'react'
import { Link } from 'react-router'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

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
                                    <Link to="index.html">Home</Link>
                                </li>
                                <li>
                                    <Link to="About.html">About</Link>
                                </li>
                                <li>
                                    <Link to="Service.html">Services</Link>
                                </li>
                                <li>
                                    <Link to="project.html">Projects</Link>
                                </li>
                                <li>
                                    <Link to="contact.html">Contact</Link>
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


