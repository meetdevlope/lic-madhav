import React from "react";
import CardComponent from "./cardComponent";
import { BiHome } from "react-icons/bi";

const PoliciesSection = () => {
  const cardContent = [
    {
      cardTitle: "Policy 1",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 2",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 3",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 4",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 5",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 6",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 7",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Policy 8",
      icon: <BiHome size={"2rem"} />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="bg-pink flex flex-col justify-center items-center p-12 tab:p-20">
      <h2 className="mb-16 text-3xl text-white tab:mb-30">Best Policies</h2>

      <div className="flex justify-center items-center flex-wrap gap-8 max-w-7xl">
        {cardContent.map((ele, idx) => {
          return (
            <>
              <CardComponent
                cardTitle={ele.cardTitle}
                icon={ele.icon}
                cardDescription={ele.cardDescription}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default PoliciesSection;
