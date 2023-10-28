import AboutAIOne from "@/components/common/AboutAIOne";
import Efective from "@/components/common/Efective";
import Plan from "@/components/common/Plan";
import Qualified from "@/components/common/Qualified";
import Testimonial from "@/components/common/Testimonial";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/home/Banner";
import Capabilities from "@/components/home/Capabilities";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/home/Newsletter";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
    <>
      {/* NavBar section */}
      <NavBar />

      {/* Banner section */}
      <Banner />

      {/* About AI One section */}
      <AboutAIOne />

      {/* Feature section 
      <Feature /> */}

      {/* Qualified section 
      <Qualified />*/}

      {/* Capabilities section 
      <Capabilities />*/}

      {/* Plan section 
      <Plan />*/}

      {/* Efective section 
      <Efective /> */}

      {/* Testimonial section */}
      <Testimonial />

      {/* Newsletter section */}
      <Newsletter />

      {/* Footer section */}
      <Footer />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
