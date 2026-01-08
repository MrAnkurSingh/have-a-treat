import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;
