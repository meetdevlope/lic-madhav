import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../functions/apolloClient";
import { singlePlan } from "../../functions/lic/singlePlan";
import { ClipLoader } from "react-spinners";
import ButtonComponent from "../../components/buttonComponent";
import InsuranceDetailsComp from "../../components/insuranceDetailsComp";

const InitData = {
  loading: false,
  error: false,
  data: {},
};

const IndividualPage = ({ id }) => {
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
      // console.log(response?.data?.licPlan?.data?.attributes, "data here");
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
      coverImage={data?.cover_image?.data?.attributes?.url}
      title={data?.name}
      description={data?.description}
      mainImage={data?.image?.data?.attributes?.url}
      documentImage={data?.document?.data?.attributes?.url}
      action={() => (
        <div className="flex items-center flex-col md:flex-row justify-center gap-4 my-4">
          <ButtonComponent
            appearance={"pri_out"}
            buttonText={`Go Back`}
            onClick={() => router.push("/lifeinsurance")}
          />

          {data?.brochure?.data && (
            <a
              href={data?.brochure?.data?.attributes?.url}
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
      )}
    />
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
