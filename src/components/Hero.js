import React from "react";
import profilePic from "../assets/profile.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Kashif Ali</span>
        </h1>
        <h2>
          MSc Data Science & AI Student <br />
          <span className="accent">Computer Science Graduate</span>
        </h2>
        <p className="home-description">
          Building practical AI and data-driven solutions with a foundation in
          Computer Science and a growing focus on{" "}
          <span className="highlight">Machine Learning</span>,
          <span className="highlight"> Deep Learning</span>, and
          <span className="highlight"> Data Science</span>.
        </p>

        <div className="home-actions">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <div className="social-icons">
            <a
              href="https://github.com/kashifali6273"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kashif-ali-57352b380"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="home-image">
        <img src={profilePic} alt="Kashif Ali" />
      </div>
    </section>
  );
};

export default Hero;
