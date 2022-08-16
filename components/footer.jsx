import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink px-10 pt-8 pb-4 tab:px-40 flex flex-col tab:flex-row justify-between">
      <div className="flex flex-col justify-between">
        <div className="h-16">
          <img
            src="/images/madhav_lic_logo_white.png"
            alt="logo"
            className="h-full cursor-pointer"
          />
        </div>
        <div className="flex gap-10 text-white text-xl mt-4">
          <span>
            <FaFacebookF className="hover:text-pink-dark cursor-pointer transition" />
          </span>
          <span>
            <FiInstagram className="hover:text-pink-dark cursor-pointer transition" />
          </span>
          <span>
            <FiTwitter className="hover:text-pink-dark cursor-pointer transition" />
          </span>
        </div>
      </div>

      <div className="flex flex-col ml-2 justify-between">
        <div className="text-white flex flex-col tab:flex-row my-8 tab:my-0 gap-4">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        <span className="text-white text-xs">
          &#169; 2022 All Rights Reserved.Developed by{" "}
          <span className="font-semibold cursor-pointer">
            DEMAZE TECHNOLOGIES
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
