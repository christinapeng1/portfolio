import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dropdown from "./pages/projects/Dropdown";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<h1>About Page</h1>} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<h1>Contact Page</h1>} />
          <Route path="/portfolio/projects/dropdown" element={<Dropdown />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
