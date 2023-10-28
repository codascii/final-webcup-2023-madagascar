import Image from "next/image";
import Link from "next/link";
import error from "/public/img/signin/error.png";

export default function Error() {
  return (
    <section className="sigin__page error__page bg__white">
      <div className="container">
        <div className="signin__wrapper">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="error__wrapper">
                <div className="thumb">
                  <Image src={error} alt="img" className="img-fluid" />
                </div>
                <div className="error__contnet">
                  <h2>Oops! Page Not Found</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/" className="cmn--btn">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Error.getLayout = function getLayout(page) {
  return <>{page}</>;
};
