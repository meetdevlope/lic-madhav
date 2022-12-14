import React from "react";
import CardComponent from "./cardComponent";
import { BiHome } from "react-icons/bi";

const ServicesSection = () => {
  const cardContent = [
    {
      cardTitle: "Category 1",
      icon: <BiHome size={"2rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Category 2",
      icon: <BiHome size={"2rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Category 3",
      icon: <BiHome size={"2rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      cardTitle: "Category 4",
      icon: <BiHome size={"2rem"} color="gray" />,
      cardDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <section className="bg-[#f6f6f6] flex flex-col justify-center items-center p-12 tab:p-20">
      <h3 className="mb-16 text-black tab:mb-30">Services</h3>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {cardContent.map((ele, idx) => {
          return (
            <CardComponent
              cardTitle={ele.cardTitle}
              icon={ele.icon}
              cardDescription={ele.cardDescription}
              key={idx}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
