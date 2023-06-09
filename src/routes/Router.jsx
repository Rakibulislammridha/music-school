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
import DashboardLayout from "../layout/DashboardLayout";
import AddClass from "../pages/Dashboard/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";


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
    {
      path: "/dashboard",
      element: <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>,
      children: [
        {
          path: "/dashboard/addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "/dashboard/myClasses",
          element: <MyClasses></MyClasses>
        },
        {
          path: "/dashboard/manageUsers",
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);