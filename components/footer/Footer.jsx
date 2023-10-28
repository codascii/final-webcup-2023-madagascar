import Image from "next/image";
import Link from "next/link";
import Socila from "../socila/Socila";
import box_element from "/public/img/elements/box-element.png";
import footer_shape from "/public/img/elements/footer-shape.png";
import footer_shapedark from "/public/img/elements/footer-shapedark.png";
import logo from "/public/img/logo/logo.png";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__shape">
        <Image src={footer_shape} alt="img" className="img-fluid" />
      </div>
      <div className="footer__darkshpae">
        <Image src={footer_shapedark} alt="img" className="img-fluid" />
      </div>
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

                  {/* Socila */}
                  <Socila />
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
          <div className="footer__bottom">
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
          </div>
        </div>
      </div>
      <div className="footer__mask">
        <Image src={box_element} alt="mask" className="img-fluid" />
      </div>
    </footer>
  );
};

export default Footer;
