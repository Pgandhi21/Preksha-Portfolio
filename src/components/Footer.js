import React from "react";
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <section
        className="navbar-container"
      >
        <nav>
            <ul>
                <li>
                    <a href="#About-Me">LinkedIn</a>
                </li>
                <li>
                    <a href="#Work">GitHub</a>
                </li>
            </ul>
        </nav>
      </section>
    </footer>
  );
}
