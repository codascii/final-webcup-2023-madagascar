import AboutAITwo from "@/components/common/AboutAITwo";
import EfectiveTwo from "@/components/common/EfectiveTwo";
import PlanFour from "@/components/common/PlanFour";
import Project from "@/components/common/Project";
import TestimonialTwo from "@/components/common/TestimonialTwo";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/homeTwo/Banner";
import Faq from "@/components/homeTwo/Faq";
import Includeai from "@/components/homeTwo/Includeai";
import Newsletter from "@/components/homeTwo/Newsletter";
import RealWorld from "@/components/homeTwo/RealWorld";
import NavBar from "@/components/navBar/NavBar";

export default function HomeTwo() {
  return (
    <>
      {/* NavBar section */}
      <NavBar />

      {/* Banner section */}
      <Banner />

      {/* About AI Two section */}
      <AboutAITwo />

      {/* Includeai section */}
      <Includeai />

      {/* Project section */}
      <Project clss="bg__white" />

      {/* RealWorld section */}
      <RealWorld />

      {/* PlanFour section */}
      <PlanFour />

      {/* EfectiveTwo section */}
      <EfectiveTwo />

      {/* TestimonialTwo section */}
      <TestimonialTwo />

      {/* Faq section */}
      <Faq />

      {/* Newsletter section */}
      <Newsletter />

      {/* Footer section */}
      <Footer />
    </>
  );
}

HomeTwo.getLayout = function getLayout(page) {
  return <>{page}</>;
};
