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
import SelectedClass from "../pages/Dashboard/SelectedClass";
import PaymentPage from "../pages/Dashboard/PaymentPage";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../pages/Error/Error";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <Classes></Classes>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
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
          path: "manageUsers",
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: "manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: "addClass",
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: "myClasses",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "selectedClass",
          element: <SelectedClass></SelectedClass>
        },
        {
          path: "paymentPage/:id",
          element: <PaymentPage></PaymentPage>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/selectedSubjects/${params.id}`)
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>,
        },
        {
          path: "enrolledClass",
          element: <EnrolledClass></EnrolledClass>
        },
      ]
    }
  ]);