import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        },
        {
          path: "classes",
          element: <PrivateRoute>
            <Classes></Classes>
          </PrivateRoute>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);