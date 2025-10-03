import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Copyright */}
        <p>© {new Date().getFullYear()} Kashif Ali. All rights reserved.</p>

        {/* Center - Navigation */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right - Social Links */}
        <div className="footer-social">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
