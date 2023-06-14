import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../../assets/musicSchoolLogo.jpg";
import { AuthContext } from "../../../providers/AuthProviders";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Navbar = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor()

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          {isAdmin && (
            <Link to="/dashboard/manageClasses">Dashboard</Link>
          )}
          {isInstructor && (
            <Link to="/dashboard/myClasses">Dashboard</Link>
          )}
          {!isAdmin && !isInstructor && (
            <Link to="/dashboard/selectedClass">Dashboard</Link>
          )}
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 font-semibold bg-white"
            >
              {navOptions}
            </ul>
          </div>
          <NavLink to="/">
            <div className="normal-case text-xl flex justify-center items-center sm:flex-col">
              <img
                className="w-10 lg:w-[50px] rounded-md mr-2 h-[40px]"
                src={navLogo}
                alt=""
              />
              <h3 className="text-orange-600 font-bold tracking-wider">
                Music School
              </h3>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end flex ">
          {user && (
            <>
              <img
                className="h-[40px] w-[40px] border rounded-full mr-4"
                src={user?.photoURL}
                alt=""
              />
            </>
          )}
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-orange-600 hover:bg-orange-400 hover:border-orange-400 border-orange-600 text-white mr-8"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm bg-orange-600 hover:bg-orange-400 hover:border-orange-400 border-orange-600 text-white mr-8">
                  Login
                </button>
              </Link>
            </>
          )}
          <div className="mr-2">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
