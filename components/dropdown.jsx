import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = () => {
  const router = useRouter();
  return (
    <ul id="menu" className="z-50">
      <li className="parent">
        <a className="hover:text-brand-light flex items-center justify-center gap-2">
          Our&nbsp;Services
          <span>
            <AiFillCaretDown />
          </span>
        </a>
        <ul className="child z-50 pt-2 [&>li>a]:px-1">
          <li
            onClick={() => router.push("/lifeinsurance")}
            className="[&>*]:hover:text-brand-light cursor-pointer"
          >
            <a>Insurance</a>
          </li>
          <li
            onClick={() => router.push("/mutualfunds")}
            className="[&>*]:hover:text-brand-light cursor-pointer"
          >
            <a>Mutual&nbsp;Funds</a>
          </li>
          <li
            onClick={() => router.push("/clia")}
            className="[&>*]:hover:text-brand-light cursor-pointer"
          >
            <a>CLIA</a>
          </li>
          <li className="parent !rounded-t-none z-[50]">
            <a className="flex justify-center items-center gap-2">
              General&nbsp;Insurance
              <span>
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="child [&>li>a]:px-2 pl-1 !rounded-lg overflow-hidden">
              <li className="cursor-pointer [&>*]:hover:text-brand-light">
                <a
                  href="/otherinsurance/auto-insurance"
                  // onClick={() => router.push("/otherinsurance/auto-insurance")}
                >
                  Auto&nbsp;Insurance
                </a>
              </li>
              <li
                className="cursor-pointer [&>*]:hover:text-brand-light"
                onClick={() => router.push("/otherinsurance/health-insurance")}
              >
                <a href="/otherinsurance/health-insurance">
                  Health&nbsp;Insurance
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
