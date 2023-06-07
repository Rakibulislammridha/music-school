import React, { useState } from 'react';
import registerLogo from "../../assets/registerLogo.jpg"
import { BiHide, BiShow } from 'react-icons/bi';
import {CiUnlock} from "react-icons/ci"
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {

    const [showPass, setShowPass] = useState(false);

    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const handleSignUp = (event) =>{
        event.preventDefault();
    }

    const togglePassShow = () => {
        setShowPass(!showPass);
      };

      const toggleConfirmPass = () =>{
        setShowConfirmPass(!showConfirmPass);
      }

    return (
        <div>
            <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row mt-20">
          <div className="text-center lg:text-left">
            <img src={registerLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h3 className="text-3xl font-semibold text-center">
                SignUp Now !
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="***********"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={togglePassShow}
                    className="btn btn-sm bg-white border-none absolute left-[268px] top-[9px]"
                  >
                    {showPass ? (
                      <BiHide size={24}></BiHide>
                    ) : (
                      <BiShow size={24}></BiShow>
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPass ? "text" : "password"}
                    name="password"
                    placeholder="***********"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={toggleConfirmPass}
                    className="btn btn-sm bg-white border-none absolute left-[268px] top-[9px]"
                  >
                    {showConfirmPass ? (
                      <BiHide size={24}></BiHide>
                    ) : (
                      <BiShow size={24}></BiShow>
                    )}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-orange-600 text-white hover:bg-orange-400">
                  <span className="text-2xl">
                    <CiUnlock></CiUnlock>
                  </span>
                  Sign Up
                </button>
              </div>
              <p className="font-semibold">
                Already Have An Account? 
                <Link to="/login">
                <span className="text-orange-600 ml-2">
                    LogIn
                </span>
                </Link>
              </p>
            </form>
            <div className="divider mt-0">OR Login/SignUp With</div>
            <div className="flex flex-row justify-center items-center mb-8 mt-2">
                <span className='btn bg-white border-none hover:bg-white'><FcGoogle size={36}></FcGoogle></span>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;