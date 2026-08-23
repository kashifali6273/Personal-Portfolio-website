import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects",
    "Certificates",
    "Blog",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          <a href="#home">Kashif Ali</a>
        </h1>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

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
