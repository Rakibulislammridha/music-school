import React, { useContext, useState } from "react";
import loginLogo from "../../assets/loginlogo.jpg";
import { BiHide, BiLogIn, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const {signIn} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
  };

  const togglePassShow = () => {
    setShowPass(!showPass);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row mt-20">
          <div className="text-center lg:text-left">
            <img src={loginLogo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  placeholder="email"
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
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-orange-600 text-white hover:bg-orange-400">
                  <span className="text-2xl">
                    <BiLogIn></BiLogIn>
                  </span>
                  Login
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
            <div className="flex flex-row justify-center items-center mb-8 mt-2">
                <span className='btn bg-white border-none hover:bg-white'><FcGoogle size={36}></FcGoogle></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
