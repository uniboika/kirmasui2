import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signin from "../Pages/login/Signin";
import HomePage from "../Pages/HomePage";

export default function AppNavigation() {
  return (
    <Router>
      <Route exact path="/" component={Signin} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
}
