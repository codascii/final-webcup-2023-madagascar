import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import banner5 from "/public/img/banner/banner5.png";
import bulp from "/public/img/banner/bulp.png";
import dround from "/public/img/elements/3dround.png";
import aitext2 from "/public/img/elements/aitext2.png";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import blumb from "/public/img/elements/blumb.png";
import box_element from "/public/img/elements/box-element.png";
import null_dimond from "/public/img/elements/null-dimond.png";

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
      <section className="banner__section banner__section__five bannerbg">
        {/* Mask */}
        <div className="banner__bgmask">
          <Image src={box_element} alt="mask" className="img-fluid" />
        </div>
        {/* Mask */}
        {/* Container */}
        <div className="container">
          <div className="banner__wrapper">
            <div className="row g-4  justify-content-between">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="banner__content">
                  <div className="content__box text-white">
                    <span className="d3 mb-0">
                      <svg
                        viewBox="0 0 61 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36.7201 47.3052C30.2929 47.718 24.5306 49.5423 18.3829 51.2019C17.1823 51.5262 16.4551 52.7004 16.7527 53.8251C17.0506 54.9504 18.269 55.5993 19.4697 55.2757C25.2992 53.7019 30.7635 51.9271 36.8683 51.5338C38.1031 51.4545 39.074 50.4414 39.0297 49.2753C38.9928 48.1077 37.9547 47.2252 36.7201 47.3052Z"
                          fill="#EDCB50"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M44.8468 32.0309C32.8604 25.365 18.4113 20.0291 4.64664 17.397C3.44456 17.168 2.23706 17.9132 1.95496 19.0596C1.67286 20.2061 2.41435 21.3248 3.61642 21.5538C16.9252 24.0994 30.8998 29.2598 42.4845 35.7071C43.5343 36.289 44.9145 35.9381 45.5646 34.9242C46.2147 33.9103 45.8965 32.6128 44.8468 32.0309Z"
                          fill="#EDCB50"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M54.147 26.6481C53.0834 17.5874 47.8444 9.48874 41.8493 2.75543C41.063 1.87827 39.6537 1.79267 38.704 2.56329C37.7474 3.33672 37.6093 4.677 38.3885 5.55631C43.8515 11.6876 48.7332 19.0102 49.7031 27.2621C49.8387 28.4199 50.9463 29.2214 52.1699 29.0524C53.3937 28.884 54.2824 27.8052 54.147 26.6481Z"
                          fill="#EDCB50"
                        />
                      </svg>
                      Advanced <span className="theme">AI</span> and
                    </span>
                    <span className="d3">
                      <span className="theme2">machine</span> learning
                      technology
                      <span className="round3">
                        <Image src={dround} alt="round" className="img-fluid" />
                      </span>
                    </span>
                    <p>
                      Machine learning algorithms build a model based on sample
                      data, known as training data, in order to make predictions
                      or decisions...
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
                    <div className="banner5__blump">
                      <Image src={blumb} alt="blump" className="img-fluid" />
                    </div>
                  </div>
                  <div className="aitext5">
                    <Image src={aitext2} alt="ai" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-11">
                <div className="banner__thumb">
                  <div className="thumb">
                    <Image src={banner5} alt="banner" className="img-fluid" />
                  </div>
                  <div className="animated3">
                    <Image src={ball3d} alt="img" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container */}
        {/* Elements */}
        <div className="ball__element5">
          <Image src={ball_element} alt="ball" className="img-fluid" />
        </div>
        <div className="bulp">
          <Image src={bulp} alt="bulp" className="img-fluid" />
        </div>
        <div className="null__dimond">
          <Image src={null_dimond} alt="null" className="img-fluid" />
        </div>
        {/* Elements */}
      </section>
    </>
  );
};

export default Banner;
