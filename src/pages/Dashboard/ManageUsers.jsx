import React from "react";
import Title from "../../components/Title/Title";
import { Helmet } from "react-helmet-async";
import { FaUser, FaUserGraduate, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {

  const [axiosSecure] = useAxiosSecure();

  const {data: users = [], refetch} = useQuery(["users"], async () =>{
    const res = await axiosSecure.get(`/users`)
    return res.data;
  })

  //   Make admin from instructor
  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} Now You Are Admin !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //   Make Instructor from user
  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} Now You Are Instructor !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Music School | Manage Users</title>
      </Helmet>
      <Title subHeading={"There Is Our"} heading={"All Users"}></Title>
      <div className="">
        <h3 className="text-4xl text-center font-bold mb-4 underline">Total Users: {users.length}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Info</th>
              <th>email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" && (
                    <>
                      <span className="btn btn-sm bg-orange-600 hover:bg-orange-400 text-white">
                        <FaUserTie></FaUserTie>
                        Admin
                      </span>
                    </>
                  )}
                  {user.role === "instructor" && (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm bg-orange-600 hover:bg-orange-400 text-white"
                      >
                        <FaUserGraduate></FaUserGraduate>
                        Instructor
                      </button>
                    </>
                  )}
                  <>
                    { user.role !== "admin" && user.role !== "instructor" && <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-sm bg-orange-600 hover:bg-orange-400 text-white"
                    >
                      <FaUser></FaUser>
                      User
                    </button>}
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
