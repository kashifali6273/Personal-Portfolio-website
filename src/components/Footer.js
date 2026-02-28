import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Kashif Ali. All rights reserved.</p>
        <p>Built with React & Passion for AI</p>
      </div>
    </footer>
  );
};

export default Footer;
