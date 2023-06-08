import React, { useContext, useState } from "react";
import loginLogo from "../../assets/loginlogo.jpg";
import { BiHide, BiLogIn, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";
import {ImSpinner10} from "react-icons/im"
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [showPass, setShowPass] = useState(false);

  const {signIn, loading, setLoading, signInWithGoogle} = useContext(AuthContext);

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) =>{
    console.log(data);
    signIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from, {replace: true})
          setLoading(false)
    })
    .catch(error => {
        console.log(error.message);
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Ops Something Is wrong',
            showConfirmButton: false,
            timer: 1500
          })
        setLoading(false)
    })
  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
        console.log(result.user);
        //   Save user to database : Todo
        saveUser(result?.user)
        navigate(from, {replace: true})
    })
    .catch(error =>{
        console.log(error.message);
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Ops Something Is wrong',
            showConfirmButton: false,
            timer: 1500
          })
        setLoading(false)
    })
  }

  const togglePassShow = () => {
    setShowPass(!showPass);
  };

  return (
    <>
        <Helmet>
                <title>Music School | Sign Up</title>
            </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row mt-20">
          <div className="text-center lg:text-left">
            <img src={loginLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-3xl font-semibold text-center">
                Login Now !
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
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
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-orange-600 text-white hover:bg-orange-400">
                  { loading ? <ImSpinner10 size={28} className="m-auto animate-spin"></ImSpinner10> : <span className="flex">
                  <span className="text-2xl">
                    <BiLogIn></BiLogIn>
                  </span>
                  <span className="mt-[5px] ml-2">Login</span>
                  </span>}
                </button>
              </div>
              <p className="font-semibold">
                Don't Have An Account? 
                <Link to="/signUp">
                <span className="text-orange-600 ml-2">
                    Sign Up 
                </span>
                </Link>
              </p>
            </form>
            <div className="divider">OR Login With</div>
            <div onClick={handleGoogleSignIn} className="flex flex-row justify-center items-center mb-8 mt-2">
                <span className='btn bg-white border-none hover:bg-white'><FcGoogle size={36}></FcGoogle></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
