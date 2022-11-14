import React, { useEffect, useState } from "react";
import InsuranceDetailsComp from "../components/insuranceDetailsComp";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";
import client from "../functions/apolloClient";
import { allClia } from "../functions/clia";
import ButtonComponent from "../components/buttonComponent";

const Clia = () => {
  const InitData = {
    loading: "",
    error: "",
    data: [],
  };
  const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;

  const router = useRouter();
  // console.log(router?.query?.id, "router");
  // const id = router?.?.id;

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    // console.log(loading);
    try {
      const response = await client().query({
        query: allClia,
      });
      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.clias?.data[0]?.attributes,
      }));
      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      //   console.log(response?.data?.clias?.data[0]?.attributes, "data here");
    } catch (error) {
      console.log(error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: {} }));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(router?.query?.id, "router");

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

  return (
    <InsuranceDetailsComp
      coverImage={`${serverLink}${data?.cover_image?.data?.attributes?.url}`}
      title={data?.title}
      description={data?.description}
      mainImage={`${serverLink}${data?.image?.data?.attributes?.url}`}
      action={() => (
        <div className="flex items-center flex-col md:flex-row justify-center gap-4 my-4">
          <ButtonComponent
            appearance={"pri-out"}
            buttonText={`Go Home`}
            onClick={() => router.push("/")}
          />
        </div>
      )}
    />
  );
};

export default Clia;
