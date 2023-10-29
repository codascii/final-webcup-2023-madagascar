import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "./SliderNavigation";
import dots_elements from "/public/img/elements/3dots-elements.png";
import bell_elements from "/public/img/elements/bell-elements.png";
import efect_ball from "/public/img/elements/efect-ball.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";
import efect_trevuj from "/public/img/elements/efect-trevuj.png";
import facebook_element from "/public/img/elements/facebook-element.png";
import pinter_elements from "/public/img/elements/pinter-elements.png";
import swith_elements from "/public/img/elements/swith-elements.png";
import devon from "/public/img/testimonial/devon.png";
import lea from "/public/img/testimonial/lea.png";
import jenny from "/public/img/testimonial/jenny.png";
import marc from "/public/img/testimonial/marc.png";
import rajan from "/public/img/testimonial/rajan.png";
import sami from "/public/img/testimonial/sami.png";
import testimonial1 from "/public/img/testimonial/testimonial1.png";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // autoplay: true,
    focusOnSelect: true,
    slidesToShow: 1,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial__section bgsection pt-120 pb-120">
      {/* contaienr */}
      <div className="container">
        <div className="row justify-content-between">
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-7">
            <div className="testimonial__content">
              <div
                className="section__header pb__60 wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>Ce que les gens disent de nos services</h2>
              </div>
              <div className="testimonial__wrap__wided position-relative z-1">
                <Slider {...settings} ref={sliderRef}>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                    </div>
                    <p>
                      {"La mise en place de l'AIPCN a marqué un tournant dans la prévision des catastrophes naturelles. Avant, nous ne pouvions que réagir. Aujourd'hui, grâce à cet algorithme, nous avons le pouvoir d'anticiper, et cela sauve des vies."}
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={devon} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Devon Lane</h5>
                        <span className="designation">{"Dr. Ananya Roy, Spécialiste en Sismologie à l'Indian Ocean Institut"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht titems__two">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                    </div>
                    <p>
                      {"Jamais je n'aurais imaginé voir une telle précision dans la prédiction des catastrophes. L'AIPCN est le fruit de décennies de recherches et le résultat est impressionnant. C'est la fusion parfaite entre la technologie et la nature pour servir l'humanité."}
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={rajan} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Prof. Rajan Kumar</h5>
                        <span className="designation">{"Directeur de Recherche en IA à l'Indian Ocean Institut"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                    </div>
                    <p>
                      {"En ouvrant \"SeismoPredict\", j'ai vu une alerte sismique pour ma région. J'ai immédiatement suivi les conseils du site, se réfugiant sous un cadre de porte solide. Quelques instants plus tard, le sol tremblait violemment. Grâce à cette alerte précoce, j'ai évité d'être prise au dépourvu et j'ai pu me protéger. Je suis infiniment reconnaissante à \"SeismoPredict\""}
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={lea} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Léa</h5>
                        <span className="designation">Sauvée grâce aux prédictions de Altesphere</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                    </div>
                    <p>
                     {"Lorsque le ciel s'est assombri, j'ai consulté \"MeteoAlerte\" par réflexe. L'alerte cyclonique m'a surpris. Grâce aux prévisions précises du site, j'ai pu rapidement sécuriser ma maison et mettre ma famille à l'abri. Quand le cyclone a frappé, nous étions prêts. Sans \"MeteoAlerte\", l'issue aurait pu être bien différente. Je leur dois énormément."}
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={marc} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Marc</h5>
                        <span className="designation">Restaurateur</span>
                      </div>
                    </div>
                  </div>
                </Slider>

                {/* Slider Navigation */}
                <SliderNavigation sliderRef={sliderRef} />
              </div>
              <div className="testimonial__items maxwidht testimonial__fixed">
                <div className="star__grp">
                  <i className="material-symbols-outlined">star</i>
                  <i className="material-symbols-outlined">star</i>
                  <i className="material-symbols-outlined">star</i>
                  <i className="material-symbols-outlined">star</i>
                  <i className="material-symbols-outlined">star_half</i>
                </div>
                <p>
                 {"En consultant 'TsunamiWatch', j'ai vu une alerte de tsunami imminent. Sans perdre de temps, j'ai suivi la route d'évacuation indiquée sur le site. Alors que les vagues déferlaient sur la côte, j'étais déjà en hauteur, en sécurité. 'TsunamiWatch' m'a littéralement sauvé la vie ce jour-là. Je leur suis éternellement reconnaissant."}
                </p>
                <div className="client__wrap">
                  <div className="thumb">
                    <Image src={sami} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Sami</h5>
                    <span className="designation">Consultant Clound</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-5 col-xl-5 col-lg-5 col-md-8 col-sm-8">
            <div className="testimonial__thumb">
              <Image src={testimonial1} alt="client" />
              <div className="testi__dots">
                <Image src={dots_elements} alt="dots" />
              </div>
              <div className="testi__swtich">
                <Image src={swith_elements} alt="dots" />
              </div>
              <div className="testi__pinterest">
                <Image src={pinter_elements} alt="dots" />
              </div>
              <div className="testi__bell">
                <Image src={bell_elements} alt="dots" />
              </div>
              <div className="testi__facebook">
                <Image src={facebook_element} alt="dots" />
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* contaienr */}
      {/* efect Element */}
      <div className="efect__element1">
        <Image src={efect_ball} alt="img" />
      </div>
      <div className="efect__element2">
        <Image src={efect_cross2} alt="img" />
      </div>
      <div className="efect__element4">
        <Image src={efect_trevuj} alt="img" />
      </div>
      <div className="efect__element7">
        <Image src={efect_rount} alt="img" />
      </div>
      {/* efect Element */}
    </section>
  );
};

export default Testimonial;
