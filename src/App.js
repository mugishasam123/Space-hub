import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { fetchRockets } from "./components/redux/rockets/actions/getRockets";
import Rockets from "./components/Rockets";
import Missions from "./components/missions/Missions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  });
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={(<Rockets/>)} />
          <Route path="/Rockets" element={(<Rockets/>)} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Profile" element={<h1> my profile </h1>} />{" "}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
};

export default App;
