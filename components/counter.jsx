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
    <div className="w-full flex flex-wrap justify-center gap-16">
      {counterData.map((counter) => (
        <div className="text-center" key={counter.number}>
          <span className="text-4xl font-bold">{counter.number}+</span>
          <p>{counter.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
