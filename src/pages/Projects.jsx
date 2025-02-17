import React from 'react'
import "./Projects.css";
import { Link } from "react-router-dom"; 

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <Link to="/projects/Dropdown">
            <h2>Dropdown Menu - Design Case Study</h2>
            <p>Click to learn more about Project 1</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects