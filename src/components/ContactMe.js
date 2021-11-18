import React from "react";
import { useState } from "react";
import "./ContactMe.scss";

function ContactMe() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <section className="contact-me" id="Contact-Me">
      <div className="container">
        <h3>Contact</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
