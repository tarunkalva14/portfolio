import React, { useState, useRef, useEffect } from "react";
import "./project.css";

import stressImg from "../../assets/stress-detection.png";
import attendanceImg from "../../assets/ai-attendance.png";

const Project = () => {
  const [activeProject, setActiveProject] = useState(null);

  const stressRef = useRef(null);
  const attendanceRef = useRef(null);

  const toggleProject = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  /* Smooth scroll to project image when clicked */
  useEffect(() => {
    if (activeProject === "stress" && stressRef.current) {
      stressRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (activeProject === "attendance" && attendanceRef.current) {
      attendanceRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeProject]);

  // Close modal if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const activeRef =
        activeProject === "stress"
          ? stressRef
          : activeProject === "attendance"
          ? attendanceRef
          : null;

      if (activeRef && activeRef.current && !activeRef.current.contains(e.target)) {
        setActiveProject(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeProject]);

  // GitHub / Live URLs
  const githubStressURL = "https://github.com/tarunkalva14/AI-Stress-Detection";
  const liveStressURL = "https://ai-stress-detection.onrender.com/";
  const githubAttendanceURL = "https://github.com/tarunkalva14/School_Attendance_AI";
  const liveAttendanceURL = "https://ai-school-attendance-tk.streamlit.app/";

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        AI & Machine Learning projects showcasing real-time inference,
        deployment, monitoring, and production troubleshooting.
      </p>

      <div className="projects-grid">
        {/* ================= AI STRESS DETECTION ================= */}
        <div
          ref={stressRef}
          className={`project-card ${activeProject === "stress" ? "expanded" : ""}`}
        >
          <img
            src={stressImg}
            alt="AI Stress Detection System"
            className="project-image"
            onClick={() => toggleProject("stress")}
          />

          <div className="project-content">
            <h3>AI Stress Detection System</h3>
            <p>
              Real-time browser-based AI system detecting stress using visual
              cues with production-grade AWS deployment.
            </p>

            <div className="project-tech">
              Python · PyTorch · Hugging Face · OpenCV · Flask · AWS EC2 · Gunicorn
            </div>

            <div className="project-links">
              <button
                className="project-btn github-btn github-text-black"
                onClick={() => window.open(githubStressURL, "_blank")}
              >
                GitHub
              </button>
              <button
                className="project-btn live-btn live-text-black"
                onClick={() => window.open(liveStressURL, "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* ================= AI ATTENDANCE ================= */}
        <div
          ref={attendanceRef}
          className={`project-card ${activeProject === "attendance" ? "expanded" : ""}`}
        >
          <img
            src={attendanceImg}
            alt="AI School Attendance"
            className="project-image"
            onClick={() => toggleProject("attendance")}
          />

          <div className="project-content">
            <h3>AI School Attendance Dashboard</h3>
            <p>
              Intelligent attendance platform with NLP-powered analytics and
              real-time insights.
            </p>

            <div className="project-tech">
              Python · Streamlit · MongoDB Atlas · Hugging Face · Pandas
            </div>

            <div className="project-links">
              <button
                className="project-btn github-btn github-text-black"
                onClick={() => window.open(githubAttendanceURL, "_blank")}
              >
                GitHub
              </button>
              <button
                className="project-btn live-btn live-text-black"
                onClick={() => window.open(liveAttendanceURL, "_blank")}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Modal for Expanded Info ================= */}
      {activeProject && (
        <>
          <div
            className="modal-overlay"
            onClick={() => setActiveProject(null)}
          ></div>

          <div className="project-modal">
            <button
              className="modal-close-btn"
              onClick={() => setActiveProject(null)}
            >
              ×
            </button>

            {activeProject === "stress" && (
              <>
                <h3>AI Stress Detection System</h3>
                <p><strong>Model Used:</strong> DistilBERT (Hugging Face)</p>

                <strong>Inference Pipeline:</strong>
                <ul>
                  <li>Browser camera access (face & hands)</li>
                  <li>Frames streamed to Flask API</li>
                  <li>Feature extraction & normalization</li>
                  <li>DistilBERT inference (stress vs relaxed)</li>
                  <li>Sliding-window smoothing</li>
                  <li>Real-time confidence visualization</li>
                </ul>

                <strong>Deployment & Troubleshooting:</strong>
                <ul>
                  <li>AWS EC2 (Linux)</li>
                  <li>Gunicorn worker tuning</li>
                  <li>Port & security group debugging</li>
                  <li>Cold-start & latency optimization</li>
                </ul>
              </>
            )}

            {activeProject === "attendance" && (
              <>
                <h3>AI School Attendance Dashboard</h3>
                <p><strong>Model Used:</strong> NLP Analytics (Hugging Face)</p>

                <strong>Inference Pipeline:</strong>
                <ul>
                  <li>Attendance data ingestion</li>
                  <li>MongoDB Atlas storage</li>
                  <li>PDF & document parsing</li>
                  <li>NLP-based natural language queries</li>
                  <li>Analytics dashboards (Streamlit)</li>
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Project;
