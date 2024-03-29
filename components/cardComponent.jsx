import Image from "next/image";
import React from "react";
import ButtonComponent from "./buttonComponent";

const CardComponent = ({ icon, cardTitle, cardDescription }) => {
  return (
    <div className="cursor-pointer hover:shadow-xl hover:bg-white w-96 rounded-lg">
      <div className="p-8 flex flex-col items-center">
        <div className="relative aspect-h-image h-[10vh] overflow-hidden">
          <Image
            priority
            src={icon}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"top"}
            alt="subject-image"
          />
        </div>
        <h4 className="text-black text-2xl font-bold m-4">{cardTitle}</h4>
        <p className="text-center mb-8">{cardDescription}</p>
        {/* <ButtonComponent
          appearance={"pri"}
          buttonText={"Book Now"}
          buttonClass="w-full"
        /> */}
      </div>
    </div>
  );
};

export default CardComponent;
