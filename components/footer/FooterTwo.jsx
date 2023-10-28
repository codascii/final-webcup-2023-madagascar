import Image from "next/image";
import Link from "next/link";
import box_element from "/public/img/elements/box-element.png";
import logo from "/public/img/logo/logo.png";
import facebook from "/public/img/svg-icon/facebook.svg";
import instagram from "/public/img/svg-icon/instagram.svg";
import linkedin from "/public/img/svg-icon/linkedin.svg";
import twitter from "/public/img/svg-icon/twitter.svg";

const FooterTwo = () => {
  return (
    <footer className="footer__section footer__three">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top__three">
            <Link href="/" className="f_logo">
              <Image src={logo} alt="logo" className="img-fluid" />
            </Link>
            <ul className="f__three__link">
              <li>
                <Link href="/about">À propos de nous</Link>
              </li>
              <li>
                <Link href="/faq">Faqs</Link>
              </li>
              <li>
                <Link href="/services">Liens Utile</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="/shop">Map</Link>
              </li>
            </ul>
            <ul className="social">
              <li>
                <Link href="/" className="social__item">
                  <span className="icon">
                    <Image src={facebook} alt="svg" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/" className="^q">
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
          <div className="footer__bottom">
            <p>
              Copyright &copy;2023{" "}
              <Link href="/" className="intellicon">
              Altesphere AI
              </Link>
              .Conçus par{" "}
              <Link
                href="https://themeforest.net/user/pixelaxis"
                className="theme"
              >
                HoumaDev RAIV
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* footer mask */}
      <div className="footer__mask">
        <Image src={box_element} alt="mask" />
      </div>
      {/* footer mask */}
    </footer>
  );
};

export default FooterTwo;
