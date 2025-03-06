import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Start from "./Pages/Start.jsx";
import Gallery from "./Pages/Gallery.jsx";
import NotFound from "./Pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Start /> }, // JSX-syntax
      { path: "gallery", element: <Gallery /> }, // JSX-syntax
    ],
  },
  { path: "*", element: <NotFound /> }, // JSX-syntax
]);

export default router;
