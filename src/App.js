import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; // Import BrowserRouter and Route

import Signin from "./Pages/Signin";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Route path="/" element={<Signin />} /> {/* Use Route */}
      <Route path="/home" element={<HomePage />} /> {/* Use Route */}
    </Router>
  );
}

export default App;
