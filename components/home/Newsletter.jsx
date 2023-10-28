import Image from "next/image";
import efect_cross from "/public/img/elements/efect-cross.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";
import map from "/public/img/elements/map.png";
import news_element1 from "/public/img/elements/news-element1.png";
import news_elements2 from "/public/img/elements/news-elements2.png";

const Newsletter = () => {
  return (
    <section className="newsletter__section bg__white">
      <div className="container">
        <div className="newsletter__wrapper pt-120 pb-120">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="newsletter__content">
                <div className="section__header section__center">
                  <h2 className="wow fadeInUp" data-wow-duration="1s">
                    Subscribe to newsletters and get news.
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="2s">
                    Sign up for updates and stay informed about the latest
                    developments and be a part of our community and get the
                    latest news and insights
                  </p>
                </div>
                <form action="#">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="cmn--btn" type="submit">
                    <span>Subscribe</span>
                  </button>
                </form>

                <div className="map__mask">
                  <Image src={map} alt="ma--mask" />
                </div>
              </div>
            </div>
          </div>

          <div className="news__element1">
            <Image src={news_elements2} alt="new" />
          </div>
          <div className="news__element2">
            <Image src={news_element1} alt="new" />
          </div>
        </div>
      </div>

      <div className="efect__element2">
        <Image src={efect_cross} alt="img" />
      </div>
      <div className="efect__cross">
        <Image src={efect_cross2} alt="img" />
      </div>
      <div className="efect__element7">
        <Image src={efect_rount} alt="img" />
      </div>
      <div className="efect__element8">
        <Image src={efect_rount} alt="img" />
      </div>
    </section>
  );
};

export default Newsletter;
