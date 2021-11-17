import React from "react";
import ResumeImg from "../images/Resume.jpg";

function Resume() {
  return (
    <card className="SmallCard">
      <a
        href="https://drive.google.com/file/d/1MoAU1Lv7rqPmQg8H_kBKWJEVwq0qqvpR/view?usp=sharing"
        id="Resume"
      >
        <img src={ResumeImg} alt="Resume not Loaded"/>
      </a>
      <div className="SmallCardTitle">
        <h3>Resume</h3>
        <p>PDF format</p>
      </div>
    </card>
  );
}

export default Resume;
