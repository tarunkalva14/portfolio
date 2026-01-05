import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

import Python from "../../assets/python-logo.png";
import Pytorch from "../../assets/pytorch-logo.png";
import AWS from "../../assets/aws-logo.png";
import ScikitLearn from "../../assets/scikit-learn-logo.png";
import Java from "../../assets/java-logo.png";
import Linux from "../../assets/Linux-logo.png";
import NodeJs from "../../assets/node.js-logo.png";
import MongoDB from "../../assets/mongoDb-logo.png";
import GitGitHub from "../../assets/git_github-logo.png";
import ReactLogo from "../../assets/React-logo.png";
import Spark from "../../assets/spark-logo.png";
import SqlServer from "../../assets/Sqlserver-logo.png";
import IntelliJ from "../../assets/IntelliJ-logo.png";
import VisualStudio from "../../assets/Visual_Studio-logo.png";

import LinkedIn from "../../assets/Linkedin-icon.png";
import Gmail from "../../assets/Gmail-icon.png";
import GitHub from "../../assets/Github-icon.png";
import Phone from "../../assets/Phone-icon.png";

const Contact = () => {
  const form = useRef();

  const [activeInfo, setActiveInfo] = useState("");
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_aw4p864","template_s3ytyet",form.current,"B1Q2cGchMsrYHZAMr")
      .then(
        () => {
          setNotification("✅ Message sent successfully!");
          form.current.reset();
          setTimeout(() => setNotification(""), 3000);
        },
        () => {
          setNotification("❌ Failed to send message. Please try again.");
          setTimeout(() => setNotification(""), 3000);
        }
      );
  };

  const contactDetails = {
    linkedin: "https://www.linkedin.com/in/tarunk7479/",
    email: "kalvatarun7479@gmail.com",
    github: "https://github.com/tarunkalva14",
    phone: "+1 903-347-3609",
  };

  const handleClick = (key) => {
    if (activeInfo === key) {
      setActiveInfo("");
      setCopied(false);
    } else {
      setActiveInfo(key);
      setCopied(false);
    }
  };

  const copyInfo = () => {
    if (!activeInfo) return;
    navigator.clipboard.writeText(contactDetails[activeInfo]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contactPage">
      <div id="Technologys">
        <h1 className="contactPageTitle">Technology & Tools</h1>
        <p className="TechnologyDesc">
          Delivering end-to-end ML and full-stack solutions that drive business
          efficiency, enable data-driven decisions, and ensure scalable,
          reliable systems.
        </p>
      </div>

      <div className="TechnologyImgs">
        <div className="techItem" data-tech="python">
          <img src={Python} alt="Python" className="TechnologyImg" />
          <span className="techTooltip">Turning ideas into reliable logic.</span>
        </div>

        <div className="techItem" data-tech="pytorch">
          <img src={Pytorch} alt="PyTorch" className="TechnologyImg" />
          <span className="techTooltip">Training models with intent, not noise.</span>
        </div>

        <div className="techItem" data-tech="aws">
          <img src={AWS} alt="AWS" className="TechnologyImg" />
          <span className="techTooltip">Cloud built for uptime and scale.</span>
        </div>

        <div className="techItem" data-tech="sklearn">
          <img src={ScikitLearn} alt="Scikit Learn" className="TechnologyImg" />
          <span className="techTooltip">Simple ML where it works best.</span>
        </div>

        <div className="techItem" data-tech="java">
          <img src={Java} alt="Java" className="TechnologyImg" />
          <span className="techTooltip">Structured systems that last.</span>
        </div>

        <div className="techItem" data-tech="linux">
          <img src={Linux} alt="Linux" className="TechnologyImg" />
          <span className="techTooltip">Comfortable close to the OS.</span>
        </div>

        <div className="techItem" data-tech="node">
          <img src={NodeJs} alt="Node.js" className="TechnologyImg" />
          <span className="techTooltip">Fast, clean backend logic.</span>
        </div>

        <div className="techItem" data-tech="mongo">
          <img src={MongoDB} alt="MongoDB" className="TechnologyImg" />
          <span className="techTooltip">Schemas that evolve naturally.</span>
        </div>

        <div className="techItem" data-tech="git">
          <img src={GitGitHub} alt="GitHub" className="TechnologyImg" />
          <span className="techTooltip">Code history done right.</span>
        </div>

        <div className="techItem" data-tech="react">
          <img src={ReactLogo} alt="React" className="TechnologyImg" />
          <span className="techTooltip">Interfaces that feel smooth.</span>
        </div>

        <div className="techItem" data-tech="spark">
          <img src={Spark} alt="Apache Spark" className="TechnologyImg" />
          <span className="techTooltip">Big data, handled efficiently.</span>
        </div>

        <div className="techItem" data-tech="sql">
          <img src={SqlServer} alt="SQL Server" className="TechnologyImg" />
          <span className="techTooltip">Data structured with intent.</span>
        </div>

        <div className="techItem" data-tech="intellij">
          <img src={IntelliJ} alt="IntelliJ" className="TechnologyImg" />
          <span className="techTooltip">Focused development workflow.</span>
        </div>

        <div className="techItem" data-tech="vscode">
          <img src={VisualStudio} alt="Visual Studio" className="TechnologyImg" />
          <span className="techTooltip">Productivity-first environment.</span>
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any open work opportunities
        </span>

        {notification && (
          <div className="notification">{notification}</div>
        )}

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" className="submitBtn">Submit</button>

          <div className="links">
            <img src={LinkedIn} alt="LinkedIn" className="link" onClick={() => handleClick("linkedin")} />
            <img src={Gmail} alt="Gmail" className="link" onClick={() => handleClick("email")} />
            <img src={GitHub} alt="GitHub" className="link" onClick={() => handleClick("github")} />
            <img src={Phone} alt="Phone" className="link" onClick={() => handleClick("phone")} />
          </div>

          {activeInfo && (
            <div className="contactInfo" onClick={copyInfo}>
              <span className="infoText">{contactDetails[activeInfo]}</span>
              <span className={`copyStatus ${copied ? "show" : ""}`}>
                Copied!
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
