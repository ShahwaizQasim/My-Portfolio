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
    console.log(isOpen);
    
    return (
        <div className="container-fluid c-f pt-2 pb-2">
            <div className="container con">
                <nav className="nav navbar navbar-expand-xxl navbar-light">
                    <Link to="/" className="navbar-brand fontl">
                        ShahwaizQasim
                    </Link>
                    <button onClick={handleToggle} className="navicon-btn">
                        <FontAwesomeIcon icon={faBars} className='navicon' />
                    </button>
                    <div className={`sidebar`} id="navi">
                        <Link
                            to="javascript:void(0)"
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


