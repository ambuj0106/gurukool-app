import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import "./Navbar.css"
export const Navbar = () => {
    const { currentUser, logout } = useAuth()


    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="#" className="logo">
                                    Gurukool
                                </a>
                                {/* <!-- ***** Logo End ***** -->
                                <!-- ***** Menu Start ***** --> */}
                                <ul className="nav">
                                    <li className="dropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                dashboard
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to="/rooms" >
                                                        Class Room
                                                    </Link>
                                                </Dropdown.Item>
                                                {(currentUser) &&
                                                    <Dropdown.Item >
                                                        <Link to="/timeline" >
                                                            Timeline
                                                        </Link>
                                                    </Dropdown.Item>
                                                }
                                                {
                                                    (currentUser) && (currentUser.isTeacher) &&
                                                    <Dropdown.Item >

                                                        <Link to="/assignAssignment">
                                                            Assign Assignment
                                                        </Link>

                                                    </Dropdown.Item>
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </li>
                                    {
                                        (currentUser) && (currentUser.isTeacher) &&
                                        (
                                            <li className="scroll-to-section">
                                                <Link to="/Signup" className="menu-item">
                                                    Add Student
                                                </Link>
                                            </li>
                                        )
                                    }
                                    <li className="scroll-to-section"><a href="#about" className="menu-item">About</a></li>



                                    <li className="scroll-to-section"><a href="#contact-us" className="menu-item">Contact Us</a></li>
                                    {
                                        !(currentUser) ?
                                            (
                                                <li className="scroll-to-section">
                                                    <Link to="/LogIn" className="menu-item">
                                                        LogIn
                                                    </Link>
                                                </li>
                                            ) :
                                            (
                                                <li className="scroll-to-section">
                                                    <Link to="/" className="menu-item" onClick={logout}>
                                                        LogOut
                                                    </Link>
                                                </li>
                                            )
                                    }
                                </ul>
                                <a className='menu-trigger '>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header >
            {/* <!-- ***** Header Area End ***** --> */}
        </div >
    )
}
