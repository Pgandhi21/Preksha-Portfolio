import React from "react";
import profilePic from "../images/MyPic.jpg";
import "./scss/AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-me" id="About-Me">
        <img src={profilePic} alt="Loading Failed" />
        <p>
          Software developer leveraging Process Engineering background to help
          users to analyze problems and build systems and processes to solve
          them. Recently earned a certificate in full stack development from the
          Georgia Tech University Coding Bootcamp, with newly developed skills
          in MERN stack, Graphql, MySQL, and responsive web design. Known as a
          self-starting innovative problem solver passionate about developing
          apps that make an impactful user experience. Recently, I worked on a
          team to develop a single-page MERN app that helps users achieve a goal
          by breaking it into steps and having an accountability partner to
          help/encourage users to be on track. I’m excited to leverage my skills
          as part of a fast-paced, quality-driven team to build better
          experiences on the web.
        </p>
    </div>
  );
}

export default AboutMe;
