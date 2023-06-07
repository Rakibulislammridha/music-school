import React from "react";
import { FcMusic } from 'react-icons/fc';

const SingleClass = ({ item }) => {
   const {className,details, enrolledStudent, image } = item;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-2xl h-[710px] group">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl w-full h-[350px] group-hover:scale-110 
            transition object-cover "
          />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title">{className}</h2>
          <p><span className="font-bold">About Class: </span>{details}</p>
          <div className="font-bold">
          <span className="flex gap-[4px]">Enrolled Student: <div className="mt-[6px]"><FcMusic></FcMusic></div> {enrolledStudent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
