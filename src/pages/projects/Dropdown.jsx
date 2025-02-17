import React from 'react'
import "./ProjectDetail.css";

function Dropdown() {
  return (
    <div>
      <h1>Dropdown Menu - Design Case Study</h1>
      <p>This is a detailed description of Project 1.</p>
      <p>
        Here you can add more information like tech stack, features, and images.
      </p>
      <div className="project-detail">
        {/* Sidebar for navigation */}
        <div className="sidebar">
          <h3>Sections</h3>
          <ul>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#tech-stack">Tech Stack</a>
            </li>
            <li>
              <a href="#challenges">Challenges</a>
            </li>
            <li>
              <a href="#outcome">Outcome</a>
            </li>
          </ul>
        </div>

        {/* Content area with sections */}
        <div className="content">
          <section id="overview" className="project-section">
            <h2>Overview</h2>
            <p>
              Dropdown menus are a common and essential element of web and app
              design, often used for navigation, selection, and settings.
              Because they’re so prevalent, ensuring they are accessible,
              intuitive, and efficient is crucial for a broad range of users.
              This case study allowed me to explore the complexities of dropdown
              menu design, including how to make them function across different
              input methods, support screen readers, and maintain usability for
              all users.
            </p>
          </section>

          <section id="tech-stack" className="project-section">
            <h2>Tech Stack</h2>
            <p>Technologies used: React, Node.js, MongoDB, etc.</p>
          </section>

          <section id="challenges" className="project-section">
            <h2>Challenges</h2>
            <p>
              This section can describe the challenges faced during the project
              and how you solved them.
            </p>
          </section>

          <section id="outcome" className="project-section">
            <h2>Outcome</h2>
            <p>
              Explain the results of the project, how successful it was, and any
              additional outcomes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dropdown