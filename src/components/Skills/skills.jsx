
import React from "react";
import './skills.css';
import Development from '../../assets/development.png';
import Ml from '../../assets/ml.png';
import CloudSupport from '../../assets/cloud-support.png';


const Skills = () => {

    return(
        <section id="skills">
            <span className="skillTitle">Area of Focus</span>
            <span className="skillDesc">I'm Skilled in Python, PyTorch, scikit-learn, and PySpark for machine learning and data processing.
                                        Expertise in SQL, MongoDB, AWS, and Linux to build efficient, scalable applications. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Development} alt="Full-Stack Development" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Full-Stack Development</h2>
                        <p>Building complete web applications with modern frameworks, APIs, and cloud deployment</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Ml} alt="Ml Engineer" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>ML Engineer</h2>
                        <p>Developing ML models with data pipelines, training workflows, and production deployment.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={CloudSupport} alt="Cloud-Support" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Technical Support & Cloud Operations</h2>
                        <p>Capable in AWS, Linux/Windows servers, networking, automation, and  technical troubleshooting.</p>
                    </div>
                </div>
            </div>
        
        </section>
    );

}
export default Skills;