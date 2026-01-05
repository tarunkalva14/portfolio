
import React from "react";
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import './intro.css';
import hire from '../../assets/hireme.png';

const Intro = () =>{

    return(
       <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Tarun</span> <br/>Full-Stack ML & Solutions Engineer</span>
            <p className="introPara">Building intelligent systems across the full ML lifecycle,from data engineering, <br/>
                                    model training to deployment optimization and technical support.</p>    
        <Link><button className="btn">
            <img src={hire} alt="Hire" className="hireImg"/>Hire Me</button>
            </Link>
        </div>
        <div className="imgWrap">
            <img src={bg} alt="Profile" className="bg"/>
        </div>

       </section>
    );
}
export default Intro;