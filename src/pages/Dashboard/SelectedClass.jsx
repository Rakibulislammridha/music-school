import React from 'react';
import useSubject from '../../hooks/useSubject';
import {FaTrashAlt} from "react-icons/fa"
import { Helmet } from 'react-helmet-async';
import Title from '../../components/Title/Title';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {

    const [subject, refetch] = useSubject()
    console.log(subject);

    const handleDelete = (id) =>{
        console.log(id);
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
                fetch(`${import.meta.env.VITE_API_URL}/selectedSubjects/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
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
                <title>Music School | Selected Classes</title>
            </Helmet>
            <Title
             subHeading={"That's My"}
             heading={`Selected Class: ${subject.length}`}
            ></Title>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Subject Name</th>
        <th>Course Price</th>
        <th>Instructor Name</th>
        <th>Enrolled Student</th>
        <th>Available Sites</th>
        <th>Remove Selection</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {subject.map((sub, i) => <tr key={sub._id}>
        <th>
          {i + 1}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={sub.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {sub.subject}
        </td>
        <td>
          ${sub.price}
        </td>
        <td>
            {sub.instructor.instructor}
        </td>
        <td>
            {sub.enrolledStudents}
        </td>
        <td>
            {sub.availableSits}
        </td>
        <td>
            <button 
                onClick={()=> handleDelete(sub._id)}
                className="btn-xm">
                <FaTrashAlt size={30} className='text-orange-600'></FaTrashAlt>
            </button>
        </td>
        <td>
          <Link to={`/dashboard/paymentPage/${sub._id}`}>
          <button className="btn bg-orange-600 hover:bg-orange-400 text-white btn-sm">Enrol Now !</button>
          </Link>
        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default SelectedClass;