import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import "./Navbar.css"
export const Navbar = () => {
    const { currentUser, logout } = useAuth()
    const [isActive, setIsActive] = useState(false);
    const handleToggle = () => {
        setIsActive(!isActive);
    }
    return (
        <div>
            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav ">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="#" className="logo">
                                    Gurukool
                                </a>
                                {/* <!-- ***** Logo End ***** -->
                                <!-- ***** Menu Start ***** --> */}
                                <ul className={isActive ? 'nav block ddcolor' : 'nav ddcolor'} >
                                    <li className="dropdown ddcolor" >
                                        <Dropdown className="ddcolor">
                                            <Dropdown.Toggle>
                                                dashboard
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu className="dropdown_dropdown">
                                                <Dropdown.Item>
                                                    <Link to="/rooms" >
                                                        Class Room
                                                    </Link>
                                                </Dropdown.Item>
                                                {

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
                                            <li className="scroll-to-section ddcolor" >
                                                <Link to="/Signup" className="menu-item ">
                                                    Add Student
                                                </Link>
                                            </li>
                                        )
                                    }
                                    <li className="scroll-to-section ddcolor"><a href="#about" className="menu-item">About</a></li>



                                    <li className="scroll-to-section ddcolor"><a href="#contact-us" className="menu-item">Contact Us</a></li>
                                    {
                                        !(currentUser) ?
                                            (
                                                <li className="scroll-to-section ddcolor">
                                                    <Link to="/LogIn" className="menu-item">
                                                        LogIn
                                                    </Link>
                                                </li>
                                            ) :
                                            (
                                                <li className="scroll-to-section ddcolor">
                                                    <Link to="/" className="menu-item" onClick={logout}>
                                                        LogOut
                                                    </Link>
                                                </li>
                                            )
                                    }
                                </ul>

                                <a onClick={handleToggle} className={isActive ? 'active menu-trigger' : 'menu-trigger'}>
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
