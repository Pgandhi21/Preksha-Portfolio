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
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar
