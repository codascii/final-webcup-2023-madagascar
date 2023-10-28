import Subscribe from "@/components/common/Subscribe";
import FooterFour from "@/components/footer/FooterFour";
import NavBar from "@/components/navBar/NavBar";
import PaymentSuccessfullMain from "@/components/paymentSuccessfull/PaymentSuccessfullMain";

export default function PaymentSuccessfull() {
  return (
    <>
      {/* section */}
      <NavBar clss="signin__header" />

      {/* section */}
      <PaymentSuccessfullMain />

      {/* section */}
      <Subscribe />

      {/* section */}
      <FooterFour />
    </>
  );
}

PaymentSuccessfull.getLayout = function getLayout(page) {
  return <>{page}</>;
};
