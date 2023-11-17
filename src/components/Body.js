import React from "react";
import LogInPage from "./LogInPage";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function Body() {

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogInPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 

  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default Body;
