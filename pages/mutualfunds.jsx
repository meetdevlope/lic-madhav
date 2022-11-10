import React, { useEffect, useMemo, useState } from "react";

const MutualFunds = () => {
  const buttonData = [
    {
      title: "1",
    },
    {
      title: "2",
    },
    {
      title: "3",
    },
    {
      title: "4",
    },
    {
      title: "5",
    },
  ];

  const allCategories = [
    {
      title: "One",
      category: "1",
    },
    {
      title: "Two",
      category: "2",
    },
    {
      title: "Three",
      category: "3",
    },
    {
      title: "Four",
      category: "4",
    },
    {
      title: "Five",
      category: "5",
    },
  ];

  const [category, setcategory] = useState([]);
  const [selcted, setselcted] = useState();

  console.log(selcted);

  useEffect(() => {
    setcategory(allCategories);
  }, []);

  const getFilteredList = () => {
    if (!selcted) {
      setselcted("1");
    }
    return category.filter((item) => item.category === selcted);
  };

  const filteredList = useMemo(getFilteredList, [selcted, category]);

  return (
    <div>
      <div className="flex justify-center mb-4 gap-4">
        {buttonData.map((item, i) => (
          <button
            className={`p-4 hover:bg-brand/50 ${
              selcted === item.title ? "bg-[red]" : " bg-brand"
            }`}
            onClick={() => setselcted(item.title)}
            key={i}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div>
        {filteredList.map((item, i) => (
          <p className="text-center text-lg" key={i}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MutualFunds;
