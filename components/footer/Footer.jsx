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
                  {"AlteSphere est un algorithme révolutionnaire basé sur l'intelligence artificielle. Elle utilise une combinaison de données provenant de sismomètres, satellites, ballons météorologiques et d'autres capteurs stratégiquement placés autour du globe."}
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
                  <Link href="/" className="link">
                    Accueil
                    </Link>
                    <Link href="/maps" className="link">
                      Voir les prédictions
                    </Link>
                    <Link href="/natural-desastre" className="link">
                    Catastrophes naturelles
                    </Link>
                    <Link href="/about-altesphere-ai" className="link">
                    À propos de nous
                    </Link>
                    <Link href="/" className="link">
                    </Link>
                    <Link href="/contact" className="link">
                      contact
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
                    <Link href="https://renass.unistra.fr/fr/zones/" target="_blank" className="link">
                    Renass
                    </Link>
                    <Link href="https://meteofrance.com/" target="_blank" className="link">
                    MeteoFrance
                    </Link>
                    <Link href="https://www.cycloneoi.com/archives-blog/le-coin-expert/l-ecmwf-a-l-heure-de-l-intelligence-artificielle-et-du-machine-learning.html" target="_blank" className="link">
                    CEPMMT
                    </Link>
                    <Link href="https://www.accuweather.com/fr/mg/antananarivo/227088/weather-forecast/227088" target="_blank" className="link">
                    AccuWeather
                    </Link>
                    <Link href="https://www.wunderground.com/" target="_blank" className="link">
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
                    <Link href="tel:0269123456" className="footer__contact__items">
                      <span className="icon">
                        <i className="material-symbols-outlined">T</i>
                      </span>
                      <span className="fcontact__content">0269123456</span>
                    </Link>
                    <Link href="mailto:contact@altesphere.com" target="_blank" className="footer__contact__items">
                      <span className="icon icontwo">
                        <i className="material-symbols-outlined">
                         M
                        </i>
                      </span>
                      <span className="fcontact__content">
                        contact@alteSphere.com
                      </span>
                    </Link>
                    <Link href="javascript:void(0)" className="footer__contact__items">
                      <span className="icon iconthree">
                        <span className="material-symbols-outlined">
                          pin_drop
                        </span>
                      </span>
                      <span className="fcontact__content">
                      17 rue Kaweni 
                      97600 Mayotte
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
                   Developed by{" "}
              <Link
                href="https://houmadev.com"
target="_blank"
                className="theme"
              >
                Houmadev
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
