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
import jenny from "/public/img/testimonial/jenny.png";
import kathryn from "/public/img/testimonial/kathryn.png";
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
                <h2>What people say about our support and services</h2>
              </div>
              <div className="testimonial__wrap__wided position-relative z-1">
                <Slider {...settings} ref={sliderRef}>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                    <p>
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes...
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={devon} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Devon Lane</h5>
                        <span className="designation">Louis Vuitton</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht titems__two">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                    <p>
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes...
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={jenny} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Devon Lane</h5>
                        <span className="designation">Louis Vuitton</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                    <p>
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes...
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={devon} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Devon Lane</h5>
                        <span className="designation">Louis Vuitton</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__items maxwidht">
                    <div className="star__grp">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                    <p>
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes...
                    </p>
                    <div className="client__wrap">
                      <div className="thumb">
                        <Image src={jenny} alt="img" />
                      </div>
                      <div className="content">
                        <h5>Devon Lane</h5>
                        <span className="designation">Louis Vuitton</span>
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
                  Our company has seen significant improvement in efficiency and
                  accuracy since implementing AI and ML technology in our
                  processes...
                </p>
                <div className="client__wrap">
                  <div className="thumb">
                    <Image src={kathryn} alt="img" />
                  </div>
                  <div className="content">
                    <h5>Kathryn Mrphy</h5>
                    <span className="designation">The Wait Disney Company</span>
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
