import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import re1 from "/public/img/bog-capabilities/re1.jpg";
import re2 from "/public/img/bog-capabilities/re2.jpg";
import re4 from "/public/img/bog-capabilities/re4.jpg";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import d3bulp from "/public/img/elements/d3bulp.png";

const Qualified = ({ clss = "" }) => {
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
    <section className="success__story bg__white pt-120 pb-120">
      {/* container */}
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          {/* col */}
          <div className="offset-2 col-xxl-3 col-xl-12">
            <div className="success__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="1.2s">
                  We highlight success stories and machine learning
                </h2>
                <p className="pb__20 wow fadeInDown" data-wow-duration="1.5s">
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
                <p className="wow fadeInUp" data-wow-duration="1.9s">
                  ML, on the other hand, is a specific subfield of AI that is
                  focused on the development of algorithms
                </p>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col-xxl-7 col-xl-12">
            <div className="success__story__wrap position-relative">
              <Slider {...settings} ref={sliderRef}>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re1} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>AI Antibiotics</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re2} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>classNameifying listing AI photos</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re4} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>ICT AI Performance</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re1} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>AI Antibiotics</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re2} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>classNameifying listing AI photos</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="success__stry__item">
                  <div className="thumb">
                    <Image src={re4} alt="img" className="img-fluid" />
                  </div>
                  <div className="content">
                    <h4>ICT AI Performance</h4>
                    <p className="text-white">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry...
                    </p>
                    <Link href="/studies-five">
                      <span>Read More</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">east</i>
                      </span>
                    </Link>
                  </div>
                </div>
              </Slider>

              {/* Slider Navigation */}
              <div className={clss}>
                <SliderNavigation sliderRef={sliderRef} />
              </div>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="d__light">
        <Image src={d3bulp} alt="light" className="img-fluid" />
      </div>
      <div className="d__ball">
        <Image src={ball_element} alt="light" className="img-fluid" />
      </div>
      <div className="d__round">
        <Image src={ball3d} alt="light" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Qualified;
