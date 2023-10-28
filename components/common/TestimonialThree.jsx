import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "./SliderNavigation";
import devon from "/public/img/testimonial/devon.png";
import jenny from "/public/img/testimonial/jenny.png";

const TestimonialThree = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // autoplay: true,
    focusOnSelect: true,
    slidesToShow: 2,
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
    <section className="testimonial__section__five bgsection pt-120 pb-120">
      {/* contaienr */}
      <div className="container">
        <div className="row justify-content-between">
          {/* col grid */}
          <div className="col-xxl-4 col-xl-4 col-lg-6">
            <div className="testimonial__content__five">
              <div className="section__header pb__40">
                <h3 className="mb-4 wow fadeInUp" data-wow-duration="1.5s">
                  Customer Satisfaction Support & Services
                </h3>
                <p className="wow fadeInDown" data-wow-duration="1.9s">
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-8 col-xl-8 col-lg-12">
            <div className="testimonial__wrap">
              <Slider {...settings} ref={sliderRef}>
                <div className="testimonial__items">
                  <div className="quote__icon">
                    <i className="material-symbols-outlined">format_quote</i>
                  </div>
                  <div className="star__grp">
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star_half</i>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology in our
                    processes...
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
                <div className="testimonial__items titems__two">
                  <div className="quote__icon">
                    <i className="material-symbols-outlined">format_quote</i>
                  </div>
                  <div className="star__grp">
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star_half</i>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology in our
                    processes...
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
                <div className="testimonial__items">
                  <div className="quote__icon">
                    <i className="material-symbols-outlined">format_quote</i>
                  </div>
                  <div className="star__grp">
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star_half</i>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology in our
                    processes...
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
                <div className="testimonial__items">
                  <div className="quote__icon">
                    <i className="material-symbols-outlined">format_quote</i>
                  </div>
                  <div className="star__grp">
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star</i>
                    <i className="material-symbols-outlined">star_half</i>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology in our
                    processes...
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
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* contaienr */}
    </section>
  );
};

export default TestimonialThree;
