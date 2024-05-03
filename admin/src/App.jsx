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
import Blog from "./pages/Blog/ViewBlog"
import CreateBlog from "./pages/Blog/CreateBlog";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./pages/Blog/UpdateBlog";
import Faq from "./pages/Faq/ViewFaq"
import CreateFaq from "./pages/Faq/CreateFaq";
import UpdateFaq from "./pages/Faq/UpdateFaq";
// -------------------------------------------------------------------------------------------------------

function App() {
  // ------------------------------------------------------------------------------------------------------
  // const { isUserLoggedIn } = useSelector((state) => state?.auth);
  const isUserLoggedIn = true;
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
          element: isUserLoggedIn ? <Dashboard /> : <Login />,
        },
        {
          path: "/blog",
          element: isUserLoggedIn ? <Blog /> : <Login />,
        },
        {
          path: "/blog/createBlog",
          element: isUserLoggedIn ? <CreateBlog /> : <Login />,
        },
        {
          path: "/blog/updateBlog/:id",
          element: isUserLoggedIn ? <UpdateBlog /> : <Login />,
        },
        {
          path: "/faq",
          element: isUserLoggedIn ? <Faq /> : <Login />,
        },
        {
          path: "/faq/createFaq",
          element: isUserLoggedIn ? <CreateFaq /> : <Login />,
        },
        {
          path: "/faq/updateFaq/:id",
          element: isUserLoggedIn ? <UpdateFaq /> : <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <RouterProvider router={appRouter}>
        <DefaultLayout />
      </RouterProvider>
    </>
  );
}

export default App;
