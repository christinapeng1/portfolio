import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dropdown from "./pages/projects/Dropdown";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/projects/dropdown" element={<Dropdown />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
