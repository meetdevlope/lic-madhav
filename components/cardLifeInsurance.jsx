import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const CardLifeInsurance = ({ title, imgSrc, plans, link, type }) => {
  // console.log(type, "check type");
  // console.log(plans.length === 0, "plans");
  return (
    <div className="p-4 m-4 bg-gray/20 rounded-md w-full lg:w-1/5 md:w-1/4 sm:w-1/3">
      <div className="img-wrapper overflow-hidden rounded-lg ">
        <img
          src={imgSrc}
          className="h-[20vh] w-full object-center object-cover"
        />
      </div>
      <div className="px-4">
        <h4 className="mt-4 text-lg mb-2 text-left capitalize">{title}</h4>

        {plans && plans?.length === 0 ? (
          <h5 className="mt-4 mb-1 font-bold">
            No insurance plans available for this category.
          </h5>
        ) : (
          plans && <h5 className="mt-4 mb-1 font-bold">Plans:</h5>
        )}
        <div className="flex flex-col font-semibold gap-1">
          {plans &&
            plans.map((link, i) => (
              <Link key={i} href={`/lifeinsurance/${link?.id}`}>
                <span className="capitalize text-brand-light hover:text-brand-dark flex items-center cursor-pointer gap-1 w-fit transition-all">
                  <FaLongArrowAltRight />
                  {link?.attributes?.name}
                </span>
              </Link>
            ))}
        </div>

        {link && type === "auto-insurance" && (
          // <h5>Hello</h5>
          <a href={`/otherinsurance/auto-insurance/${link}`}>View Details</a>
        )}
        {link && type === "health-insurance" && (
          // <h5>Hi</h5>
          <a href={`/otherinsurance/health-insurance/${link}`}>View Details</a>
        )}
        {/* <p>{plans}</p> */}
      </div>
    </div>
  );
};

export default CardLifeInsurance;
