import React, { useEffect, useState } from "react";
// import Counter from "react-number-increment";

const counterData = [
  {
    number: 10000,
    title: "Policies claimed",
  },
  {
    number: 4000,
    title: "Satisfied clients",
  },
  {
    number: 21,
    title: "Branches",
  },
];

const Counter = ({ number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    for (let count = 0; count <= number; count++) {
      setTimeout(() => {
        setCount(count);
      }, 1000);
    }
  }, []);
  return <h3>{count}+</h3>;
};

export default Counter;
