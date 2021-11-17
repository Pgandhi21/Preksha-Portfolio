import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/ContactMe";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Navbar />
        <HomePage />
        <Work />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
