// ----------------------------------------------------Imports--------------------------------------------
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import Login from "./pages/Auth/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useSelector } from "react-redux";
// -------------------------------------------------------------------------------------------------------

function App() {
  // ------------------------------------------------------------------------------------------------------
  const { isUserLoggedIn } = useSelector((state) => state?.auth);
  // ------------------------------------------------------------------------------------------------------
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: isUserLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
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
