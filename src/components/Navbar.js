import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";


function Navbar() {
    return (
    <header className="navbar">
      <section className="navbar-container">
        <h1>Preksha Gandhi</h1>
        <nav>
          <ul>
            <li><Link to="/preksha-portfolio/">About Me</Link></li>
            <li><Link to="/preksha-portfolio/projects">Projects</Link></li>
            <li><Link to="/preksha-portfolio/resume">Resume</Link></li>
            <li><Link to="/preksha-portfolio/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar
