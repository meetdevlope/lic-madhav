import Image from "next/image";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bi";

const CardLifeInsurance = ({ title, imgSrc, plans }) => {
  return (
    <div className="p-4 m-4 bg-gray/20 rounded-md w-full lg:w-1/5 md:w-1/4 sm:w-1/3">
      <div className="img-wrapper h-[200px] overflow-hidden rounded-lg ">
        <img src={imgSrc} className="max-w-full" />
      </div>
      <div className="px-4">
        <h4 className="mt-4 mb-2">{title}</h4>
        <p>{plans}</p>
      </div>
    </div>
  );
};

export default CardLifeInsurance;
