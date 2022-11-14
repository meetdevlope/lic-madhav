import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const KnowUsDropdown = () => {
  const router = useRouter();
  return (
    <ul className="bg-white">
      <li className="[&>ul]:hover:block">
        <a className=" flex items-center justify-center gap-2">
          Know&nbsp;Us{" "}
          <span>
            <AiFillCaretDown />
          </span>{" "}
        </a>

        <ul className="hidden shd absolute text-gray [&>li]:p-1 [&>li]:px-2 pt-2">
          <li
            onClick={() => router.push("#")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>About&nbsp;Us</a>
          </li>
          <li
            onClick={() => router.push("#")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>Awards</a>
          </li>
          <li
            onClick={() => router.push("#")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>Testimonials</a>
          </li>
          <li
            onClick={() => router.push("#")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>Photo&nbsp;Gallery</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default KnowUsDropdown;
