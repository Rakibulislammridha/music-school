import React from "react";
import footerLogo from "../../../assets/musicSchoolLogo.jpg"
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <Link to="/">
          <img className="w-[50px] rounded-md mr-2 h-[40px]" src={footerLogo} alt="" />
          </Link>
          <p>
            Music School Patuakhali, Bangladesh Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div>
        <span className="footer-title">Find Us On</span>
        <div className="font-semibold flex flex-col gap-4">
        <Link to="/">Home</Link>
        <Link to="/">INSTRUCTORS</Link>
        <Link to="/">Classes</Link>
        </div>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <span className="text-4xl cursor-pointer"><FaFacebook></FaFacebook></span>
            <span className="text-4xl cursor-pointer"><FaTwitter></FaTwitter></span>
            <span className="text-4xl cursor-pointer">
            <FaYoutube></FaYoutube>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 footer-center bg-neutral text-neutral-content">
          <div>
            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
