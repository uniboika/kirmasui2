import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Import BrowserRouter and Route

import HomePage from "./pages/HomePage";
import Signin from "./Component/Signin";

function App() {
  return (
    <Router>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<HomePage />} />
    </Router>
  );
}

export default App;
