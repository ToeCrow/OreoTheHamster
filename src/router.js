import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "./Pages/Start";
import Gallery from "./Pages/Gallery";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Start /> }, // Startsidan
      { path: "gallery", element: <Gallery /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // 404-sida
]);

export default router;
