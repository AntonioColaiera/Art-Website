import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
