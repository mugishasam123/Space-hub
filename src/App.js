import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Missions from './components/missions/missions';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
