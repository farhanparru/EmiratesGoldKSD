import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./HomePage/NavigationBar";
import Home from "./HomePage/Home";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
