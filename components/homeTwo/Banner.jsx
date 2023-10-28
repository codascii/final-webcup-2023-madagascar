import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { useMediaQuery } from "react-responsive";
import banner2 from "/public/img/banner/banner2.png";
import dround from "/public/img/elements/3dround.png";
import aitext2 from "/public/img/elements/aitext2.png";
import ball3d from "/public/img/elements/ball3d.png";
import banner_shape2 from "/public/img/elements/banner-shape2.png";
import banner_shape2dark from "/public/img/elements/banner-shape2dark.png";
import blumb from "/public/img/elements/blumb.png";
import box_element from "/public/img/elements/box-element.png";
import checkai from "/public/img/elements/checkai.png";
import feature_ali from "/public/img/elements/feature-ali.png";
import null_dimond from "/public/img/elements/null-dimond.png";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1200px)",
  });

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

      <section className="banner__section banner__section__two bannerbg">
        {/* Mask */}
        <div className="banner__bgmask">
          <Image src={box_element} alt="mask" />
        </div>
        {/* Mask */}
        {/* Container */}
        <div className="container">
          <div className="banner__wrapper">
            <div className="row g-4  justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="banner__content">
                  <div className="content__box">
                    <span className="d3 mb-0 text-white">
                      Revolutionize your
                    </span>
                    <span className="d3 text-white">
                      business with <span className="theme">AI</span>
                      <span className="theme2"> machines</span>
                    </span>
                    <p className="text-white">
                      Machine learning algorithms build a model based on sample
                      data, known as training data, in order to make predictions
                      or decisions...
                    </p>
                    <div className="btg__grp">
                      <Link href="/signup" className="cmn--btn">
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
                  <div className="aitext2">
                    <Image src={aitext2} alt="ai" />
                  </div>
                  <div className="ball3d">
                    <Image src={ball3d} alt="ball3d" />
                  </div>
                  <div className="banner3__two">
                    <Image src={dround} alt="ball3d" />
                  </div>
                  <div className="banner__blump">
                    <Image src={blumb} alt="ball3d" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8">
                <div className="banner__thumb">
                  <div className="thumb">
                    <Image
                      src={banner2}
                      alt="banner"
                      height={isDesktopOrLaptop ? 610 : 710}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container */}
        {/* Elements */}
        <div className="banner__mask">
          <Image src={banner_shape2} alt="mask" className="img-fluid" />
        </div>
        <div className="dark__mask d-none">
          <Image src={banner_shape2dark} alt="mask" />
        </div>
        <div className="banner__ai2">
          <Image src={feature_ali} alt="ai" />
        </div>
        <div className="banner__checkai">
          <Image src={checkai} alt="ai" />
        </div>
        <div className="banner__nulldimond">
          <Image src={null_dimond} alt="ai" />
        </div>
        {/* Elements */}
      </section>
    </>
  );
};

export default Banner;
