import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section function
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on click
    }
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Oladeji's Portfolio</h1>

      {/* Toggle Button */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          {location.pathname === "/" ? (
            <a onClick={() => handleScroll("hero")}>Home</a>
          ) : (
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <a onClick={() => handleScroll("projects")}>Projects</a>
          ) : (
            <Link to="/" onClick={() => setMenuOpen(false)}>Projects</Link>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <a onClick={() => handleScroll("contact")}>Contact</a>
          ) : (
            <Link to="/" onClick={() => setMenuOpen(false)}>Contact</Link>
          )}
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
