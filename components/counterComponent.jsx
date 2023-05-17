import React from "react";
import Counter from "./counter";

const CounterComponent = ({ data }) => {
  console.log(data, "data");

  return (
    <div className="w-full flex flex-1 flex-wrap tab:flex-nowrap justify-center gap-8 tab:gap-16">
      {data?.map((item, i) => (
        <div key={i}>
          <Counter number={item.attributes.experienceYear} />
          <p>{item.attributes.experienceText}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterComponent;
