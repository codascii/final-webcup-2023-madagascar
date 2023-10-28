import studiesData from "@/data/studiesData";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import BlogCard from "../cards/BlogCard";
import ai_element from "/public/img/elements/ai-element.png";
import capamask from "/public/img/elements/capamask.png";
import global__mask from "/public/img/elements/global__mask.png";
import light_elements from "/public/img/elements/light-elements.png";
import rocket_element from "/public/img/elements/rocket-element.png";

// slick css
import "slick-carousel/slick/slick-theme.css";

const Capabilities = () => {
  const [isOpen, setOpen] = useState(false);

  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      <section className="capabilities__section bgsection pt-120 pb-120">
        {/* shpae */}
        <div className="capa__mask">
          <Image src={capamask} alt="capa-mask" />
        </div>
        {/* shpae */}
        {/* container */}
        <div className="container">
          {/* section header */}
          <div className="capabilites__header pb__60">
            <div className="section__header">
              <h2>Unique capabilities in action</h2>
              <p>
                AI (Artificial Intelligence) and ML (Machine Learning) are
                closely related fields that are focused on the development of
                computer systems...
              </p>
            </div>
            <Link href="/studies-one" className="cmn--btn">
              <span>See All Case Studies</span>
            </Link>
          </div>
          {/* section header */}
          {/* capabilites warap */}
          <div className="capabilities__wrap position-relative z-1">
            <Slider {...settings} ref={sliderRef}>
              {/* Blog Card */}
              {studiesData.map((itm) => (
                <BlogCard key={itm.id} itm={itm} setOpen={setOpen} />
              ))}
            </Slider>
          </div>
          {/* capabilites warap */}
        </div>
        {/* container */}

        {/* elelments */}
        <div className="global__mask">
          <Image src={global__mask} alt="img" className="img-fluid" />
          <div className="light__element1">
            <Image src={light_elements} alt="light" className="img-fluid" />
          </div>
        </div>
        <div className="capa__ai">
          <Image src={ai_element} alt="img" className="img-fluid" />
        </div>
        <div className="capa__rocket">
          <Image src={rocket_element} alt="img" className="img-fluid" />
        </div>
        <div className="light__element1">
          <Image src={light_elements} alt="light" className="img-fluid" />
        </div>
        {/* elelments */}
      </section>
    </>
  );
};

export default Capabilities;
