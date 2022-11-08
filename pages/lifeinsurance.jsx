import React from "react";
import CardLifeInsurance from "../components/cardLifeInsurance";

const LifeInsurance = () => {
  return (
    <div>
      <div>
        <h3 className="text-center my-10">Product Information</h3>
        <h5 className="text-center">
          Get the latest information on all LIC&apos;s plans and all private
          insurance companies.
        </h5>
        <div className="flex justify-center gap-4 my-10 flex-wrap">
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
          <CardLifeInsurance
            title="Child Protection Plans"
            imgSrc="https://images.unsplash.com/photo-1667847941857-fa1b0d371445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
            plans="New Children’s Money Back Plan"
          />
        </div>
      </div>
    </div>
  );
};

export default LifeInsurance;
