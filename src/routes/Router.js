import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Scan from "../pages/Scan";
import DOScan from "../pages/DOScan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Detail",
    element: <Detail />,
  },
  {
    path: "/Scan",
    element: <Scan />,
  },

  {
    path: "/DOScan",
    element: <DOScan />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
