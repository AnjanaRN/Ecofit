import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Wardrobe from "./pages/Wardrobe";
import MaterialGuide from "./pages/MaterialGuide";
import EcoTips from "./pages/EcoTips";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo-box">
        <div className="logo-icon">🌿</div>
        <div className="logo-text">EcoFit</div>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>
          Home
        </NavLink>

        <NavLink to="/calculator" className={({ isActive }) => isActive ? "active-link" : ""}>
          Calculator
        </NavLink>

        <NavLink to="/wardrobe" className={({ isActive }) => isActive ? "active-link" : ""}>
          My Wardrobe
        </NavLink>

        <NavLink to="/materials" className={({ isActive }) => isActive ? "active-link" : ""}>
          Materials
        </NavLink>

        <NavLink to="/eco-tips" className={({ isActive }) => isActive ? "active-link" : ""}>
          Eco Tips
        </NavLink>
      </div>

      <button
        className="start-btn"
        onClick={() => navigate("/calculator")}
      >
        Start Assessing →
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/materials" element={<MaterialGuide />} />
        <Route path="/eco-tips" element={<EcoTips />} />
      </Routes>
    </Router>
  );
}

export default App;