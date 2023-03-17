<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
import { RouterProvider, createBrowserRouter } from "react-router-dom";
>>>>>>> b5450acbb1cfa2ef67b0330504fdb721ebfb2e4b
import Layout from "./layout";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/thoughts",
        element: <Thoughts />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
