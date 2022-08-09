import React from "react";
import cn from "classnames";

function ButtonComponent({ buttonText, appearance, ...props }) {
  return (
    <button
      {...props}
      className={cn("px-4 py-2 rounded-md", {
        "bg-pink hover:bg-pink-light text-white transition-all":
          appearance === "pri",
        "border-pink border text-pink hover:bg-pink-light hover:text-white transition-all ":
          appearance === "pri-out",
        "bg-gray text-white cursor-not-allowed": appearance === "disabled",
      })}
    >
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
