import Image from "next/image";
import Link from "next/link";
import box_element from "/public/img/elements/box-element.png";
import logo from "/public/img/logo/logo.png";
import facebook from "/public/img/svg-icon/facebook.svg";
import instagram from "/public/img/svg-icon/instagram.svg";
import linkedin from "/public/img/svg-icon/linkedin.svg";
import twitter from "/public/img/svg-icon/twitter.svg";

const FooterFour = () => {
  return (
    <footer className="footer__section footer__section__four">
      {/* container */}
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="row g-5">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <Link href="/" className="footer__logo">
                      <Image src={logo} alt="logo" className="img-fluid" />
                    </Link>
                  </div>
                  <p className="pb__20">
                    Artificial Intelligence (AI) and Machine Learning (ML) are
                    closely related technologies that enable computers to learn
                    from data and make predictions
                  </p>
                  <ul className="social">
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
                          <Image
                            src={instagram}
                            alt="svg"
                            className="img-fluid"
                          />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemthree">
                        <span className="icon">
                          <Image
                            src={twitter}
                            alt="svg"
                            className="img-fluid"
                          />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemfour">
                        <span className="icon">
                          <Image
                            src={linkedin}
                            alt="svg"
                            className="img-fluid"
                          />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/about" className="link">
                      About us
                    </Link>
                    <Link href="/studies-one" className="link">
                      Projects
                    </Link>
                    <Link href="/faq" className="link">
                      Faqs
                    </Link>
                    <Link href="/blocks-working" className="link">
                      How it&#39;s Works
                    </Link>
                    <Link href="/pricing" className="link">
                      Pricing Plan
                    </Link>
                    <Link href="/shop" className="link">
                      Shop
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <h4>Services</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/blocks-working" className="link">
                      Robotic Automation
                    </Link>
                    <Link href="/shop" className="link">
                      Predictive Analytic
                    </Link>
                    <Link href="/signup" className="link">
                      Deep Learning
                    </Link>
                    <Link href="/signup" className="link">
                      Statistic
                    </Link>
                    <Link href="/signup" className="link">
                      Data Mining
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <h4>Contact</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/" className="footer__contact__items">
                      <span className="icon">
                        <i className="material-symbols-outlined">add_call</i>
                      </span>
                      <span className="fcontact__content">(406) 555-0120</span>
                    </Link>
                    <Link href="/" className="footer__contact__items">
                      <span className="icon icontwo">
                        <i className="material-symbols-outlined">
                          mark_as_unread
                        </i>
                      </span>
                      <span className="fcontact__content">
                        example@example.com
                      </span>
                    </Link>
                    <Link href="/" className="footer__contact__items">
                      <span className="icon iconthree">
                        <span className="material-symbols-outlined">
                          pin_drop
                        </span>
                      </span>
                      <span className="fcontact__content">
                        Westheimer Rd. Santa Ana, Illinois
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom footer__bottom__two">
            <p>
              Copyright &copy;2023{" "}
              <Link href="/" className="intellicon">
                Intellicon
              </Link>
              . Designed By{" "}
              <Link
                href="https://themeforest.net/user/pixelaxis"
                className="theme"
              >
                Pixelaxis
              </Link>
            </p>
            <ul className="footer__bottom__link">
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/support">Privacy policy</Link>
              </li>
              <li>
                <Link href="/support">Terms of condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* container */}
      {/* footer mask */}
      <div className="footer__mask">
        <Image src={box_element} alt="mask" className="img-fluid" />
      </div>
      {/* footer mask */}
    </footer>
  );
};

export default FooterFour;
