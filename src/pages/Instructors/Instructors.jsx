import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
import Loader from "../Shared/Loader/Loader";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://learn-music-server-rakibulislammridha.vercel.app/users/instructors")
    .then(res => res.json())
    .then(data => {
      setInstructors(data); 
      setLoading(false)
    })
  }, []);

  if(loading){
    return <Loader></Loader>
  }

  return (
    <div>
      <Helmet>
        <title>Music School | Instructors</title>
      </Helmet>
      <Title subHeading={"Let's Meet"} heading={"Our Instructors"}></Title>
        <div className="overflow-x-auto">
          <table className="table mb-10">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((user, i) => (
                <tr key={user._id}>
                  <th>
                    {i + 1}
                  </th>
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
                    </div>
                  </td>
                  <td>
                    {user.name}
                  </td>
                  <td>
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Instructors;
