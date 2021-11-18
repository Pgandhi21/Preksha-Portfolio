import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import "./App.scss";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <AboutMe />
        <Work />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
