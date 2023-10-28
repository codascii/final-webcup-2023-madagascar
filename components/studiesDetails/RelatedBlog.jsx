import studiesData from "@/data/studiesData";
import { useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import BlogCard from "../cards/BlogCard";
import SliderNavigation from "../common/SliderNavigation";

const RelatedBlog = () => {
  const [isOpen, setOpen] = useState(false);
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
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wXNv-x5zVgE"
        onClose={() => setOpen(false)}
      />

      <section className="blog__details__section pt-80 pb-80">
        {/* container */}
        <div className="container">
          {/* blog details head */}
          <div className="blog__details__head ">
            <h2>More Related Case Studies</h2>
          </div>

          {/* blog details head */}
          <div className="blog__details__wrap position-relative">
            <Slider {...settings} ref={sliderRef}>
              {/* Product Card */}
              {studiesData.map((itm) => (
                // BlogCard
                <BlogCard
                  key={itm.id}
                  itm={itm}
                  clss="mb-4"
                  setOpen={setOpen}
                />
              ))}
            </Slider>

            {/* Slider Navigation */}
            <SliderNavigation sliderRef={sliderRef} />
          </div>
        </div>
        {/* container */}
      </section>
    </>
  );
};

export default RelatedBlog;
