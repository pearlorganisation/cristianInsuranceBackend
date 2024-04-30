// ----------------------------------------------------Imports--------------------------------------------
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import Login from "./pages/Auth/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
// -------------------------------------------------------------------------------------------------------

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}>
        <DefaultLayout />
      </RouterProvider>
    </>
  );
}

export default App;
