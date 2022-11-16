import React, { useEffect, useState } from "react";
import CardLifeInsurance from "./cardLifeInsurance";
import { ClipLoader } from "react-spinners";
import client from "../functions/apolloClient";
import { allAutoInsurance } from "../functions/autoInsurance/all";
import { allHealthInsurance } from "../functions/healthInsurance/all";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const OtherInsuranceCard = ({ type }) => {
  const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;

  // console.log(type, "type");

  const [{ loading, error, data }, setData] = useState(InitData);
  let query;
  // (type === "auto-insurance" && query = allAutoInsurance)

  if (type === "auto-insurance") {
    query = allAutoInsurance;
  }
  if (type === "health-insurance") {
    query = allHealthInsurance;
  }

  // type === "health-insurance" && query =allHealthInsurance

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: query,
      });

      type === "auto-insurance" &&
        setData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data: response?.data?.autoInsurances?.data,
        }));

      type === "health-insurance" &&
        setData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data: response?.data?.healthInsurances?.data,
        }));

      // console.log(response?.data?.healthInsurances?.data, "data here");
      // console.log(response?.data?.autoInsurances?.data, "data here");
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
      {type === "auto-insurance" && (
        <h3 className="text-center mt-10">Auto Insurance</h3>
      )}
      {type === "health-insurance" && (
        <h3 className="text-center mt-10">Health Insurance</h3>
      )}
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {data?.map(
          (item, i) => (
            <CardLifeInsurance
              key={i}
              type={type}
              title={item?.attributes?.company_name}
              imgSrc={`${serverLink}${item?.attributes?.image?.data?.attributes?.url}`}
              // plans={item?.attributes?.lic_plans?.data}
              link={item?.attributes?.Slug}
            />
          )
          // console.log(item, "individual data")
        )}
      </div>
    </div>
  );
};

export default OtherInsuranceCard;
