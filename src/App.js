import React from "react";
// import AppNavigation from "./Routes/AppNavigation";
import Signin from "./pages/Signin";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;