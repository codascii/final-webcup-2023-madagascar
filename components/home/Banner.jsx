import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import banner1 from "/public/img/banner/banner1.png";
import ai_element from "/public/img/elements/ai-element.png";
import ball_element from "/public/img/elements/ball-element.png";
import banner_shape1_dark from "/public/img/elements/banner-shape1-dark.png";
import boxElement from "/public/img/elements/box-element.png";
import light_elements from "/public/img/elements/light-elements.png";
import rocket_element from "/public/img/elements/rocket-element.png";
import shape_element1 from "/public/img/elements/shape-element1.png";
import t_element from "/public/img/elements/t-element.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wXNv-x5zVgE"
        onClose={() => setOpen(false)}
      />

      <section className="banner__section bannerbg">
        <div className="banner__bgmask">
          <Image src={boxElement} alt="mask" className="img-fluid" />
        </div>

        <div className="container">
          <div className="banner__wrapper">
            <div className="row g-4  justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="banner__content">
                  <div className="content__box">
                    <span className="d3 mb-0 text-white">Unleash the</span>
                    <span className="d3 text-white">
                      potential of <span className="theme">AI</span> and{" "}
                      <span className="theme2">machine</span> learning
                    </span>
                    <p className="text-white">
                      Machine learning algorithms build a model based on sample
                      data, known as training data, in order to make predictions
                      or decisions...
                    </p>
                    <div className="btg__grp">
                      <Link href="/signin" className="cmn--btn">
                        <span>Get Started</span>
                      </Link>
                      <button
                        className="play__btn video-btn bg-transparent border-0 text-white"
                        onClick={() => setOpen(true)}
                      >
                        <span className="play__icon">
                          <i className="material-symbols-outlined">
                            play_arrow
                          </i>
                        </span>
                        <span>Watch Intro Video</span>
                      </button>
                    </div>
                  </div>
                  <div className="ai__text">
                    <Image src={t_element} alt="ai" className="img-fluid" />
                  </div>
                  <div className="ai__elements">
                    <Image src={ai_element} alt="ai" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="banner__thumb">
                  <div className="thumb">
                    <Image src={banner1} alt="banner" className="img-fluid" />
                  </div>
                  <div className="rocket__element">
                    <Image
                      src={rocket_element}
                      alt="rocket"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
            </div>
          </div>
        </div>

        <div className="ball__element">
          <Image src={ball_element} alt="ball" className="img-fluid" />
        </div>
        <div className="banner__mask">
          <Image src={shape_element1} alt="mask" className="img-fluid" />
        </div>
        <div className="dark__mask d-none">
          <Image src={banner_shape1_dark} alt="mask" className="img-fluid" />
        </div>
        <div className="light__element1">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
        <div className="light__element2">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
        <div className="light__element3">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
        <div className="light__element4">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
        <div className="light__element5">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
      </section>
    </>
  );
};

export default Banner;
