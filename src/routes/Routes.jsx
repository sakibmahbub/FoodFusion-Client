import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Recipes from "../pages/Recipes/Recipe";
import ChefDetails from "../pages/Recipes/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "chefs/:id",
        element: <ChefDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
    ],
  },
]);

export default router;
