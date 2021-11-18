import React from "react";
import ResumeImg from "../images/Resume.jpg";
import "./Resume.scss";

function Resume() {
  return (
    <section className="resume">
      <h3 id="Resume">Resume</h3>
      <div className="container">
        <div className="small-container">
          <div
            className="item"
            href="https://drive.google.com/file/d/1MoAU1Lv7rqPmQg8H_kBKWJEVwq0qqvpR/view?usp=sharing"
            style={{
              backgroundImage: `url(${ResumeImg})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div>
            <h4>Resume</h4>
            <p>Click above to go to PDF</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
