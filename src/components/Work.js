import React from "react";
import "./Work.scss";
import MiriumImg from "../images/Mirum.jpg";
import WeatherImg from "../images/Clouds.jpg";
import PlannerImg from "../images/planner.jpg";
import CityComparisonImg from "../images/Two-City-Comparison-Tool.jpg";

function Work() {
  return (
    <section className="work">
      <h3 id="Work">Work</h3>
      <div className="container">
        <div className="small-container">
          <div
            className="item"
            href="https://mirum.herokuapp.com/"
            style={{
              backgroundImage: `url(${MiriumImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Mirum</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Mirum">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>
        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Weather-Dashboard/"
            style={{
              backgroundImage: `url(${WeatherImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Weather Dashboard</h4>
            <p>
              <a href="https://pgandhi21.github.io/Weather-Dashboard/">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>
        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Day-planner/"
            style={{
              backgroundImage: `url(${PlannerImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Day Planner</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Day-planner">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>
        <div className="small-container">
          <div
            className="item"
            href="https://pgandhi21.github.io/Two-City-Comparison-Tool/"
            style={{
              backgroundImage: `url(${CityComparisonImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Two City Comparison Tool</h4>
            <p>
              <a href="https://github.com/Pgandhi21/Two-City-Comparison-Tool">
                Github Repository Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
