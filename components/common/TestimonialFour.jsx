import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import caserobot from "/public/img/bog-capabilities/caserobot.png";
import efect_cross from "/public/img/elements/efect-cross.png";
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
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes. The use of AI and ML has helped us stay
                      ahead of the competition and stay on the cutting...
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={jenny} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Jenny Wilson</h5>
                      <span className="designation">Starbucks</span>
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
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes. The use of AI and ML has helped us stay
                      ahead of the competition and stay on the cutting...
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={jenny} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Jenny Wilson</h5>
                      <span className="designation">Starbucks</span>
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
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes. The use of AI and ML has helped us stay
                      ahead of the competition and stay on the cutting...
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={jenny} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Jenny Wilson</h5>
                      <span className="designation">Starbucks</span>
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
                      Our company has seen significant improvement in efficiency
                      and accuracy since implementing AI and ML technology in
                      our processes. The use of AI and ML has helped us stay
                      ahead of the competition and stay on the cutting...
                    </p>
                  </div>
                  <div className="client__history">
                    <div className="thumb">
                      <Image src={jenny} alt="img" />
                    </div>
                    <div className="content">
                      <h5>Jenny Wilson</h5>
                      <span className="designation">Starbucks</span>
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
                  AI refers to the ability of a computer system to perform tasks
                  that would typically require human intelligence, such as
                  understanding natural language, recognizing objects and
                  patterns in images, and making predictions based on data.
                </p>
                <p>
                  Machine learning is a subset of AI that involves the
                  development of algorithms and statistical models that enable
                  its performance on a task over...
                </p>
              </div>
              <div className="all__user">
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
              </div>
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
        <Image src={caserobot} alt="img" className="img-fluid" />
      </div>
      <div className="testi__tablet">
        <Image src={efecttablet1} alt="img" />
      </div>
      {/* efect Element */}
    </section>
  );
};

export default TestimonialFour;
