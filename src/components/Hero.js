import React from "react";
import profilePic from "../assets/profile.jpeg";
import upworkIcon from "../assets/upwork.png"; // ✅ Import your Upwork PNG
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span className="highlight">Kashif Ali</span>
        </h1>
        <h2>
          Computer Science Student & <br />
          <span className="accent">AI / Data Science Enthusiast</span>
        </h2>
        <p className="home-description">
          Passionate about building intelligent systems that solve real-world problems. 
          Specializing in <span className="highlight">AI research</span>, 
          <span className="highlight">Machine Learning</span>, and <span className="highlight">Data Science</span>.
        </p>

        <div className="home-actions">
          <a href="#projects" className="btn">View Projects</a>
          <div className="social-icons">
            <a href="https://github.com/kashifali6273" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kashif-ali-57352b380" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.upwork.com/freelancers/~0172a0ce21a32c71e4" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
              <img src={upworkIcon} alt="Upwork" style={{ width: "24px", height: "24px", filter: "invert(1)" }} />
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
