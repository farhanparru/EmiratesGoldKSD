// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./HomePage/NavigationBar";
import Home from "./HomePage/Home";
import Dimonts from '../src/components/Dimondes'
import Footer from "./HomePage/Footer";
import './App.css'
import Gold from "./components/Gold";
import Platinum from "./components/platinum";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dimondes" element={<Dimonts/>}/>
          <Route path="/Gold" element={<Gold/>}/>
          <Route path="/platinum" element={<Platinum/>}/>
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
