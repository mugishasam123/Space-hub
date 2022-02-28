import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MissionPage from './components/missions/MissionPage';
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<h1>hello world</h1>}/>
          <Route path="/profile" element={
            <h1>hello pro</h1>
          }/>
          <Route path="/missions" element={<MissionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
