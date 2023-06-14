import React, { useState } from "react";
import useAllSubjects from "../../hooks/useAllSubjects";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import FeedbackModal from "../../components/Modal/FeedbackModal";
import { FaTrashAlt } from "react-icons/fa";

const ManageClasses = () => {
  const [subjects, refetch] = useAllSubjects();

  const [isOpen, setIsOpen] = useState(false);
  const [subjectId, setSubjectId] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleApprovedSubject = (id) => {

    fetch(`${import.meta.env.VITE_API_URL}/subjects/approved/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Class is Approved By Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`${import.meta.env.VITE_API_URL}/subjects/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your Class has been deleted.',
                        'success'
                      )
                }
            })
            .catch(err => console.log(err.message))
        }
      })
}

  return (
    <div>
      <Helmet>
        <title>Music School | Manage Classes</title>
      </Helmet>
      <Title subHeading={"Here Is All"} heading={`All Classes: ${subjects.length}`}></Title>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Instructor Photo</th>
                <th>Instructors Name</th>
                <th>Instructors email</th>
                <th>Class Name</th>
                <th>Status</th>
                <th>Send FeedBack</th>
                <th>Deny Request</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((sub, i) => (
                <tr key={sub._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={sub.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>{sub.instructor.instructor}</td>
                  <td>{sub.instructor.email}</td>
                  <td>{sub.subject}</td>
                  <td>
                    {sub.status === "approved" ? (
                      <button
                        disabled={true}
                        onClick={() => handleApprovedSubject(sub._id)}
                        className="btn btn-sm bg-green-600 hover:bg-green-500 text-white"
                      >
                        Approved
                      </button>
                    ) : (
                      <button
                        onClick={() => handleApprovedSubject(sub._id)}
                        className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white"
                      >
                        Pending
                      </button>
                    )}
                  </td>
                  <td>
                  <button
                        onClick={() => {
                          openModal(), setSubjectId(sub._id);
                        }}
                        className="btn btn-sm bg-orange-600 hover:bg-orange-500 text-white"
                      >
                        Send Feedback
                      </button>
                  </td>
                  <td>
                    {
                      sub.status !== "approved" && <button
                      onClick={() => handleDelete(sub._id)}
                      className="btn-xm"
                    >
                      <FaTrashAlt
                        size={30}
                        className="text-orange-600"
                      ></FaTrashAlt>
                    </button>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FeedbackModal
        isOpen={isOpen}
        closeModal={closeModal}
        id={subjectId}
        refetch={refetch}
      ></FeedbackModal>
    </div>
  );
};

export default ManageClasses;
