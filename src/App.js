import React from "react";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
