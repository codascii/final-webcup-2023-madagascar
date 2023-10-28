import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import banner_round from "/public/img/banner/banner-round.png";
import banner4 from "/public/img/banner/banner4.png";
import devided_element from "/public/img/banner/devided-element.png";
import devided_lock from "/public/img/banner/devided-lock.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";
import box_element from "/public/img/elements/box-element.png";

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

      <section className="banner__section banner__section__four  bannerbg">
        {/* Mask */}
        <div className="banner__bgmask">
          <Image src={box_element} alt="mask" />
        </div>
        {/* Mask */}
        {/* Container */}
        <div className="container">
          <div className="banner__wrapper">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="banner__content">
                  <div className="content__box text-white">
                    <span className="d3 mb-0">Maker of AI and</span>
                    <span className="d3">
                      <span className="rounded">
                        machine
                        <svg
                          viewBox="0 0 305 96"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M303 24.3836C288.692 17.9436 268.61 12.5665 244.918 8.83439C220.687 5.01763 193.058 3.00066 165.022 3C122.09 3.00262 81.644 7.61135 51.1299 15.9765C36.1191 20.0951 24.311 24.9046 16.0332 30.2731C7.38213 35.8798 2.99603 41.8441 3 48.0007C2.99603 54.1572 7.38213 60.1209 16.0332 65.7276C28.439 73.7672 48.8743 80.5891 75.1254 85.455C101.756 90.3899 132.84 92.9993 165.018 93C192.98 93 220.55 90.9922 244.744 87.1932C268.39 83.4781 288.46 78.1253 302.788 71.7135"
                            stroke="#EDCB50"
                            strokeWidth="5"
                          />
                        </svg>
                      </span>{" "}
                      learning products
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
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-4 col-lg-4 ">
                <div className="banner__thumb">
                  <div className="thumb">
                    <Image src={banner4} alt="banner" className="img-fluid" />
                  </div>
                  <div className="banner__airound">
                    <Image src={banner_round} alt="round" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container */}
        {/* elements */}
        <div className="devided__round">
          <Image src={devided_element} alt="img" className="img-fluid" />
        </div>
        <div className="devided__lock1">
          <Image src={devided_lock} alt="img" />
        </div>
        <div className="devided__lock2">
          <Image src={devided_lockyello} alt="img" />
        </div>
        <div className="devided__blump">
          <Image src={round_devided} alt="img" />
        </div>
        {/* elements */}
      </section>
    </>
  );
};

export default Banner;
