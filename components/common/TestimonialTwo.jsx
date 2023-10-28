import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "./SliderNavigation";
import devon from "/public/img/testimonial/devon.png";
import testimonial2 from "/public/img/testimonial/testimonial2.png";

const TestimonialTwo = ({ clss = "bg__white" }) => {
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
  };

  return (
    <section className={`testimonial__section ${clss} pt-120 pb-120`}>
      {/* contaienr */}
      <div className="container">
        <div className="row justify-content-between align-items-center flex-row-reverse">
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="testimonial__content testimonial__content__two">
              <div className="section__header mb-2">
                <h2>User experience reports on support and services</h2>
                <p>
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
              </div>
              <div className="testimonial__wrap__two owl-theme owl-carousel">
                <Slider {...settings} ref={sliderRef}>
                  <div className="testimonial__items">
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
                  <div className="testimonial__items titems__two">
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
                  <div className="testimonial__items">
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
                  <div className="testimonial__items">
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
                </Slider>

                {/* Slider Navigation */}
                <SliderNavigation sliderRef={sliderRef} />
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-lg-6 col-md-10 col-sm-12">
            <div className="testimonial__thumb__two">
              <Image src={testimonial2} alt="client" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* contaienr */}
    </section>
  );
};

export default TestimonialTwo;
