import React from "react";
import { Helmet } from "react-helmet-async";

const SingleClass = ({ singleSubject }) => {
  console.log(singleSubject);

    const {image, subject, price, availableSits, enrolledStudents } = singleSubject;

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
            <button className="btn bg-orange-600 text-white hover:bg-orange-400">Select Subject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
