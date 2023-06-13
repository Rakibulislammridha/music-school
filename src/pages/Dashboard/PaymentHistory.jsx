import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";

const PaymentHistory = () => {
  const { user } = useAuth();

  const [paidClasses, setPaidClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/payments/${user?.email}?sort=date`)
      .then((res) => res.json())
      .then((data) => {
        setPaidClasses(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Music School | Enrolled Student's</title>
      </Helmet>
      <Title subHeading={"Here Is Your"} heading={"Payment History"}></Title>
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
                <th>Payment Id</th>
                <th>Instructor</th>
                <th>Course Fee</th>
                <th>Enrolled Date</th>
              </tr>
            </thead>
            <tbody>
              {paidClasses.map((paid, i) => (
                <tr key={paid._id}>
                  <th>{i + 1}</th>
                  <td>
                  <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={paid.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                  </td>
                  <td>{paid.name}</td>
                  <td>{paid.email}</td>
                  <td>{paid.enrolledSubject}</td>
                  <td>{paid.transactionId}</td>
                  <td>{paid.instructor.instructor}</td>
                  <td>{paid.price}</td>
                  <td>{paid.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
