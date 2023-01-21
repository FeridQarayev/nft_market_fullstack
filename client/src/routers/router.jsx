import React from "react";
import Home from "../pages/home";
import MainRoot from "../pages/MainRoot";
import Marketplace from "../pages/marketplace";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Marketplace />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
];
