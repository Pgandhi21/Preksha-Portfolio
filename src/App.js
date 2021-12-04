import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import "./App.scss";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="sections">
            <Routes>
              <Route path="/preksha-portfolio/" element={<AboutMe />}></Route>
              <Route
                path="/preksha-portfolio/projects"
                exact
                element={<Projects />}
              ></Route>
              <Route
                path="/preksha-portfolio/resume"
                element={<Resume />}
              ></Route>
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
