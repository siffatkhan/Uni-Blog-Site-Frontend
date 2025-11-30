import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`hamburger ${isOpen ? "open" : ""}`}
       onClick={toggleMenu}>
        {isOpen ? "×" : "☰"}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/journals" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Journals</NavLink>
        </li>
        <li>
          <NavLink to="/past-papers" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>Papers</NavLink>
        </li>
        <li>
          <NavLink to="/gpa-calculator" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>GPA</NavLink>
        </li>
        {/* <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "highlight" : ""}>About Me</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
