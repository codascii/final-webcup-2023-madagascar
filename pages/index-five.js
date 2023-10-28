import AboutAIFive from "@/components/common/AboutAIFive";
import Brither from "@/components/common/Brither";
import Porfessional from "@/components/common/Porfessional";
import PricingInformation from "@/components/common/PricingInformation";
import TestimonialThree from "@/components/common/TestimonialThree";
import Work from "@/components/common/Work";
import FooterThree from "@/components/footer/FooterThree";
import Banner from "@/components/homeFive/Banner";
import Highlight from "@/components/homeFive/Highlight";
import Qualified from "@/components/homeFive/Qualified";
import NavBar from "@/components/navBar/NavBar";

export default function HomeFive() {
  return (
    <>
      {/* NavBar section */}
      <NavBar />

      {/* Banner section */}
      <Banner />

      {/* AboutAIFive section */}
      <AboutAIFive />

      {/* Highlight section */}
      <Highlight />

      {/* Porfessional section */}
      <Porfessional clss="bg__white" />

      {/* Qualified section */}
      <Qualified />

      {/* PricingInformation section */}
      <PricingInformation />

      {/* TestimonialThree section */}
      <TestimonialThree />

      {/* Work section */}
      <Work />

      {/* Brither section */}
      <Brither />

      {/* Footer section */}
      <FooterThree clss="footer__section__five" />
    </>
  );
}

HomeFive.getLayout = function getLayout(page) {
  return <>{page}</>;
};
