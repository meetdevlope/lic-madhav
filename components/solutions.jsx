import React, { useState } from "react";
import ButtonComponent from "./buttonComponent";
import { MdOutlineSearch } from "react-icons/md";
import SearchBar from "./searchBar";
import FormComponent from "./formComponent";

const Solutions = ({ onCategoryClick }) => {
  const check = (e) => {
    console.log(e.target.value, "jijijij");
  };

  const formFields = [
    {
      placeholder: "Content Type",
      inputType: "selectOption",
      inputName: "contentType",
      options: [
        {
          text: "Article",
          value: "article",
        },
        {
          text: "Co-branded Video",
          value: "coBrandedVideo",
        },
        {
          text: "Fact Sheet",
          value: "factSheet",
        },
        {
          text: "Infographics",
          value: "infographics",
        },
        {
          text: "Leaflet",
          value: "leaflet",
        },
      ],
    },
  ];

  const initialValues = {
    contentType: "",
  };

  return (
    <section className="flex flex-col justify-center items-center p-12 max-w-7xl mx-auto tab:p-20">
      <h3 className="mb-2 text-black tab:mb-30">View our solutions below</h3>
      <p className="tab:w-[520px] text-center">
        Whether its for your wealth, your family&#39;s future, or even your
        retirement, we have just the right plans to help you achieve your goals!
      </p>

      <div className="flex flex-col tab:flex-row items-center mt-12 gap-8 w-full">
        <FormComponent formFields={formFields} initialValues={initialValues} />
        <div className="flex-1 w-full">
          <SearchBar
            placeholder={"Search by content title"}
            action={
              <ButtonComponent
                appearance={"pri"}
                buttonText={<MdOutlineSearch fontSize={"18"} />}
                type={"submit"}
                buttonClass={
                  " rounded-none rounded-r-md bg-black hover:bg-black hover:text-gray"
                }
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
