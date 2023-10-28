import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import banner3left from "/public/img/banner/banner3left.png";
import banner3right from "/public/img/banner/banner3right.png";
import aitext2 from "/public/img/elements/aitext2.png";
import box_element from "/public/img/elements/box-element.png";
import light_elements from "/public/img/elements/light-elements.png";

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

      <section className="banner__section banner__section__three bannerbg">
        {/* Mask */}
        <div className="banner__bgmask">
          <Image src={box_element} alt="mask" />
        </div>
        {/* Mask */}
        {/* banner 3 wrapper */}
        <div className="banner3__content__wrapper">
          {/* Container */}
          <div className="container-fluid">
            <div className="banner__wrapper">
              <div className="row justify-content-center  align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                  <div className="banner3__left__shape">
                    <Image
                      src={banner3left}
                      alt="banner"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="banner__content">
                    <div className="content__box text-white">
                      <span className="d3 mb-0">
                        <span className="theme">AI</span> and{" "}
                        <span className="theme2">machine</span>
                      </span>
                      <span className="d3">Learning for Smart Systems</span>
                      <p>
                        Machine learning algorithms build a model based on
                        sample data, known as training data, in order to make
                        predictions or decisions...
                      </p>
                      <div className="btg__grp">
                        <Link href="/signup" className="cmn--btn">
                          <span>Get Started</span>
                        </Link>
                        <button
                          // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
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
                      <Image src={aitext2} alt="ai" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                  <div className="banner3__left__shape">
                    <Image
                      src={banner3right}
                      alt="banner"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container */}
        </div>
        {/* banner 3 wrapper */}
        {/* Elements */}
        <div className="light__element1">
          <Image src={light_elements} alt="light" />
        </div>
        <div className="light__element2">
          <Image src={light_elements} alt="light" />
        </div>
        <div className="light__element3">
          <Image src={light_elements} alt="light" />
        </div>
        <div className="light__element4">
          <Image src={light_elements} alt="light" />
        </div>
        <div className="light__element5">
          <Image src={light_elements} alt="light" />
        </div>
        {/* Elements */}
      </section>
    </>
  );
};

export default Banner;
