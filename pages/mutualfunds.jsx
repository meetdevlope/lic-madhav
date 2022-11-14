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
  const [selcted, setselcted] = useState({});

  // console.log(selcted);

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: allMututalFunds,
      });

      // console.log(response.error);
      // console.log(response.errors);

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.mutualFunds?.data,
      }));
      setselcted(response?.data?.mutualFunds?.data[0]);
      // getFilteredList();
      // console.log(response?.data?.mutualFunds?.data, "data here");
    } catch (error) {
      console.log("something went wrong", error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: [] }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getFilteredList = (slug) => {
    if (slug === undefined || slug == null) {
      setselcted(data[0]);
    } else {
      setselcted(data.find((e) => e.attributes.Slug === slug));
    }
  };

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

  return (
    <div>
      <h3 className="text-center mt-10">Mutual Funds</h3>

      <div className="flex justify-center mb-4 gap-8">
        {data?.map((item, i) => (
          <button
            className={`hover:underline underline-offset-8 decoration-brand transition-all mt-20 mb-10 ${
              selcted?.attributes?.Slug === item?.attributes?.Slug
                ? "underline"
                : null
            }`}
            onClick={() => {
              getFilteredList(item?.attributes?.Slug);
            }}
            key={i}
          >
            {item?.attributes?.title}
          </button>
        ))}
      </div>
      <div className="markdown">
        <ReactMarkDown className="text-lg px-10 tab:px-20 mb-10">
          {selcted?.attributes?.details}
        </ReactMarkDown>
      </div>
    </div>
  );
};

export default MutualFunds;
