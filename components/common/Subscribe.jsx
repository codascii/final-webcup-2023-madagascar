import Image from "next/image";
import ballglobal from "/public/img/elements/ballglobal.png";
import news_arowleft from "/public/img/elements/news-arowleft.png";
import news_arowright from "/public/img/elements/news-arowright.png";

const Subscribe = () => {
  return (
    <section className="newsletter__section__four bg__white">
      {/* container */}
      <div className="container">
        {/* newsletter wrapper */}
        <div className="newsletter__wrapper newsletter__wrapper__four">
          <div className="row justify-content-center">
            {/* col grid */}
            <div className="col-xl-6 col-lg-6">
              <div className="newsletter__content">
                <div className="section__header section__center">
                  <h2 className="wow fadeInUp" data-wow-duration="1.5s">
                    Subscribe Here
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="1.8s">
                    Subscribe to get notified about new templates and updates
                  </p>
                </div>
                <form
                  action="#"
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="cmn--btn" type="submit">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
            {/* col grid */}
          </div>
          {/* newletter element */}
          <div className="newsfour__ball1">
            <Image src={ballglobal} alt="img" className="img-fluid" />
          </div>
          <div className="newsfour__ball2">
            <Image src={ballglobal} alt="img" className="img-fluid" />
          </div>
          <div className="newsfour__element1">
            <Image src={news_arowleft} alt="new" className="img-fluid" />
          </div>
          <div className="newsfour__element2">
            <Image src={news_arowright} alt="new" className="img-fluid" />
          </div>
          {/* newletter element */}
        </div>
        {/* newsletter wrapper */}
      </div>
      {/* container */}
    </section>
  );
};

export default Subscribe;
