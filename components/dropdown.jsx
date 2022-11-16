import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = () => {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);

  const router = useRouter();
  return (
    <ul id="menu" className="z-50">
      <li className="parent">
        <a
          className="hover:text-brand-light flex items-center justify-center gap-2"
          onClick={() => setopen1(!open1)}
        >
          Our&nbsp;Services
          <span>
            <AiFillCaretDown />
          </span>
        </a>
        <ul
          className={`child z-[60] bg-white text-gray shd pt-2 [&>li>a]:px-1 absolute ${
            open1 ? "block" : "hidden"
          } `}
        >
          <li
            onClick={() => {
              router.push("/lifeinsurance");
            }}
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
          <li
            className="parent !rounded-t-none z-[50]"
            onClick={() => setopen2(!open2)}
          >
            <a className="flex justify-center items-center gap-2">
              General&nbsp;Insurance
              <span>
                <AiFillCaretDown />
              </span>
            </a>
            <ul
              className={`child [&>li>a]:px-2 pl-1 shd tab:pt-0 pt-4 z-[70] !rounded-lg overflow-hidden absolute ${
                open2 ? "block" : "hidden"
              } `}
            >
              <li className="cursor-pointer [&>*]:hover:text-brand-light">
                <Link
                  href="/otherinsurance/auto-insurance"
                  // onClick={() => router.push("/otherinsurance/auto-insurance")}
                >
                  Auto&nbsp;Insurance
                </Link>
              </li>
              <li className="cursor-pointer [&>*]:hover:text-brand-light">
                <Link href="/otherinsurance/health-insurance">
                  Health&nbsp;Insurance
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Dropdown;
