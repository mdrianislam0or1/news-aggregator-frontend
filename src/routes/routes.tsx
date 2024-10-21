import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./main.routes";
import HomePage from "../pages/HomePage";
import { managerRoutes } from "./manager.routes";
import { userRoutes } from "./user.routes";
import News from "../pages/News";
import NewsPage from "../components/newsComponents/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/superAdmin",
    element: <App />,
    children: adminRoutes,
  },
  {
    path: "/user",
    element: <App />,
    children: userRoutes,
  },
  {
    path: "/manager",
    element: <App />,
    children: managerRoutes,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/news-filter",
    element: <NewsPage />,
  },
]);

export default router;
