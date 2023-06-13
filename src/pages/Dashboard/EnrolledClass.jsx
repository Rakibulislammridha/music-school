import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
import useAuth from "../../hooks/useAuth";

const EnrolledClass = () => {
  const { user } = useAuth();

  const [enrolledClasses, setEnrolledClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/payments/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClasses(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Music School | Enrolled Student's</title>
      </Helmet>
      <Title
        subHeading={"Here Is Your All"}
        heading={`Enrolled Classes: ${enrolledClasses.length}`}
      ></Title>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Student Name</th>
                <th>Student email</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Enrolled Students</th>
                <th>Available Sites</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses.map((enrolled, i) => (
                <tr key={enrolled._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={enrolled.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{enrolled.name}</td>
                  <td>{enrolled.email}</td>
                  <td>{enrolled.enrolledSubject}</td>
                  <td>{enrolled.instructor.instructor}</td>
                  <td>{enrolled.enrolledStudents}</td>
                  <td>{enrolled.availableSits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
