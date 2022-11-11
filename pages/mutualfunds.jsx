import React, { useEffect, useMemo, useState } from "react";
import { ClipLoader } from "react-spinners";
import client from "../functions/apolloClient";
import { allMututalFunds } from "../functions/mutualFunds/all";
import ReactMarkDown from "react-markdown";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

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

  // console.log(selcted);

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: allMututalFunds,
      });

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.mutualFunds?.data,
      }));

      console.log(response?.data?.mutualFunds?.data, "data here");
    } catch (error) {
      console.log("something went wrong", error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: [] }));
    }
  };

  useEffect(() => {
    getData();
    setcategory(allCategories);
  }, []);

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

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

    // <div className="max-w-7xl fonb-[#000]">
    //   <h4>{data?.title}</h4>
    //   <ReactMarkDown>{data?.details}</ReactMarkDown>
    // </div>
  );
};

export default MutualFunds;
