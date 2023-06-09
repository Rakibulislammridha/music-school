import React from "react";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";

const SingleClass = ({ singleSubject }) => {

    const {image, subject, price, availableSits } = singleSubject;

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
            <h2 className="card-title">Subject: {subject}</h2>
              <span className="font-bold">Instructor:
              {singleSubject.instructor.instructor}
              </span>
            <div className="font-bold">
              <span className="flex gap-[4px]">
                Enrolled Student:{" "}
                <div className="mt-[6px]">
                  {/* <FcMusic></FcMusic> */}
                </div>{" "}
                {availableSits}
              </span>
            </div>
            <button className="btn bg-orange-600 text-white hover:bg-orange-400">Select Subject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
