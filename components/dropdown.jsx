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
        <p className="text-base font-medium text-black hover:text-brand-light">
          Life Insurance
        </p>
        <div>
          <button
            onClick={() => setOpen2(!open2)}
            className="flex mt-2 gap-2 justify-center items-center text-base font-medium text-black hover:text-brand-light"
          >
            Other Insurance{" "}
            <AiFillCaretDown
              className={` transition-all ${open2 ? "rotate-180" : null}`}
            />
          </button>
          <div
            className={`absolute right-0 mt-4 p-3 rounded-md shadow-lg border bg-white z-10 ${
              open2 ? "block" : "hidden"
            }`}
          >
            <p className="text-base font-medium text-black hover:text-brand-light">
              Insurance&nbsp;Life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
