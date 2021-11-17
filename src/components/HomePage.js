import React from "react";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Work from "./Work";
import Resume from "./Resume";

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <AboutMe />
      <Work />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default HomePage;
