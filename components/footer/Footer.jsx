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
                  AlteSphere est un algorithme révolutionnaire basé sur l'intelligence artificielle. Elle utilise une combinaison de données provenant de sismomètres, satellites, ballons météorologiques et d'autres capteurs stratégiquement placés autour du globe.
                   </p>

                  {/* Socila */}
                  <Socila />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <h4>liens rapides</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/about" className="link">
                    À propos de nous
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
                    <h4>liens utils</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="https://renass.unistra.fr/fr/zones/" className="link">
                    Renass
                    </Link>
                    <Link href="https://meteofrance.com/" className="link">
                    MeteoFrance
                    </Link>
                    <Link href="https://www.cycloneoi.com/archives-blog/le-coin-expert/l-ecmwf-a-l-heure-de-l-intelligence-artificielle-et-du-machine-learning.html" className="link">
                    CEPMMT
                    </Link>
                    <Link href="https://www.accuweather.com/fr/mg/antananarivo/227088/weather-forecast/227088" className="link">
                    AccuWeather
                    </Link>
                    <Link href="/signuhttps://www.wunderground.com/" className="link">
                    Weather Underground 
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <div className="widget__head">
                    <h4>Contactez nous</h4>
                  </div>
                  <div className="widget__link">
                    <Link href="/" className="footer__contact__items">
                      <span className="icon">
                        <i className="material-symbols-outlined">AU</i>
                      </span>
                      <span className="fcontact__content">(+262) 23 25 26</span>
                    </Link>
                    <Link href="/" className="footer__contact__items">
                      <span className="icon icontwo">
                        <i className="material-symbols-outlined">
                         M
                        </i>
                      </span>
                      <span className="fcontact__content">
                        HoumaDevRaiv@mail.com
                      </span>
                    </Link>
                    <Link href="/" className="footer__contact__items">
                      <span className="icon iconthree">
                        <span className="material-symbols-outlined">
                          pin_drop
                        </span>
                      </span>
                      <span className="fcontact__content">
                      47 Rue des Marguerites,
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
      <div className="footer__mask">
        <Image src={box_element} alt="mask" className="img-fluid" />
      </div>
    </footer>
  );
};

export default Footer;
