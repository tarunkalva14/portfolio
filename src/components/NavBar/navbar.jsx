import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navBar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopList">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopList">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopList">Portfolio</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopList">Projects</Link> 
                <Link activeClass="active" to="Technologys" spy={true} smooth={true} offset={-100} duration={500} className="desktopList">Tech</Link>
            </div>
            <button className="desktopBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contact} alt="" className="buttonIcon" />Contact Me
            </button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="Technologys" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>Tech</Link> 
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="mobileList" onClick={() => setShowMenu(false)}>Contacts</Link>
            </div>
        </nav>
    );
}

export default Navbar;
