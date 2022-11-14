import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./buttonComponent";

const InsuranceDetailsComp = ({
  coverImage,
  title,
  description,
  mainImage,
  documentImage,
  action,
}) => {
  const router = useRouter();

  return (
    <div className="w-auto max-w-7xl mx-4 xl:mx-auto">
      {coverImage && (
        <div className="h-[30vh] my-10 relative overflow-hidden flex items-center justify-center">
          <img src={coverImage} alt="plan_cover_image" />
        </div>
      )}
      <h3>{title}</h3>
      <div className="flex items-center flex-col lg:flex-row">
        <p className="flex-1">{description}</p>
        {mainImage && (
          <div className="flex-1 p-10">
            <img className="w-full" src={mainImage} alt="" />
          </div>
        )}
      </div>

      {documentImage && (
        <div className="flex justify-center my-2 lg:my-8">
          <div className="w-[70vw] lg:w-[50vw] max-w-3xl">
            <img className="w-full" src={documentImage} alt="" />
          </div>
        </div>
      )}
      {action && action()}
    </div>
  );
};

export default InsuranceDetailsComp;
