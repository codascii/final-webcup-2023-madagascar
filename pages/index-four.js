import AboutAIThree from "@/components/common/AboutAIThree";
import Feature from "@/components/common/Feature";
import PlanTwo from "@/components/common/PlanTwo";
import Subscribe from "@/components/common/Subscribe";
import Support from "@/components/common/Support";
import FooterThree from "@/components/footer/FooterThree";
import Banner from "@/components/homeFour/Banner";
import CaseDifferent from "@/components/homeFour/CaseDifferent";
import Faqs from "@/components/homeFour/Faqs";
import Includeai from "@/components/homeFour/Includeai";
import NavBar from "@/components/navBar/NavBar";

export default function HomeFour() {
  return (
    <>
      {/* NavBar section */}
      <NavBar />

      {/*Banner section */}
      <Banner />

      {/*AboutAIThree section */}
      <AboutAIThree />

      {/*Includeai section */}
      <Includeai />

      {/*Feature section */}
      <Feature />

      {/*CaseDifferent section */}
      <CaseDifferent />

      {/*Support section */}
      <Support clss="bg__white" />

      {/*Faqs section */}
      <Faqs />

      {/*PlanTwo section */}
      <PlanTwo />

      {/*Subscribe section */}
      <Subscribe />

      {/* Footer section */}
      <FooterThree />
    </>
  );
}

HomeFour.getLayout = function getLayout(page) {
  return <>{page}</>;
};
