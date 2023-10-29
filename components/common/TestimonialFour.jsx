import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import caserobot from "/public/img/bog-capabilities/caserobot.png";
import efect_cross from "/public/img/elements/efect-cross.png";
import blabla from "/public/img/elements/3dots-elements.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";
import efecttablet1 from "/public/img/elements/efecttablet1.png";
import feature_ali from "/public/img/elements/feature-ali.png";
import light_elements from "/public/img/elements/light-elements.png";
import icons from "/public/img/testimonial/icons.png";
import j1 from "/public/img/testimonial/j1.png";
import j2 from "/public/img/testimonial/j2.png";
import j3 from "/public/img/testimonial/j3.png";
import j4 from "/public/img/testimonial/j4.png";
import j5 from "/public/img/testimonial/j5.png";
import j6 from "/public/img/testimonial/j6.png";
import jenny from "/public/img/testimonial/jenny.png";
import Ananya from "/public/img/testimonial/Ananya.png";
import rajan from "/public/img/testimonial/rajan.png";
import patel from "/public/img/testimonial/patel.png";
import joshi from "/public/img/testimonial/joshi.png";


// slick css
import "slick-carousel/slick/slick-theme.css";

const TestimonialFour = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // autoplay: true,
    focusOnSelect: true,
    slidesToShow: 1,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <section className="testimonial__section testimonial__three__section bgsection pt-120 pb-120">
      {/* contaienr */}
      <div className="container">
        <div className="row justify-content-between">
          {/* col grid */}
          <div className="col-xxl-5 col-xl-5 col-lg-6">
            <div className="testi__three__wrap">
              <Slider {...settings} ref={sliderRef}>
                <div className="tesiti__three__item">
                  <div className="tesiti__three__box">
                    <div className="ratting__inner">
                      <div className="ratting">
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                      </div>
                      <div className="quote">
                        <i className="material-symbols-outlined">
                          format_quote
                        </i>
                      </div>
                    </div>
                    <p>
                    L'IA développée par l'Indian Ocean Institute a révolutionné notre approche de la détection des tremblements de terre. Sa précision et sa capacité à analyser rapidement des données complexes nous permettent de mieux comprendre et anticiper les mouvements tectoniques, offrant ainsi une chance inestimable de sauver des vies.
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={Ananya} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Dr. Ananya Verma</h5>
                      <span className="designation">Spécialiste en Sismologie</span>
                    </div>
                  </div>
                </div>
                <div className="tesiti__three__item">
                  <div className="tesiti__three__box">
                    <div className="ratting__inner">
                      <div className="ratting">
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                      </div>
                      <div className="quote">
                        <i className="material-symbols-outlined">
                          format_quote
                        </i>
                      </div>
                    </div>
                    <p>
                    J'ai travaillé sur les modèles climatiques pendant la majeure partie de ma carrière, et je n'ai jamais vu un outil aussi puissant que cette IA. Elle capture les nuances et les tendances de manière que nous, les humains, pourrions mettre des années à comprendre. C'est un game-changer pour la prévision des ouragans et des typhons..
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={rajan} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Dr. Rajan Iyer</h5>
                      <span className="designation">Expert en Climatologie</span>
                    </div>
                  </div>
                </div>
                <div className="tesiti__three__item">
                  <div className="tesiti__three__box">
                    <div className="ratting__inner">
                      <div className="ratting">
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                      </div>
                      <div className="quote">
                        <i className="material-symbols-outlined">
                          format_quote
                        </i>
                      </div>
                    </div>
                    <p>
                    Étudier les volcans est notoirement imprévisible. Cependant, avec l'introduction de l'IA de l'Institut, nous avons pu prédire avec précision plusieurs éruptions majeures, permettant des évacuations en temps opportun. La technologie est véritablement transformative pour notre domaine....
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={patel} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Dr. Lakshmi Patel</h5>
                      <span className="designation">Volcanologue</span>
                    </div>
                  </div>
                </div>
                <div className="tesiti__three__item">
                  <div className="tesiti__three__box">
                    <div className="ratting__inner">
                      <div className="ratting">
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                        <i className="material-symbols-outlined">star</i>
                      </div>
                      <div className="quote">
                        <i className="material-symbols-outlined">
                          format_quote
                        </i>
                      </div>
                    </div>
                    <p>
                    Les inondations peuvent causer des ravages dévastateurs. Grâce à l'IA de l'Indian Ocean Institute, nous sommes désormais en mesure d'anticiper les crues soudaines et les inondations côtières avec une précision remarquable. Elle a véritablement renforcé nos efforts pour protéger les communautés vulnérables..
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={joshi} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Dr. Sameer Joshi</h5>
                      <span className="designation">Hydrologue</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xx-6 col-xl-6 col-lg-6">
            <div className="testi__three__content">
              <div
                className="section__header pb__32 wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>Témoignages des scientifiques de l'Indian Ocean Institut sur les avantages et la précision de l'IA</h2>
                <p className="pb__32">
                L'Indian Ocean Institute, pionnier dans le domaine de la recherche sur les catastrophes naturelles, a reçu des éloges sans précédent de la part de ses éminents scientifiques pour son intelligence artificielle révolutionnaire. Des experts renommés dans des domaines aussi variés que la sismologie, la climatologie, la volcanologie et l'hydrologie ont témoigné de la puissance transformative de cette technologie. 
                </p>
                <p>
                Ces témoignages soulignent non seulement la précision remarquable de l'IA, mais aussi son potentiel à sauver des vies en anticipant des événements naturels majeurs. Grâce à cette innovation, l'Institut renforce sa position de leader mondial en matière de prévention et de gestion des catastrophes naturelles...
                </p>
              </div>
              {/* <div className="all__user">
                <Link href="/" className="user">
                  <Image src={j6} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={j1} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={j2} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={j3} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={j4} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={j5} alt="user" />
                </Link>
                <Link href="/" className="user">
                  <Image src={icons} alt="user" />
                </Link>
              </div> */}
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* contaienr */}
      {/* efect Element */}
      <div className="test__ai">
        <Image src={feature_ali} alt="img" />
      </div>
      <div className="efect__element2">
        <Image src={efect_cross2} alt="img" />
      </div>
      <div className="efect__eyollo">
        <Image src={efect_cross} alt="img" />
      </div>
      <div className="efect__elight">
        <Image src={light_elements} alt="img" />
      </div>
      <div className="efect__border">
        <Image src={efect_rount} alt="img" />
      </div>
      <div className="testi__robot">
        <Image src={blabla} alt="img" className="img-fluid" />
      </div>
      <div className="testi__tablet">
        <Image src={efecttablet1} alt="img" />
      </div>
      {/* efect Element */}
    </section>
  );
};

export default TestimonialFour;
