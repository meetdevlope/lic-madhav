import React, { useEffect, useState } from "react";
import Image from "next/image";
import Counter from "./counter";
import CounterComponent from "./counterComponent";
import { getExperienceData } from "../functions/experienceSection";
import client from "../functions/apolloClient";

const ExperienceSection = () => {
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
        query: getExperienceData,
      });

      // console.log(
      //   response?.data?.experienceSections?.data[0]?.attributes,
      //   "hero section response"
      // );

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.experienceSections?.data[0]?.attributes,
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
    <div>
      <section className="py-16">
        <div className="container flex justify-center flex-wrap gap-20 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center tab:items-start">
            <h3>
              <span className="text-brand tab:text-5xl">
                {data?.totalExperience}+
              </span>{" "}
              {data?.experienceText}
            </h3>{" "}
            <p className="mt-14 mb-12 leading-6">
              {data?.experienceDescription}
            </p>
            <div>
              <CounterComponent data={data?.experience_counters?.data} />
            </div>
          </div>
          <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden">
            <Image
              priority
              src={data?.image?.data?.attributes?.url}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"top"}
              alt="subject-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
