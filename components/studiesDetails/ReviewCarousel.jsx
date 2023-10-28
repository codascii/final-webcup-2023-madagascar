import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import devon from "/public/img/testimonial/devon.png";
import jenny from "/public/img/testimonial/jenny.png";

const reviewData = [
  {
    id: 1,
    comment:
      "Our company has seen significant improvement in efficiency and accuracy since implementing AI and ML technology in our processes...",
    rating: 5,
    name: "Devon Lane",
    img: devon,
    designation: "Louis VUitton",
  },
  {
    id: 2,
    comment:
      "Our company has seen significant improvement in efficiency and accuracy since implementing AI and ML technology in our processes...",
    rating: 5,
    name: "Jenney Lane",
    img: jenny,
    designation: "Louis VUitton",
  },
  {
    id: 3,
    comment:
      "Our company has seen significant improvement in efficiency and accuracy since implementing AI and ML technology in our processes...",
    rating: 5,
    name: "Devon Lane",
    img: devon,
    designation: "Louis VUitton",
  },
  {
    id: 4,
    comment:
      "Our company has seen significant improvement in efficiency and accuracy since implementing AI and ML technology in our processes...",
    rating: 5,
    name: "Jenney Lane",
    img: jenny,
    designation: "Louis VUitton",
  },
];

const ReviewCarousel = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    // autoplay: true,
    focusOnSelect: true,
    slidesToShow: 1,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="edu__client owl-theme owl-carousel">
      <Slider {...settings} ref={sliderRef}>
        {reviewData.map((itm) => (
          <div key={itm.id} className="edu__items">
            <div className="edu__boxes">
              <div className="icon">
                <i className="material-symbols-outlined">format_quote</i>
              </div>
              <div className="ratting">
                {[...Array(itm.rating)].map((_, i) => (
                  <span key={i}>
                    <i className="material-symbols-outlined">star</i>
                  </span>
                ))}
              </div>
              <p>{itm.comment}</p>
              <div className="user__wrap">
                <div className="thumb">
                  <Image src={itm.img} alt="img" />
                </div>
                <div className="user__text">
                  <h5>{itm.name}</h5>
                  <span className="desig">{itm.designation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Slider Navigation */}
      <SliderNavigation sliderRef={sliderRef} />
    </div>
  );
};

export default ReviewCarousel;
