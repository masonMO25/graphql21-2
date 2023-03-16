import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";
import Profiles from "./routes/profiles";

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
  return (
<<<<<<< HEAD
    <nav>
      <ul>
        <li>
          <a href="/profiles">Profiles</a>
        </li>
        <li>
          <a href="/thoughts">Thoughts</a>
        </li>
      </ul>
    </nav>
=======
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/thoughts">Thoughts</Link>
          </li>
        </ul>
      </nav>
    </RouterProvider>
>>>>>>> 9bd16b8ea0b5d99303135e05a705b8642aea32ce
  );
}
