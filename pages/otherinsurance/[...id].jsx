import { useRouter } from "next/router";
import React from "react";
import OtherInsuranceCard from "../../components/otherInsuranceCard";
import OtherInsuranceDetails from "../../components/otherInsuranceDetails";

const IndividualPlan = () => {
  const router = useRouter();
  const id = router?.query?.id;
  // console.log(id.length > 1, "id");
  return (
    <div>
      {id &&
        id.length === 1 &&
        (id[0] === "auto-insurance" || id[0] === "health-insurance") && (
          <OtherInsuranceCard type={id && id[0]} />
        )}
      {id && id.length === 2 && <OtherInsuranceDetails />}
    </div>
  );
};

export default IndividualPlan;
