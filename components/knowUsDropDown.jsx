import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const KnowUsDropdown = () => {
  const [open, setopen] = useState(false);

  const router = useRouter();
  return (
    <ul className="">
      <li className="tab:[&>ul]:hover:block" onClick={() => setopen(!open)}>
        <a className=" flex items-center justify-center gap-2">
          Know&nbsp;Us{" "}
          <span>
            <AiFillCaretDown />
          </span>{" "}
        </a>

        <ul
          className={`tab:hidden shd absolute bg-white z-[60] text-gray [&>li]:p-1 [&>li]:px-2 pt-2 ${
            open ? "block" : "hidden"
          } `}
        >
          <li
            onClick={() => router.push("/about-us")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>About&nbsp;Us</a>
          </li>
          <li
            onClick={() => router.push("/awards")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>Awards</a>
          </li>
          <li
            onClick={() => router.push("/testimonials")}
            className="hover:text-brand-light cursor-pointer"
          >
            <a>Testimonials</a>
          </li>
          <li
            onClick={() => router.push("/photo-gallery")}
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
