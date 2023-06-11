import React from "react";
import useAllSubjects from "../../hooks/useAllSubjects";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [ subjects] = useAllSubjects();
  console.log(subjects);

  const handleApprovedSubject = (id) =>{
    console.log(id);
    fetch(`${import.meta.env.VITE_API_URL}/subjects/approved/${id}`, {
        method: "PATCH",
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Class is Approved By Admin",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div>
      <Helmet>
        <title>Music School | Manage Classes</title>
      </Helmet>
      <Title subHeading={"Here Is All"} heading={"All Classes"}></Title>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Instructors Name</th>
                <th>Instructors email</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Deny Class</th>
              </tr>
            </thead>
            <tbody>
              {
                subjects.map((sub, i) => <tr key={sub._id}>
                    <th>{i + 1}</th>
                    <td>{sub.instructor.instructor}</td>
                    <td>{sub.instructor.email}</td>
                    <td>{sub.subject}</td>
                    <td>
                        {
                            sub.status === "approved" ? <button onClick={()=> handleApprovedSubject(sub._id)} className="btn btn-sm bg-green-600 hover:bg-green-500 text-white">
                            Approved
                            </button> : <button onClick={()=> handleApprovedSubject(sub._id)} className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white">
                           Pending
                        </button>
                        }
                    </td>
                    <td>
                    <button className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white">Cancel Request</button>
                    </td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
