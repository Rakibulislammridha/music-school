import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/subjects/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, []);

  console.log(myClasses);

  return (
    <div>
      <Helmet>
        <title>My School | My Classes Dashboard</title>
      </Helmet>
      <Title subHeading={"You Can't See"} heading={"My Classes"}></Title>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Info</th>
                <th>Enrolled Students</th>
                <th>Available Sites</th>
                <th>Admin Feedback</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
                myClasses.map((classItem, i) => <tr key={classItem._id}>
                    <th>
                      {i + 1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={classItem.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{classItem.subject}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {classItem.enrolledStudents} Students.
                    </td>
                    <td>
                       Need: {classItem.availableSits} Students
                    </td>
                    <td>
                       {
                        classItem.feedback ? <span>{classItem.feedback}</span> : <span>No Admin Feedback</span>
                       }
                    </td>
                    <th>
                      {
                        classItem.status === "approved" ? <button className="btn bg-green-600 hover:bg-green-500 text-white btn-xs">{classItem.status}</button> : <button className="btn bg-orange-600 hover:bg-orange-500 text-white btn-xs">{classItem.status}</button>
                      }
                    </th>
                  </tr> )
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
