import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";

const SingleClass = ({ singleSubject }) => {

    const {image, subject, price, instructor, availableSits, enrolledStudents, _id } = singleSubject;

    const [loading, setLoading] = useState(false)

    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const location = useLocation();

    const handleSelectedSubject = (singleSubject) =>{
      setLoading(true);
      if(user && user?.email){
        const singleSubject = {
          subjectId: _id,
          subject, 
          price, 
          image,
          availableSits,
          enrolledStudents,
          instructor,
          email: user?.email,
        }
        fetch(`${import.meta.env.VITE_API_URL}/selectedSubjects`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(singleSubject)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Class Selected ! It's Time To Enrol",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        })
      }
      else{
        Swal.fire({
          title: 'Please Login To Select Your Class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state:{from: location}})
            setLoading(false)
          }
        })
      }
    }

  return (
    <div className="">
      <Helmet>
        <title>Music School | Classes</title>
      </Helmet>
      <div className="mb-8">
        <div className="card w-96 bg-base-100 shadow-2xl h-[500px] group">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt=""
              className="rounded-xl w-full h-[350px] group-hover:scale-110 
            transition object-cover "
            />
          </figure>
          <div className="card-body items-left text-left">
            <h2 className="card-title font-bold">Subject: {subject}.</h2>
              <span className="font-semibold">Instructor:
                <span className="ml-2">{singleSubject.instructor.instructor}.</span>
              </span>
            <div className="font-semibold">
            Available Sits:<span className=""> {availableSits}</span>
            </div>
            <div className="font-semibold">
            Enrolled Student:<span className=""> {enrolledStudents}</span>
            </div>
            <div className="font-semibold">
            Class Cost:<span className=""> ${price}</span>
            </div>
            <button 
             onClick={()=>handleSelectedSubject(singleSubject)}
             className="btn bg-orange-600 text-white hover:bg-orange-400">{loading ? (
              <ImSpinner10 className="m-auto animate-spin" size={24} />
            ) : (
              "Add Class"
            )}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
