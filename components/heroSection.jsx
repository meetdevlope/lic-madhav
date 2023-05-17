import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../functions/apolloClient";
import { getHeroData } from "../functions/heroSection";
import ButtonComponent from "./buttonComponent";

const HeroSection = () => {
  const router = useRouter();

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
        query: getHeroData,
      });

      // console.log(
      //   response?.data?.heroSections.data[0].attributes,
      //   "hero section response"
      // );

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.heroSections.data[0].attributes,
      }));
      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      // console.log(response, "data here");
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
    <section className="py-10">
      <div className="container flex justify-center flex-wrap gap-20 py-4 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center tab:items-start items-center">
          <h1>{data.title}</h1>
          <p className="mt-8 mb-12">{data.subTitle}</p>
          <div className="flex gap-8">
            {data?.buttons?.data.map((item, i) => (
              <ButtonComponent
                appearance={item.attributes.buttonType}
                buttonText={item.attributes.buttonText}
                onClick={() => router.push(item.attributes.buttonLink)}
              />
            ))}
          </div>
        </div>
        <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden z-0">
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
  );
};

export default HeroSection;
