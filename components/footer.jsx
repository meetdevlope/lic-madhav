import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-brand px-10 pt-8 pb-4 tab:px-20 ">
      <div className="flex flex-col tab:flex-row justify-between items-center">
        <div className="h-16">
          <img
            src="/images/madhav_lic_logo_white.png"
            alt="logo"
            className="h-full cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="text-white text-center flex flex-col tab:flex-row mt-8 gap-4 tab:my-0">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex gap-10 text-white text-xl my-8">
          <FaFacebookF className="hover:text-brand-dark cursor-pointer transition" />
          <FiInstagram className="hover:text-brand-dark cursor-pointer transition" />
          <FiTwitter className="hover:text-brand-dark cursor-pointer transition" />
        </div>
      </div>
      <span className="text-white mt-10 text-xs flex justify-center items-center">
        &#169; 2022 All Rights Reserved.Developed by{" "}
        <span className="font-semibold cursor-pointer text-center">
          DEMAZE TECHNOLOGIES
        </span>
      </span>
    </footer>
  );
};

export default Footer;
