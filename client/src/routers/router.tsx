import React from "react";
import Rankings from "../pages/rankings";
import MainRoot from "../pages/MainRoot";
import Marketplace from "../pages/marketplace";
import CreateArtist from "../pages/createArtist";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Rankings />,
      },
      {
        path: "rankings",
        element: <Rankings />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "createArtist",
        element: <CreateArtist />,
      },
    ],
  },
];
