import React from "react";
import profilePic from "../assets/profile.jpeg";
import upworkIcon from "../assets/upwork.png"; // ✅ Import your Upwork PNG
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Kashif Ali</span>
        </h1>
        <h2>
          Computer Science Student | AI & Data Science Enthusiast | Machine
          Learning Projects
        </h2>
        <p className="home-description">
          Passionate about Artificial Intelligence, Data Science, and Machine
          Learning, I focus on building intelligent systems that solve
          real-world problems. I have developed several practical projects,
          including AI-powered assistants, resume matching systems, and
          data-driven applications. My goal is to continue advancing in AI
          research while pursuing my Master’s studies.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/kashifali6273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kashif-ali-57352b380"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0172a0ce21a32c71e4?companyReference=1506270076652605441&mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={upworkIcon}
              alt="Upwork"
              style={{ width: "24px", height: "24px" }} // ✅ Keep consistent size with icons
            />
          </a>
          <a href="/Kashif_Ali_CV.pdf" download className="cv-btn">
            <FaDownload /> Download CV
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="Kashif Ali Profile" />
      </div>
    </section>
  );
};

export default Hero;
