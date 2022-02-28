import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>homepage </h1>} />
          <Route path="/Rockets" element={<h1> rockets</h1>} />
          <Route path="/Missions" element={<h1> Missions</h1>} />
          <Route path="/Profile" element={<h1> my profile </h1>} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
