import React, { useEffect, useState } from "react";
import CardComponent from "./cardComponent";
import { BiHome } from "react-icons/bi";
import { serviceSection } from "../functions/serviceSection";
import client from "../functions/apolloClient";

const ServicesSection = () => {
  const cardContent = [
    {
      cardTitle: "Category 1",
      icon: <BiHome size={"5rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Category 2",
      icon: <BiHome size={"5rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Category 3",
      icon: <BiHome size={"5rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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
        query: serviceSection,
      });

      // console.log(response?.data?.services?.data, "hero service response");

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.services?.data,
      }));
    } catch (error) {
      console.log(error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: {} }));
    }
  };

  // console.log(data, "hero data");

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="bg-[#f6f6f6] flex flex-col justify-center items-center p-12 tab:p-20">
      <h3 className="mb-16 text-black tab:mb-30">Services</h3>
      <div className="flex justify-center items-center flex-wrap gap-8">
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

export default ServicesSection;
