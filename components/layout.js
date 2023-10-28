import Subscribe from "./common/Subscribe";
//import FooterFour from "./footer/FooterFour";
import Footer from "@/components/footer/Footer";
import NavBar from "./navBar/NavBar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar */}
      <NavBar />

      {/* main */}
      {children}

      {/* Subscribe 
      <Subscribe />*/}

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;
