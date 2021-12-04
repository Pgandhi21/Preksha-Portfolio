import React from "react";
import "./scss/Resume.scss";

function Resume() {
  return (
    <div className="resume" id="Resume">
      <h3>
        <span>
          <a
            href="http://www.linkedin.com/in/preksha-gandhi"
            target="_blank"
            rel="noopenner noreferrer"
          >
            Resume
          </a>{" "}
          (PDF version)
        </span>
      </h3>
      <div className="bg-container">
        <div className="container">
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>MS VBA</li>
          </ul>
        </div>
        <div className="container">
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
