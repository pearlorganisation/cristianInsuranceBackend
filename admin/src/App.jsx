import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";

function App() {
  const [count, setCount] = useState(0);

  const appRouter = [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [{}],
    },
  ];

  return <></>;
}

export default App;
