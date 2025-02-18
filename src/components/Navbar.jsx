import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Portfolio</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/portfolio">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio/projects">Projects</Link>
        </li>
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar