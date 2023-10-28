import { useRef } from "react";
import Slider from "react-slick";
import ProductCard from "../cards/ProductCard";
import SliderNavigation from "../common/SliderNavigation";
import productsData from "../shop/productsData";

const RelatedProducts = () => {
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
    <section className="blog__details__section pt-80 pb-80">
      {/* container */}
      <div className="container">
        {/* blog details head */}
        <div className="blog__details__head ">
          <h2>More Related Products</h2>
        </div>

        {/* blog details head */}
        <div className="blog__details__wrap position-relative">
          <Slider {...settings} ref={sliderRef}>
            {/* Product Card */}
            {productsData.map((itm) => (
              <ProductCard key={itm.id} itm={itm} clss="mb-4" />
            ))}
          </Slider>

          {/* Slider Navigation */}
          <SliderNavigation sliderRef={sliderRef} />
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default RelatedProducts;
