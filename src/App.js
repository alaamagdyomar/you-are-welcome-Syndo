import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toggle from "react-toggle";
import { FiSun, FiMoon } from "react-icons/fi";
import "react-toggle/style.css";
import "./App.css";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <div className="header">
        <h1>React App</h1>
        <div className="toggle">
          <Toggle
            icons={{
              checked: <FiMoon />,
              unchecked: <FiSun />,
            }}
            checked={isDarkMode}
            onChange={handleToggle}
          />
        </div>
      </div>
      <div className="grid">
        {[...Array(16)].map((_, index) => (
          <div key={index} className="grid-item">
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
