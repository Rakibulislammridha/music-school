import React from "react";
import { Fade } from "react-awesome-reveal";
import { FcMusic } from "react-icons/fc";

const SingleInstructor = ({ singleInstructor }) => {
  
    const {image, name, email, } = singleInstructor

  return (
    <div>
      <Fade>
      <div className="card w-96 bg-base-100 shadow-2xl h-[550px] group">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl w-full h-[350px] group-hover:scale-110 
            transition object-cover "
          />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title">Hey: I Am {name}.</h2>
          <p>
           My Email: {email}
          </p>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default SingleInstructor;
