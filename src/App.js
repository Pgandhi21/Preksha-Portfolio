import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import "./App.scss";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="sections">
          <Routes>
            <Route path="/" exact element={<AboutMe />}></Route>
            <Route path="/projects" exact element={<Work />}></Route>
            <Route path="/resume" exact element={<Resume />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
