import Artificial from "@/components/common/Artificial";
import PlanThree from "@/components/common/PlanThree";
import QualifiedTwo from "@/components/common/QualifiedTwo";
import TestimonialFour from "@/components/common/TestimonialFour";
import FooterTwo from "@/components/footer/FooterTwo";
import Banner from "@/components/homeThree/Banner";
import Capabilities from "@/components/homeThree/Capabilities";
import EfectiveThree from "@/components/homeThree/EfectiveThree";
import Includeai from "@/components/homeThree/Includeai";
import Newsletter from "@/components/homeThree/Newsletter";
import NavBar from "@/components/navBar/NavBar";

export default function HomeThree() {
  return (
    <>
      {/* NavBar section */}
      <NavBar />

      {/* Banner section */}
      <Banner />

      {/* Artificial section */}
      <Artificial />

      {/* Includeai section */}
      <Includeai />

      {/* QualifiedTwo section */}
      <QualifiedTwo />

      {/* Capabilities section */}
      <Capabilities />

      {/* PlanThree section */}
      <PlanThree />

      {/* EfectiveThree section */}
      <EfectiveThree />

      {/* TestimonialFour section */}
      <TestimonialFour />

      {/* Newsletter section */}
      <Newsletter />

      {/* Footer section */}
      <FooterTwo />
    </>
  );
}

HomeThree.getLayout = function getLayout(page) {
  return <>{page}</>;
};
