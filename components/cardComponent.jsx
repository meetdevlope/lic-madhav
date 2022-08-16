import React from "react";
import ButtonComponent from "./buttonComponent";

const CardComponent = ({ icon, cardTitle, cardDescription }) => {
  return (
    <div className="bg-white w-72 rounded-lg">
      <div className="p-8 flex flex-col items-center">
        {icon}
        <h3 className="text-pink m-4">{cardTitle}</h3>
        <p className="text-center mb-8">{cardDescription}</p>
        <ButtonComponent
          appearance={"pri"}
          buttonText={"Book Now"}
          buttonClass="w-full"
        />
      </div>
    </div>
  );
};

export default CardComponent;
