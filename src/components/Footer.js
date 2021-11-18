import React from "react";
import "./Footer.scss";
import {FaGithub, FaLinkedin} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <section className="navbar-container">
        <nav>
          <ul>
            <li>
              <a href="http://www.linkedin.com/in/preksha-gandhi" target="_blank" rel="noopenner noreferrer"><FaLinkedin />LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/Pgandhi21" target="_blank" rel="noopenner noreferrer"><FaGithub />GitHub</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
