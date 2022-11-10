import React, { useEffect, useState } from "react";
import CardLifeInsurance from "./cardLifeInsurance";
import { ClipLoader } from "react-spinners";
import client from "../functions/apolloClient";
import { allAutoInsurance } from "../functions/autoInsurance/all";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const OtherInsuranceCard = ({ type }) => {
  console.log(type === "health-insurance", "id");

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: allAutoInsurance,
      });

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.autoInsurances?.data,
      }));

      console.log(response?.data?.autoInsurances?.data, "data here");
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
      <div className="flex justify-center gap-4 my-10 flex-wrap">
        {data?.map(
          (item, i) => (
            <CardLifeInsurance
              key={i}
              title={item?.attributes?.company_name}
              imgSrc={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
              // plans={item?.attributes?.lic_plans?.data}
            />
          )
          // console.log(item, "individual data")
        )}
      </div>
    </div>
  );
};

export default OtherInsuranceCard;
