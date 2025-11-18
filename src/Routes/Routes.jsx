import { createBrowserRouter } from "react-router";
import App from "../Pages/App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app/:id",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);

export default router;
