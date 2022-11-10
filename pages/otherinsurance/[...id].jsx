import { useRouter } from "next/router";
import React from "react";
import OtherInsuranceCard from "../../components/otherInsuranceCard";

const IndividualPlan = () => {
  const router = useRouter();
  const id = router?.query?.id;
  // console.log(id && id[0]);
  return (
    <div>
      {id && id[0] === "auto-insurance" && (
        <OtherInsuranceCard type={id && id[0]} />
      )}
    </div>
  );
};

export default IndividualPlan;
