import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Home/signup/signup";
import Course from "../pages/Home/Course/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  /* User */
  /* {
    path: "/user",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  }, */
]);

export default router;
