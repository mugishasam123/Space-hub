import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { fetchRockets } from "./components/redux/rockets/actions/getRockets";
const App =() =>{
 const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRockets());
  })
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1> homepage </h1>} />
          <Route path="/Rockets" element={<h1> rockets </h1>} />
          <Route path="/Missions" element={<h1> Missions </h1>} />
          <Route path="/Profile" element={<h1> my profile </h1>} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
