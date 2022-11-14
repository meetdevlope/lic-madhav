import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = () => {
  return (
    <ul id="menu" className="z-50">
      <li className="parent">
        <a
          href="#"
          className="hover:text-brand-light flex items-center justify-center gap-2"
        >
          Our&nbsp;Services
          <span>
            <AiFillCaretDown />
          </span>
        </a>
        <ul className="child z-50 pt-4">
          <li>
            <a href="/lifeinsurance">Insurance</a>
          </li>
          <li>
            <a href="/mutualfunds">Mutual&nbsp;Funds</a>
          </li>
          <li>
            <a href="#">CLIA</a>
          </li>
          <li className="parent !rounded-t-none z-[50]">
            <a href="#" className="flex justify-center items-center gap-2">
              General&nbsp;Insurance
              <span>
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="child [&>li>a]:px-2 pl-1 !rounded-lg overflow-hidden">
              <li>
                <a href="/otherinsurance/auto-insurance">Auto&nbsp;Insurance</a>
              </li>
              <li>
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
