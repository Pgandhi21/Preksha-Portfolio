import React from "react";
import MiriumImg from "../images/Mirum.jpg";
import WeatherImg from "../images/Clouds.jpg";
import PlannerImg from "../images/planner.jpg";
import CityComparisonImg from "../images/Two-City-Comparison-Tool.jpg";

function Work() {
  return (
    <div>
      <block className="content-title">
        <h2 id="Work">Work</h2>
      </block>
      <block className="details card-container" id="work-details">
        <card className="SmallCard">
          <a href="https://mirum.herokuapp.com/">
            <img src={MiriumImg} alt="Mirum Project not Loaded" />
          </a>
          <div className="SmallCardTitle">
            <h3>Mirum</h3>
            <p>
              <a href="https://github.com/Pgandhi21/Mirum">
                Github Repository Link
              </a>
            </p>
          </div>
        </card>
        <card className="SmallCard">
          <a href="https://pgandhi21.github.io/Weather-Dashboard/">
            <img src={WeatherImg} alt="Weather Dashboard not Loaded" />
          </a>
          <div className="SmallCardTitle">
            <h3>Weather Dashboard</h3>
            <p>
              <a href="https://pgandhi21.github.io/Weather-Dashboard/">
                Github Repository Link
              </a>
            </p>
          </div>
        </card>
        <card className="SmallCard">
          <a href="https://pgandhi21.github.io/Day-planner/">
            <img src={PlannerImg} alt="Day Planner not Loaded" />
          </a>
          <div className="SmallCardTitle">
            <h3>Day Planner</h3>
            <p>
              <a href="https://github.com/Pgandhi21/Day-planner">
                Github Repository Link
              </a>
            </p>
          </div>
        </card>
        <card className="SmallCard">
          <a href="https://pgandhi21.github.io/Two-City-Comparison-Tool/">
            <img src={CityComparisonImg} alt="Comparison Tool not Loaded" />
          </a>
          <div className="SmallCardTitle">
            <h3>Two City Comparison Tool</h3>
            <p>
              <a href="https://github.com/Pgandhi21/Two-City-Comparison-Tool">
                Github Repository Link
              </a>
            </p>
          </div>
        </card>
      </block>
    </div>
  );
}

export default Work;
