import Image from "next/image";
import SignupForm from "./SignupForm";
import signin from "/public/img/signin/signin.png";

const SignupMain = () => {
  return (
    <section className="sigin__page signin_pt bg__white">
      <div className="container">
        <div className="signin__wrapper">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="signin__content__left">
                <div className="signin__head">
                  <h3>Lets&#39;s Get Started!</h3>
                  <p>Please enter your email address to join us</p>
                </div>
                {/* Signup Form */}
                <SignupForm />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="signin__thumb">
                <Image src={signin} alt="signin" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupMain;
