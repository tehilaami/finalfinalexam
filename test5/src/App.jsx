import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AddWilling from './components/AddWilling';
import FindWilling from './components/FindWilling';
import AllWilling from './components/AllWilling';


function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="/add" element={<AddWilling />} />
        <Route path="/find" element={<FindWilling />} />
        <Route path="/all" element={<AllWilling />} />
      </Routes>
    </div>
  );
}

export default App;

