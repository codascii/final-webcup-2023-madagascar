import Banner from "@/components/aboutFour/Banner";
import AboutAIThree from "@/components/common/AboutAIThree";
import PlanThree from "@/components/common/PlanThree";
import PlanTwo from "@/components/common/PlanTwo";
import Support from "@/components/common/Support";
import EfectiveThree from "@/components/homeThree/EfectiveThree";

export default function AboutFour() {
  return (
    <>
      {/*Banner section */}
      <Banner />

      {/*AboutAIThree section */}
      <AboutAIThree />

      {/*Support section */}
      <Support clss="bgsection" />

      {/*EfectiveThree section */}
      <EfectiveThree />

      {/*PlanThree section */}
      <PlanThree />

      {/*PlanTwo section */}
      <PlanTwo />
    </>
  );
}
