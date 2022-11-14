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
        <ul className="child z-50 pt-4">
          <li>
            <a onClick={() => router.push("/lifeinsurance")}>Insurance</a>
          </li>
          <li>
            <a onClick={() => router.push("/mutualfunds")}>Mutual&nbsp;Funds</a>
          </li>
          <li>
            <a onClick={() => router.push("/clia")}>CLIA</a>
          </li>
          <li className="parent !rounded-t-none z-[50]">
            <a className="flex justify-center items-center gap-2">
              General&nbsp;Insurance
              <span>
                <AiFillCaretDown />
              </span>
            </a>
            <ul className="child [&>li>a]:px-2 pl-1 !rounded-lg overflow-hidden">
              <li>
                <a
                  href="/otherinsurance/auto-insurance"
                  // onClick={() => router.push("/otherinsurance/auto-insurance")}
                >
                  Auto&nbsp;Insurance
                </a>
              </li>
              <li>
                <a
                  href="/otherinsurance/health-insurance"
                  onClick={() =>
                    router.push("/otherinsurance/health-insurance")
                  }
                >
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
