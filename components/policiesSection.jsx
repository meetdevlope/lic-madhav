import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";
import { BiHome } from "react-icons/bi";
import { bestPolicy } from "../functions/bestPolicySection";
import client from "../functions/apolloClient";

const PoliciesSection = () => {
  const cardContent = [
    {
      cardTitle: "Policy 1",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
    {
      cardTitle: "Policy 2",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
    {
      cardTitle: "Policy 3",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
    {
      cardTitle: "Policy 4",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
    {
      cardTitle: "Policy 5",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
    {
      cardTitle: "Policy 6",
      icon: <BiHome color="gray" size={"5rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. ",
    },
  ];

  const InitData = {
    loading: false,
    error: false,
    data: {},
  };

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    // console.log(loading);
    try {
      const response = await client().query({
        query: bestPolicy,
      });

      console.log(
        response?.data?.bestPolicies?.data,
        "hero best policy response"
      );

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.bestPolicies?.data,
      }));
    } catch (error) {
      console.log(error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: {} }));
    }
  };

  console.log(data, "policy data");

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="bg-[#f6f6f6] flex flex-col justify-center items-center p-12 tab:p-20">
      <h3 className="mb-16 text-black tab:mb-30">Best Policies</h3>

      <div className="flex justify-center items-center flex-wrap gap-8 max-w-7xl">
        {data.length > 0 &&
          data.map((ele, idx) => {
            return (
              <CardComponent
                cardTitle={ele?.attributes?.title}
                icon={ele?.attributes?.icon?.data?.attributes?.url}
                cardDescription={ele?.attributes?.description}
                key={idx}
              />
            );
          })}
      </div>
    </section>
  );
};

export default PoliciesSection;
