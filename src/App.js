import Navbar from "./components/Navbar";
import Work from "./components/Work";
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
            <Route path="/preksha-portfolio/" element={<AboutMe />}></Route>
            <Route path="/preksha-portfolio/projects" exact element={<Work />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
