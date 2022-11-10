import React, { useEffect, useState } from "react";
import CardLifeInsurance from "../../components/cardLifeInsurance";
import client from "../../functions/apolloClient";
import { allLICCategories } from "../../functions/lic/all";
import { ClipLoader } from "react-spinners";

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
              imgSrc={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
              plans={item?.attributes?.lic_plans?.data}
            />
          ))}
          {/* <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
