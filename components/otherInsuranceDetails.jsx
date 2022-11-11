import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import client from "../functions/apolloClient";
import { filterAutoInsurance } from "../functions/autoInsurance/filterInsurance";
import { filterHealthInsurance } from "../functions/healthInsurance/filterInsurance";
import ButtonComponent from "./buttonComponent";

const InitData = {
  loading: false,
  error: false,
  data: {},
};

const OtherInsuranceDetails = () => {
  const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;

  const router = useRouter();
  const slug = router?.query?.id;
  //   console.log(slug[1], "slug");
  let query;
  if (slug[0] === "auto-insurance") {
    query = filterAutoInsurance(slug.length > 1 && slug[1]);
  }

  if (slug[0] === "health-insurance") {
    query = filterHealthInsurance(slug.length > 1 && slug[1]);
  }

  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    // console.log(loading);
    try {
      const response = await client().query({
        query: query,
      });

      slug[0] === "auto-insurance" &&
        setData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data: response?.data?.autoInsurances?.data[0]?.attributes,
        }));

      slug[0] === "health-insurance" &&
        setData((prev) => ({
          ...prev,
          loading: false,
          error: false,
          data: response?.data?.healthInsurances?.data[0]?.attributes,
        }));
      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      console.log(
        response?.data?.autoInsurances?.data[0]?.attributes,
        "data here"
      );
      console.log(
        response?.data?.healthInsurances?.data[0]?.attributes,
        "data here"
      );
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
    <div className="w-auto max-w-7xl mx-4 xl:mx-auto">
      {data?.cover_image?.data && (
        <div className="h-[30vh] my-10 overflow-hidden flex justify-center items-center">
          <img
            src={`${serverLink}${data?.cover_image?.data?.attributes?.url}`}
            alt=""
          />
        </div>
      )}
      <h3>{data?.company_name}</h3>
      <div className="flex items-center flex-col lg:flex-row">
        <p className="flex-1">{data?.description}</p>
        {data?.image?.data && (
          <div className="flex-1 p-10">
            <img
              className="w-full"
              src={`${serverLink}${data?.image?.data?.attributes?.url}`}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="flex items-center flex-col md:flex-row justify-center gap-4 my-4">
        {slug[0] === "auto-insurance" && (
          <ButtonComponent
            appearance={"pri-out"}
            buttonText={`Go Back`}
            onClick={() => router.push(`/otherinsurance/auto-insurance`)}
          />
        )}

        {slug[0] === "health-insurance" && (
          <ButtonComponent
            appearance={"pri-out"}
            buttonText={`Go Back`}
            onClick={() => router.push(`/otherinsurance/health-insurance`)}
          />
        )}

        {data?.brochure?.data && (
          <a href={`#`} target="_blank" rel="noreferrer">
            <ButtonComponent
              appearance={"pri"}
              buttonText={`Download Brochure`}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default OtherInsuranceDetails;

// filterInsurance
