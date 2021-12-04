import React from "react";
import "./scss/Footer.scss";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer-container">
      <ul>
        <li>
          <FaLinkedin class="fa-icon-size" />{" "}
          <a
            href="http://www.linkedin.com/in/preksha-gandhi"
            target="_blank"
            rel="noopenner noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <FaGithub class="fa-icon-size" />{" "}
          <a
            href="https://github.com/Pgandhi21"
            target="_blank"
            rel="noopenner noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <FaPhoneSquareAlt class="fa-icon-size" /> <span> 678-877-9756</span>
        </li>
        <li>
          <FaEnvelope class="fa-icon-size" /> <span> pg191907@gmail.com</span>
        </li>
      </ul>
    </section>
  );
}
