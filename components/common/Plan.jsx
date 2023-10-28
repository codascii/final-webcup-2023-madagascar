import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "./SliderNavigation";
import bigball_elements from "/public/img/elements/bigball-elements.png";
import feature_ali from "/public/img/elements/feature-ali.png";
import light_elements from "/public/img/elements/light-elements.png";
import planrobot from "/public/img/elements/planrobot.png";
import addbusness from "/public/img/plan/addbusness.png";
import addcard from "/public/img/plan/addcard.png";

const Plan = () => {
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
    <section className="plan__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row g-5">
          {/* col grid */}
          <div className="col-xl-6 col-lg-10">
            <div
              className="plan__content__left wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="section__header pb__40">
                <h2>Basic and Premium plans at different levels</h2>
                <p className="pb__32">
                  AI is the broadesr concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
                <p className="pb__32">
                  ML, on the other hand, is a specific subfield of AI that is
                  focused on the development of algorithms and statistical
                  models that allow systems to automatically improve their
                  performance with experience
                </p>
                <p>
                  These algorithms and models can be used for a variety of tasks
                  such as prediction, classNameification, and clustering.
                </p>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-6">
            <div className="plan__wrapper position-relative z-1">
              <Slider {...settings} ref={sliderRef}>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Basic</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <i className="material-symbols-outlined">
                          add_business
                        </i>
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
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
                <div className="plan__items premium__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <i className="material-symbols-outlined">add_card</i>
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
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
                        <span>Start 3 Days Free Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Basic</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <Image src={addbusness} alt="icon" />
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
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
                <div className="plan__items premium__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <Image src={addcard} alt="icon" />
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
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
                        <span>Start 3 Days Free Trial</span>
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
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="plan__ai">
        <Image src={feature_ali} alt="rocket" />
      </div>
      <div className="plan__ball">
        <Image src={bigball_elements} alt="rocket" />
      </div>
      <div className="plan__man">
        <Image src={planrobot} alt="rocket" className="img-fluid" />
      </div>
      <div className="light__element1">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element2">
        <Image src={light_elements} alt="light" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Plan;
