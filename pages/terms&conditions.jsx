import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import client from "../functions/apolloClient";
import { terms } from "../functions/terms";
import MarkdownLayout from "../layouts/markdown";
import markdownToHtml from "../layouts/markHtml";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const Terms_and_Conditions = () => {
  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));

    let termsData = {};
    // console.log(loading);
    try {
      const { data: hero } = await client().query({
        query: terms,
      });
      termsData = {
        ...hero?.terms?.data[0],
        attributes: {
          ...hero?.terms?.data[0].attributes,
          Text: await markdownToHtml(hero?.terms?.data[0].attributes.Text),
        },
      };

      //   console.log(hero, "policy");
      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: termsData?.attributes?.Text,
      }));

      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      //   console.log(policyData?.attributes?.Text, "data here");
    } catch (error) {
      console.log(error);
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
    <section className="py-16 max-w-7xl mx-auto">
      {data && <MarkdownLayout content={data} />}
    </section>
  );
};

export default Terms_and_Conditions;
