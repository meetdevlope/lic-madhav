import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../functions/apolloClient";
import { singlePlan } from "../../functions/lic/singlePlan";
import { ClipLoader } from "react-spinners";
import ButtonComponent from "../../components/buttonComponent";

const InitData = {
  loading: false,
  error: false,
  data: {},
};

const IndividualPage = ({ id }) => {
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
        query: singlePlan(id),
      });
      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.licPlan?.data?.attributes,
      }));
      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      console.log(response?.data?.licPlan?.data?.attributes, "data here");
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
        <div className="h-[30vh] my-10 relative overflow-hidden flex items-center">
          <img
            src={`${serverLink}${data?.cover_image?.data?.attributes?.url}`}
            alt="plan_cover_image"
          />
        </div>
      )}
      <h3>{data?.name}</h3>
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

      {data?.document?.data && (
        <div className="flex justify-center my-2 lg:my-8">
          <div className="w-[70vw] lg:w-[50vw] max-w-3xl">
            <img
              className="w-full"
              src={`${serverLink}${data?.document?.data?.attributes?.url}`}
              alt=""
            />
          </div>
        </div>
      )}

      <div className="flex items-center flex-col md:flex-row justify-center gap-4 my-4">
        <ButtonComponent
          appearance={"pri-out"}
          buttonText={`Go Back`}
          onClick={() => router.push("/lifeinsurance")}
        />

        {data?.brochure?.data && (
          <a
            href={`${serverLink}${data?.brochure?.data?.attributes?.url}`}
            target="_blank"
            rel="noreferrer"
          >
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

export default IndividualPage;

export const getServerSideProps = async (req) => {
  // console.log(req.params, "params");
  return {
    props: {
      id: req.params.id,
    },
  };
};
