import Plan from "@/components/common/Plan";
import PlanFour from "@/components/common/PlanFour";
import PlanThree from "@/components/common/PlanThree";
import PlanTwo from "@/components/common/PlanTwo";
import PricingInformation from "@/components/common/PricingInformation";
import Banner from "@/components/pricing/Banner";

export default function Pricing() {
  return (
    <>
      {/*Banner section */}
      <Banner />

      {/*PlanTwo section */}
      <PlanTwo />

      {/*Plan section */}
      <Plan />

      {/*PlanFour section */}
      <PlanFour />

      {/*PlanThree section */}
      <PlanThree />

      {/*PricingInformation section */}
      <PricingInformation />
    </>
  );
}
