// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./HomePage/NavigationBar";
import Home from "./HomePage/Home";
import Footer from "./HomePage/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
