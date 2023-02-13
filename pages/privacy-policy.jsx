import React, { useEffect, useState } from "react";
import client from "../functions/apolloClient";
import { policy } from "../functions/policy";
import MarkdownLayout from "../layouts/markdown";
import markdownToHtml from "../layouts/markHtml";
import ApolloProvider from "../functions/apolloClient";
import { ClipLoader } from "react-spinners";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const Privacy_Policy = () => {
  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));

    let policyData = {};
    // console.log(loading);
    try {
      const { data: hero } = await client().query({
        query: policy,
      });
      policyData = {
        ...hero?.policies?.data[0],
        attributes: {
          ...hero?.policies?.data[0].attributes,
          Text: await markdownToHtml(hero?.policies?.data[0].attributes.Text),
        },
      };

      //   console.log(policyData, "policy");
      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: policyData?.attributes?.Text,
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
    <section className="py-16 max-w-7xl mx-auto [&>div>p]:text-black [&>div>p]:text-lg [&>div>p>strong]:text-lg">
      {data && <MarkdownLayout content={data} />}
    </section>
  );
};

export default Privacy_Policy;
