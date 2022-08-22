import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ButtonComponent from "./buttonComponent";

const Header = () => {

  const [hamOpen, sethamOpen] = useState(false)

  const openHamburger = () => {
    sethamOpen((prev) => (!prev))
  }

  const router = useRouter();

  return (
    <header className="flex justify-between items-start px-10 tab:px-20">
      <div className="h-16">
        <img
          src="/images/madhav_lic_logo.png"
          alt="logo"
          className="h-full cursor-pointer"
        />
      </div>
      <div className={`ham-btn right-10 ${hamOpen ? 'active fixed' : 'not-active absolute'} tab:hidden z-20`} onClick={openHamburger} >
        <span className='hml hml-1' ></span>
        <span className='hml hml-2' ></span>
        <span className='hml hml-3' ></span>
      </div>


      <div className="hidden tab:flex tab:justify-center tab:items-center tab:gap-8">
        <a onClick={() => router.push('/')}>Home</a>
        <a>Services</a>
        <a onClick={() => router.push('/insurance')}>Insurance</a>
        <a>Contact Us</a>
        <ButtonComponent appearance={"pri-out"} buttonText={"Know More"} />
      </div>
      <div className={`black-backdrop bg-black opacity-80 fixed top-0 left-0 h-screen w-screen transition-all z-[5] ${hamOpen ? 'block' : 'hidden'}`}></div>
      <div className={`flex flex-col items-end gap-6 bg-white pt-40 px-20 fixed top-0 right-0 h-screen z-10 tab:hidden transition-all ${hamOpen ? 'translate-x-0' : 'translate-x-full'} `}>
        <a>Home</a>
        <a href="/pages/insurance.jsx">Services</a>
        <a>Insurance</a>
        <a>Contact Us</a>
        <ButtonComponent appearance={"pri-out"} buttonText={"Know More"} />
      </div>
    </header>
  );
};

export default Header;
