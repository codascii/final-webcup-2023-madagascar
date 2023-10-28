import Banner from "@/components/about/Banner";
import AboutAIOne from "@/components/common/AboutAIOne";
import Brither from "@/components/common/Brither";
import Efective from "@/components/common/Efective";
import Plan from "@/components/common/Plan";
import Qualified from "@/components/common/Qualified";
import Testimonial from "@/components/common/Testimonial";
// import FooterThree from "@/components/footer/FooterThree";
import Footer from "@/components/footer/Footer";

import NavBar from "@/components/navBar/NavBar";

export default function About() {
  return (
    <>
      {/*NavBar section */}
      <NavBar />

      {/*Banner section */}
      <Banner />

      {/*AboutAIOne section */}
      <AboutAIOne />

      {/*Plan section */}
      <Plan />

      {/*Efective section */}
      <Efective />

      {/*Testimonial section */}
      <Testimonial />

      {/*Qualified section */}
      <Qualified />

      {/*Brither section */}
      <Brither />

      {/* Footer section */}
      <Footer />
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <>{page}</>;
};
