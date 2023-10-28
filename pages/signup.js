import NavBar from "@/components/navBar/NavBar";
import SignupMain from "@/components/signup/SignupMain";

export default function Signup() {
  return (
    <>
      {/*NavBar Section */}
      <NavBar clss="signin__header" />

      {/*SignupMain Section */}
      <SignupMain />
    </>
  );
}

Signup.getLayout = function getLayout(page) {
  return <>{page}</>;
};
