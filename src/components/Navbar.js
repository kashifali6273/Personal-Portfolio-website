import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Certificates","Blog","Contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo (clickable to Hero section) */}
        <h1 className="logo">
          <a href="#home">Kashif Ali</a>
        </h1>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
