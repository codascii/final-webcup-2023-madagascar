import Image from "next/image";
import SigninForm from "./SigninForm";
import signin from "/public/img/signin/signin.png";

const SigninMain = () => {
  return (
    <section className="sigin__page signin_pt bg__white">
      <div className="container">
        <div className="signin__wrapper">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="signin__content__left">
                <div className="signin__head">
                  <h3>Welcome Back!</h3>
                  <p>Sign in to your account and join us</p>
                </div>
                {/* Signin Form */}
                <SigninForm />
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

export default SigninMain;
