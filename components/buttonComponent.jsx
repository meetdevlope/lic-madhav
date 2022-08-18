import React from "react";
import cn from "classnames";

function ButtonComponent({ buttonText, appearance, buttonClass, ...props }) {
  return (
    <button
      {...props}
      className={cn("px-4 py-2 rounded-md", {
        "bg-brand hover:bg-brand-light text-white transition-all":
          appearance === "pri",
        "border-brand border text-brand hover:bg-brand-light hover:border-brand-light hover:text-white transition-all ":
          appearance === "pri-out",
        "bg-gray text-white cursor-not-allowed": appearance === "disabled",
        [buttonClass]: !!buttonClass,
      })}
    >
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
