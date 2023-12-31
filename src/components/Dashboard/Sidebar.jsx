import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { GiEntryDoor } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import websiteLogo from "../../assets/musicSchoolLogo.jpg";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
const Sidebar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);

  const [isActive, setActive] = useState("false");

  const [isAdmin] = useAdmin();

  const [isInstructor] = useInstructor();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-orange-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <>
                {
                  isAdmin && <>
                  {/* Menu link Admin */}
                <NavLink
                  to="/dashboard/manageClasses"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdManageAccounts className="w-5 h-5" />
                  <span className="mx-4 font-medium">Manage Classes</span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageUsers"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <FaUsers className="w-5 h-5" />
                  <span className="mx-4 font-medium">Manage Users</span>
                </NavLink>
                  </>
                }
                {
                  isInstructor && <>
                {/* Menu Links instructor */}
                <NavLink
                  to="/dashboard/addClass"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <BsFillHouseAddFill className="w-5 h-5" />
                  <span className="mx-4 font-medium">Add Class</span>
                </NavLink>
                <NavLink
                  to="/dashboard/myClasses"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <SiBookstack className="w-5 h-5" />
                  <span className="mx-4 font-medium">My Classes</span>
                </NavLink>
                  </> 
                }
                
                {
                  !isAdmin && !isInstructor &&  <>
                  {/* Menu link user */}
              <NavLink
                to="/dashboard/enrolledClass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GiEntryDoor className="w-5 h-5" />
                <span className="mx-4 font-medium">Enrolled Class</span>
              </NavLink>
              <NavLink
                to="/dashboard/selectedClass"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <AiOutlineSelect className="w-5 h-5" />
                <span className="mx-4 font-medium">Selected Class</span>
              </NavLink>
              <NavLink
                to="/dashboard/paymentHistory"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsFillCreditCardFill className="w-5 h-5" />
                <span className="mx-4 font-medium">Payment History</span>
              </NavLink>
                </>
                }
              </>
            </nav>
          </div>
        </div>
        {/* Main Content Menu */}
        <div className="divider"></div>
        <div>
        <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <AiFillHome className="w-5 h-5" />

                  <span className="mx-4 font-medium">Home</span>
                </NavLink>
        <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <ImBooks className="w-5 h-5" />

                  <span className="mx-4 font-medium">All Classes</span>
                </NavLink>
        </div>
        <div>
        <div className="divider"></div>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
