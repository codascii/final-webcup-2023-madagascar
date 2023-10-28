import Banner from "@/components/aboutFive/Banner";
import AboutAIFive from "@/components/common/AboutAIFive";
import Brither from "@/components/common/Brither";
import Feature from "@/components/common/Feature";
import PlanFour from "@/components/common/PlanFour";
import Porfessional from "@/components/common/Porfessional";
import TestimonialFour from "@/components/common/TestimonialFour";
import FooterThree from "@/components/footer/FooterThree";
import NavBar from "@/components/navBar/NavBar";

export default function AboutFive() {
  return (
    <>
      {/*NavBar section */}
      <NavBar />

      {/*Banner section */}
      <Banner />

      {/*AboutAIFive section */}
      <AboutAIFive />

      {/*TestimonialFour section */}
      <TestimonialFour />

      {/*Feature section */}
      <Feature />

      {/*Porfessional section */}
      <Porfessional clss="bgsection" />

      {/*PlanFour section */}
      <PlanFour />

      {/*Brither section */}
      <Brither />

      {/*FooterThree section */}
      <FooterThree clss="footer__section__five" />
    </>
  );
}

AboutFive.getLayout = function getLayout(page) {
  return <>{page}</>;
};
