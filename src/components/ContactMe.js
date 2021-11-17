import React from "react";

function ContactMe() {
  return (
    <section
      className="container"
    >
      <block className="content-title">
        <h2 id="Contact-Me">
          Contact Me
        </h2>
      </block>
      <block className="details" id="contact-me-details">
        <ul>
          <li> 678-615-8144</li>
          <li>
            {" "}
            <a href="mailto: pg191907@gmail.com">pg191907@gmail.com</a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/Pgandhi21">Github</a>
          </li>
          <li>
            {" "}
            <a href="http://www.linkedin.com/in/preksha-gandhi">LinkedIn</a>
          </li>
        </ul>
      </block>
    </section>
  );
}

export default ContactMe;
