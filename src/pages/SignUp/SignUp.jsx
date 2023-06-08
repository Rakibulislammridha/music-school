import React, { useState } from 'react';
import registerLogo from "../../assets/registerLogo.jpg"
import { BiHide, BiShow } from 'react-icons/bi';
import {CiUnlock} from "react-icons/ci"
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPass, setShowPass] = useState(false);

    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const onSubmit = data => {
        console.log(data)
    };

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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Your Photo Url</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  {...register("photo", { required: true })}
                  placeholder="Enter Your Photo Url"
                  className="input input-bordered"
                />
                {errors.photo && <span className='text-red-600'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    {...register("password", { 
                        required: true ,
                        minLength: 6,
                        maxLength: 15,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    }
                    )}
                    placeholder="***********"
                    className="input input-bordered w-full"
                  />
                  {errors.password?.type === "required" && <span className='text-red-600'>Password is required </span>}
                  {errors.password?.type === "minLength" && <span className='text-red-600'>Enter At least 6 characters</span>}
                  {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximum 15 characters</span>}
                  {errors.password?.type === "pattern" && <span className='text-red-600'>Enter a uppercase and a special character</span>}
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
                    {...register("password", { 
                        required: true ,
                        minLength: 6,
                        maxLength: 15,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    }
                    )}
                    placeholder="***********"
                    className="input input-bordered w-full"
                  />
                  {errors.password?.type === "required" && <span className='text-red-600'>Password is required </span>}
                  {errors.password?.type === "minLength" && <span className='text-red-600'>Enter At least 6 characters</span>}
                  {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximum 15 characters</span>}
                  {errors.password?.type === "pattern" && <span className='text-red-600'>Enter a uppercase and a special character</span>}
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