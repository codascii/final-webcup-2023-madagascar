import Image from "next/image";
import breadcumnd from "/public/img/banner/breadcumnd.png";
import box_element from "/public/img/elements/box-element.png";
import t_element from "/public/img/elements/t-element.png";

const SmallBanner = ({ title = "", children }) => {
  return (
    <section className="banner__section breadcumnd__banner bannerbg">
      {/* Mask */}
      <div className="banner__bgmask">
        <Image src={box_element} alt="mask" className="img-fluid" />
      </div>
      {/* Mask */}
      {/* Container */}
      <div className="container">
        <div className="breadcumnd__wrapper">
          <div className="row g-4  justify-content-between align-items-end">
            {/* col */}
            {/* <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-8"> */}
            <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
              <div className="breadcumnd__content">
                <h1 className="title">{title}</h1>
                {/* Breadcrumb */}
                {children}
              </div>
            </div>
            {/* col */}
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-8">
              <div className="breadcumnd__thumb">
                <Image src={breadcumnd} alt="bread" className="img-fluid" />
              </div>
            </div>
            {/* col */}
          </div>
          {/* ai text */}
          <div className="bread__ai">
            <Image src={t_element} alt="img" className="img-fluid" />
          </div>
          {/* ai text */}
        </div>
      </div>
      {/* Container */}
    </section>
  );
};

export default SmallBanner;
