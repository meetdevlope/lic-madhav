import Image from "next/image";
import React from "react";

const Header = () => {
  return <header className="flex justify-between items-center " >
    <div className="h-16" >
    <img src="/images/madhav_lic_logo.png" alt="logo" className="h-full" />
    </div>
    <div className="flex justify-center items-center gap-5" >
      <a href="#" >Home</a>
      <a href="#" >Services</a>
      <a href="#" >About Us</a>
      <a href="#" >Contact Us</a>
    </div>
  </header>;
};

export default Header;
