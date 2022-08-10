import React from "react";

const counterData = [
  {
    number: "10,000",
    title: "Policies claimed",
  },
  {
    number: "4,000",
    title: "Satisfied clients",
  },
  {
    number: "21",
    title: "Branches",
  },
];

const Counter = () => {
  return (
    <div className="w-full flex flex-1 flex-wrap tab:flex-nowrap justify-center gap-8 tab:gap-16">
      {counterData.map((counter) => (
        <div className="text-center" key={counter.number}>
          <span className="text-4xl font-bold">{counter.number + "+"} </span>
          <p>{counter.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
