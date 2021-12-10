import React, { useState } from "react";
import "./scss/Projects.scss";
import MiriumImg from "../images/mirum.jpg";
import WeatherImg from "../images/weather-dashboard.jpg";
import CityComparisonImg from "../images/two-city-comparison-tool.jpg";
import BudgetTrackerImg from "../images/budget-tracker.jpg";
import FitnessTrackerImg from "../images/fitness-tracker.jpg";
import BeecomingmeImg from "../images/beecoming-me.jpg";
import { removeHyphensAndCapitalize } from "../utils/helper";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [projects] = useState([
    {
      name: "beecoming-me",
      description: "MERN Stack, Graphql, Web API, and SCSS",
      link: "http://beecomingme.com/",
      repo: "https://github.com/courtbourt12/beecomingme",
      img: BeecomingmeImg,
    },
    {
      name: "mirum",
      description: "MVC, Web Scraping, Sessions, Sequelize, and Express.js",
      link: "https://mirum.herokuapp.com/",
      repo: "https://github.com/Pgandhi21/Mirum",
      img: MiriumImg,
    },
    {
      name: "weather-dashboard",
      description: "HTML, CSS, API, and localStorage",
      link: "https://pgandhi21.github.io/Weather-Dashboard/",
      repo: "https://github.com/Pgandhi21/Weather-Dashboard",
      img: WeatherImg,
    },
    {
      name: "budget-tracker",
      description: "Mongoose, heroku, Atlas, Express, and PWA",
      link: "https://budget-tracker-55208.herokuapp.com/",
      repo: "https://github.com/Pgandhi21/Budget-tracker",
      img: BudgetTrackerImg,
    },
    {
      name: "two-city-comparison-tool",
      description: "HTML, Materialize CSS, Client-side Storage, and API",
      link: "https://pgandhi21.github.io/Two-City-Comparison-Tool/",
      repo: "https://github.com/Pgandhi21/Two-City-Comparison-Tool",
      img: CityComparisonImg,
    },
    {
      name: "fitness-tracker",
      description: "Express, Mongoose, Atlas, and heroku",
      link: "https://workout-tracker-86140.herokuapp.com/",
      repo: "https://github.com/Pgandhi21/Workout-Tracker",
      img: FitnessTrackerImg,
    },
  ]);

  return (
    <div className="project-container">
      {projects.map((project, idx) => (
        <div className="project" key={project.name + idx}>
          <div className="project-text">
            <h3>
              <a href={project.link}>
                {removeHyphensAndCapitalize(project.name)}
              </a>
              <a href={project.repo}>
                <FaGithub />
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
          <img
            src={project.img}
            alt={removeHyphensAndCapitalize(project.name)}
            className="project-img"
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
