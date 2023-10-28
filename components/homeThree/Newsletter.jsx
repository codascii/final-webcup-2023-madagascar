import Image from "next/image";
import Link from "next/link";
import facebook from "/public/img/calltoaction/facebook.svg";
import instagram from "/public/img/calltoaction/instagram.svg";
import linkedin from "/public/img/calltoaction/linkedin.svg";
import twitter from "/public/img/calltoaction/twitter.svg";
import newsletter3 from "/public/img/testimonial/newsletter3.png";

const Newsletter = () => {
  return (
    <section className="newsletter__section newsletter__section__three bg__white">
      {/* container */}
      <div className="container">
        {/* newsletter wrapper */}
        <div className="newsletter__wrapper pt-120 pb-120">
          <div className="row justify-content-around align-items-center">
            {/* col grid */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="newsletter__content wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="section__header">
                  <h2>
                    Subscribe to the newsletter and receive notifications.
                  </h2>
                  <p>
                    Sign up for updates and stay informed about the latest
                    developments and be a part of our community and get the
                    latest news and insights
                  </p>
                </div>
                <form action="/">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="cmn--btn" type="submit">
                    <span>Subscribe</span>
                  </button>
                </form>
                <div className="social__part">
                  <div className="follow__btn">
                    <Link href="/">
                      <span>Follow us</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">
                          trending_flat
                        </i>
                      </span>
                    </Link>
                  </div>
                  <ul className="social__standard">
                    <li>
                      <Link href="/" className="social__item">
                        <span className="icon">
                          <Image src={facebook} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemtwo">
                        <span className="icon">
                          <Image src={instagram} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemthree">
                        <span className="icon">
                          <Image src={twitter} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemfour">
                        <span className="icon">
                          <Image src={linkedin} alt="svg" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xl-4 col-lg-6 col-md-9">
              <div className="newsletter__three__thumb">
                <Image src={newsletter3} alt="thumb" className="img-fluid" />
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* newsletter wrapper */}
      </div>
      {/* container */}
    </section>
  );
};

export default Newsletter;
