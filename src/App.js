/* eslint-disable import/no-anonymous-default-export */
// Import necessary dependencies
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Signin from "./Pages/Signin";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Routes from "./routes";

// const Routes = {
//   Signin: { path: '/signin' },
//   HomePage: { path: '/home' },
//   NotFound: { path: '/notfound' },
// };

const RouteWithLoad = ({ component: Component, ...rest }) => {
  // You can include your loading logic here if needed
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default () => (
  <Switch>
    <RouteWithLoad exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoad exact path={Routes.HomePage.path} component={HomePage} />
    <Redirect to={Routes.NotFound.path} component={NotFound} />
  </Switch>
);
