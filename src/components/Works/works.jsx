import React, { useState } from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const worksData = [
  { img: Portfolio1, title: "Professional With Laptop" },
  { img: Portfolio6, title: "About Me" },
  { img: Portfolio3, title: "Full Stack Development" },
  { img: Portfolio2, title: "AI Robot Interaction (ML)" },
  { img: Portfolio4, title: "Cloud & Server Operations" },
  { img: Portfolio5, title: "Presenting to Team" },
];

const Works = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Delivering end-to-end ML and full-stack solutions that drive business
        efficiency, enable data-driven decisions, and ensure scalable systems.
      </span>

      <div className="worksImgs">
        {worksData.map((work, index) => (
          <div
            key={index}
            className="workCard"
            onClick={() => setModalImg(work.img)}
          >
            <img src={work.img} alt={work.title} className="worksImg" />
            <div className="overlay">{work.title}</div>
          </div>
        ))}
      </div>

      <button className="worksBtn">See More</button>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} className="modalImg" alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default Works;
