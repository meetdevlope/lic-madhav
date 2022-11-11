import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = () => {
  const ref = useRef();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
        setOpen2(false);
        // openHam;
      }
    };
    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [open]);

  return (
    <div className="ref" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`relative flex gap-2 justify-center items-center text-black hover:text-brand-light`}
      >
        Insurance
        <AiFillCaretDown
          className={` transition-all ${open ? "rotate-180" : null}`}
        />
      </button>
      <div
        className={`absolute mt-4 p-3 rounded-md shadow-lg border bg-white z-10 ${
          open ? "block" : "hidden"
        }`}
      >
        <a
          href="/lifeinsurance"
          className="text-base font-semibold text-black hover:text-brand-light"
        >
          Life Insurance
        </a>
        <div>
          <button
            onClick={() => setOpen2(!open2)}
            className="flex mt-2 gap-2 justify-center items-center text-base text-black hover:text-brand-light"
          >
            Other Insurance{" "}
            <AiFillCaretDown
              className={` transition-all ${open2 ? "rotate-180" : null}`}
            />
          </button>
          <div
            className={`absolute flex flex-col tab:left-full mt-4 p-3 rounded-md shadow-lg border bg-white z-10 ${
              open2 ? "block" : "hidden"
            }`}
          >
            <a
              href="/otherinsurance/auto-insurance"
              className="text-base font-medium text-black hover:text-brand-light"
            >
              Auto&nbsp;Insurance
            </a>
            <a
              href="/otherinsurance/health-insurance"
              className="text-base font-medium text-black hover:text-brand-light"
            >
              Health&nbsp;Insurance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
