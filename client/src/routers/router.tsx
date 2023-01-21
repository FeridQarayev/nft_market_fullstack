import React from "react";
import Rankings from "../pages/rankings";
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
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "rankings",
        element: <Rankings />,
      },
    ],
  },
];
