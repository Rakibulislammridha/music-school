import React from "react";
import { Fade } from "react-awesome-reveal";
import { FcMusic } from "react-icons/fc";

const SingleInstructor = ({ singleInstructor }) => {
  
    const {instructorImage, instructor, instructorDescription, enrolledStudent, } = singleInstructor

  return (
    <div>
      <Fade>
      <div className="card w-96 bg-base-100 shadow-2xl h-[550px] group">
        <figure className="px-10 pt-10">
          <img
            src={instructorImage}
            alt=""
            className="rounded-xl w-full h-[350px] group-hover:scale-110 
            transition object-cover "
          />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title">{instructor}</h2>
          <p>
            <span className="font-bold">About Class: </span>
            {instructorDescription}
          </p>
          <div className="font-bold">
            <span className="flex gap-[4px]">
              Enrolled Student:{" "}
              <div className="mt-[6px]">
                <FcMusic></FcMusic>
              </div>{" "}
              {enrolledStudent}
            </span>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default SingleInstructor;
