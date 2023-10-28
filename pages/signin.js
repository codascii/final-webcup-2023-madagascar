import NavBar from "@/components/navBar/NavBar";
import SigninMain from "@/components/signin/SigninMain";

export default function Signin() {
  return (
    <>
      {/*NavBar Section */}
      <NavBar clss="signin__header" />

      {/*SigninMain Section */}
      <SigninMain />
    </>
  );
}

Signin.getLayout = function getLayout(page) {
  return <>{page}</>;
};
