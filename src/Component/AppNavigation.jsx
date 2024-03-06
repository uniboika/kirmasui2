import React from "react";
import { useRoutes } from "react-router-dom";
import Singin from "../Pages/Singin/Singin";
import Singup from "../Pages/Singin/Singup";

export default function AppNavigation() {
  const element = useRoutes([
    {
      path: "/",
      element: <Singin />,
    },
    {
      path: "/singup",
      element: <Singup />,
    },
    {
      path: "/contact",
      element: "Contact",
    },
  ]);
  return element;
}
