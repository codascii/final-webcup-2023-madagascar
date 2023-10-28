import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "./SliderNavigation";
import bigball_elements from "/public/img/elements/bigball-elements.png";
import feature_ali from "/public/img/elements/feature-ali.png";
import light_elements from "/public/img/elements/light-elements.png";
import real from "/public/img/elements/real.png";

const PlanThree = () => {
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
    <section className="plan__section plan__section__three bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* col grid */}
          <div className="col-xxl-6 col-xl-7">
            <div className="plan__wrapper position-relative z-1">
              <Slider {...settings} ref={sliderRef}>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Free</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Get Started Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Start 3 Days Gree Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Free</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Get Started Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Start 3 Days Gree Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Free</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined danger">
                            dangerous
                          </i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Get Started Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
                      <span className="pricetext">/month</span>
                    </div>
                    <ul className="plan__list">
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>Full acess library</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>One user</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">task_alt</i>
                        </span>
                        <span>1 Analytic Reports</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>5 Free optimization</span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="material-symbols-outlined">dangerous</i>
                        </span>
                        <span>Hotline supports 24/7</span>
                      </li>
                    </ul>
                    <div className="price__btn">
                      <Link href="/pricing" className="cmn--btn border__btn">
                        <span>Start 3 Days Gree Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>

              {/* Slider Navigation */}
              <SliderNavigation sliderRef={sliderRef} />
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-5 col-xl-5 col-lg-10">
            <div className="plan__content__left">
              <div className="section__header pb__40">
                <h2 className="wow fadeInUp" data-wow-duration="1.2s">
                  Advanced models and pricing methods
                </h2>
                <p className="pb__32 wow fadeInUp" data-wow-duration="1.5s">
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
                <p className="wow fadeInUp" data-wow-duration="1.7s">
                  ML, on the other hand, is a specific subfield of AI that is
                  focused on the development of algorithms and statistical
                  models that allow systems to automatically improve their
                  performance with experience
                </p>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="plan__aithree">
        <Image src={feature_ali} alt="rocket" className="img-fluid" />
      </div>
      <div className="plan__ballr">
        <Image src={bigball_elements} alt="rocket" className="img-fluid" />
      </div>
      <div className="light__element1">
        <Image src={light_elements} alt="light" className="img-fluid" />
      </div>
      <div className="light__element2">
        <Image src={light_elements} alt="light" className="img-fluid" />
      </div>
      <div className="light__real">
        <Image src={real} alt="light" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default PlanThree;
