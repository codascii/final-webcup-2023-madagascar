import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import devided_element2 from "/public/img/banner/devided-element2.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";
import machine from "/public/img/feature/machine.svg";
import robotic from "/public/img/feature/robotic.svg";
import virtual from "/public/img/feature/virtual.svg";

const Includeai = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="include__benefits bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Header section */}
        <div
          className="section__header section__center pb__60 wow fadeInUp"
          data-wow-duration="2s"
        >
          <h2>Benefits Service Features</h2>
          <p>
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
        </div>
        {/* Header section */}
        {/* include benefits */}
        <div className="include__benefits__wrap">
          <Slider {...settings} ref={sliderRef}>
            <div className="inclue__benefits__box">
              <div className="icnos">
                <Image src={robotic} alt="icon" />
              </div>
              <div className="content">
                <h4>Robotic Automation</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="inclue__benefits__box benefits__box2">
              <div className="icnos">
                <Image src={machine} alt="icon" />
              </div>
              <div className="content">
                <h4>Machine Learning</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="inclue__benefits__box benefits__box3">
              <div className="icnos">
                <Image src={virtual} alt="icon" />
              </div>
              <div className="content">
                <h4>Virtual Reality</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="inclue__benefits__box">
              <div className="icnos">
                <Image src={robotic} alt="icon" />
              </div>
              <div className="content">
                <h4>Robotic Automation</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="inclue__benefits__box benefits__box2">
              <div className="icnos">
                <Image src={machine} alt="icon" />
              </div>
              <div className="content">
                <h4>Machine Learning</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="inclue__benefits__box benefits__box3">
              <div className="icnos">
                <Image src={virtual} alt="icon" />
              </div>
              <div className="content">
                <h4>Virtual Reality</h4>
                <p>
                  Machine learning (ML), a fundamental concept of AI research...
                </p>
                <Link href="/services" className="benefits__btn">
                  <span>Discover More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </Link>
              </div>
            </div>
          </Slider>

          {/* Slider Navigation */}
          <div className="d-flex align-items-center justify-content-center">
            <SliderNavigation sliderRef={sliderRef} />
          </div>
        </div>
        {/* include benefits */}
      </div>
      {/* container */}

      {/* element */}
      <div className="bene__element1">
        <Image src={devided_element2} alt="img" className="img-fluid" />
      </div>
      <div className="bene__lockyello">
        <Image src={devided_lockyello} alt="img" className="img-fluid" />
      </div>
      <div className="bene__blump">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      <div className="bene__blump2">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default Includeai;
