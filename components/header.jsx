import Image from "next/image";
import React from "react";
import ButtonComponent from "./buttonComponent";

const Header = () => {
  return (
    <header className="flex justify-between items-start px-10 tab:px-20">
      <div className="h-16">
        <img
          src="/images/madhav_lic_logo.png"
          alt="logo"
          className="h-full cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2 tab:hidden">
        <div className="w-8 h-0.5 rounded-full bg-black"></div>
        <div className="w-8 h-0.5 rounded-full bg-black"></div>
        <div className="w-8 h-0.5 rounded-full bg-black"></div>
      </div>
      <div className="hidden tab:flex tab:justify-center tab:items-center tab:gap-8">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <ButtonComponent appearance={"pri-out"} buttonText={"Know More"} />
      </div>
    </header>
  );
};

export default Header;
