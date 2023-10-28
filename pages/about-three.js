import Banner from "@/components/aboutThree/Banner";
import Artificial from "@/components/common/Artificial";
import PricingInformation from "@/components/common/PricingInformation";
import Project from "@/components/common/Project";
import TestimonialThree from "@/components/common/TestimonialThree";
import Work from "@/components/common/Work";

export default function AboutThree() {
  return (
    <>
      {/*Banner section */}
      <Banner />

      {/*Artificial section */}
      <Artificial />

      {/*TestimonialThree section */}
      <TestimonialThree />

      {/*PricingInformation section */}
      <PricingInformation />

      {/*Project section */}
      <Project clss="bgsection" />

      {/*Work section */}
      <Work />
    </>
  );
}
