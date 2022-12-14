import React, { useEffect, useState } from "react";
import CardLifeInsurance from "../../components/cardLifeInsurance";
import client from "../../functions/apolloClient";
import { allLICCategories } from "../../functions/lic/all";
import { ClipLoader } from "react-spinners";
import PhotoGallery from "../../components/photoGallery";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const Index = () => {
  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: allLICCategories,
      });
      // setInsuranceData(response?.data?.licCategories?.data);

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.licCategories?.data,
      }));

      // console.log(response?.data?.licCategories?.data, "data here");
    } catch (error) {
      console.log("something went wrong", error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: [] }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

  return (
    <div>
      <div>
        <h3 className="text-center my-10">Product Information</h3>
        <h5 className="text-center">
          Get the latest information on all LIC&apos;s plans and all private
          insurance companies.
        </h5>
        <div className="flex justify-center gap-4 my-10 flex-wrap">
          {data?.map((item, i) => (
            <CardLifeInsurance
              key={i}
              title={item?.attributes?.name}
              imgSrc={item?.attributes?.image?.data?.attributes?.url}
              plans={item?.attributes?.lic_plans?.data}
            />
          ))}
        </div>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default Index;
