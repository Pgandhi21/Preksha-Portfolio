import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <section
        className="navbar-container"
      >
        <h1>Preksha Gandhi</h1>
        <nav>
          <ul>
            <li>
              <a href="#About-Me">About Me</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Contact-Me">Contact Me</a>
            </li>
            <li>
              <a href="#Resume">Resume</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
