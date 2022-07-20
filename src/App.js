import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./Navbar";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route exact path="/about" element={<About />}/>
      </Routes>
      <Routes>
      <Route exact path="/login" element={<Login />}/>
      </Routes>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      </Routes>
    
    </div>
  );
}

export default App;