import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: '/Resume',
        element: <Resume/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
