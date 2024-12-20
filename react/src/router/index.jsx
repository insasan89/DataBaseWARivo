import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../layout/layout";
import Landing from "../pages/Landing";
import Explore from "../pages/Explore";
import AuthSignup from "../pages/AuthSignup";
import AuthLogin from "../pages/AuthLogin";
import HomeMap from "../pages/HomeMap";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs"

const checkAuthLoader = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/");
  }
  return null; // No redirection, allow navigation
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      // Home route
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
       {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "signup",
        element: <AuthSignup />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "homeMap",
        element: <HomeMap />,
        loader: checkAuthLoader,
      },
      {
        path: "notFound",
        element: <NotFound />,
      },
  ], 
  }, 
]); 

export default router;
