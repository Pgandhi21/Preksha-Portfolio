import React from "react";
import profilePic from "../images/IMG_20170908_135256.jpg";

function AboutMe() {
  return (
    <div>
      <img
        src={profilePic}
        alt="Loading Failed" />
      <p>
        Hi, I am a former Process Engineer. I graduated from Georgia Institute
        of Technology with a Bachelor of Science in Chemical Engineering. I took
        break from work due to health and family issues. While working as a
        Process Engineer, I dabbled a little in coding and fell in love. To me,
        coding is similar to Process engineer work as you work to increase
        productivity, efficiency, and/or accessibility. Currently, I am a
        student at Georgia Institute of Technology in Full-stack coding
        bootcamp.
      </p>
    </div>
  );
}

export default AboutMe;
