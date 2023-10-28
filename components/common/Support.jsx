import Image from "next/image";
import Link from "next/link";
import devided_element2 from "/public/img/banner/devided-element2.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";
import global__mask from "/public/img/elements/global__mask.png";
import s_devon from "/public/img/testimonial/s-devon.png";
import s_esther from "/public/img/testimonial/s-esther.png";
import s_robert from "/public/img/testimonial/s-robert.png";
import sup_bg from "/public/img/testimonial/sup-bg.jpg";

const Support = ({ clss }) => {
  return (
    <section className={`ratting__support ${clss} pt-120 pb-120`}>
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row justify-content-between align-items-center">
          {/* col grid */}
          <div className="col-xxl-5 col-xl-6 col-lg-6">
            <div className="support__header">
              <div className="section__header">
                <h2 className=" wow fadeInUp" data-wow-duration="1.2s">
                  User-Centered Support Ratings & Evaluations
                </h2>
                <p className="pb__32 wow fadeInUp" data-wow-duration="1.4s">
                  Machine learning is a subset of AI that involves the
                  development of algorithms and statistical models that enable a
                  system to improve its performance on a task over time through
                  experience. ML algorithms learn from data, allowing them to
                  make predictions, classNameify objects, and control systems
                  with increasing accuracy.
                </p>
                <p className="pb__40 wow fadeInUp" data-wow-duration="1.6s">
                  The integration of AI and ML is leading to the creation of
                  intelligent systems that can automate tasks, improve
                  decision-making, and drive innovation across industries.
                </p>
                <Link
                  href="/about-four"
                  className="cmn--btn wow fadeInUp"
                  data-wow-duration="1.8s"
                >
                  About us
                </Link>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="ratting__support__wrap">
              <div
                className="ratt__supp__items wow fadeInUp"
                data-wow-duration="2.2s"
              >
                <div className="left__thumb">
                  <div className="thumb">
                    <Image src={sup_bg} alt="suport" className="img-fluid" />
                  </div>
                  <div className="ratting__wrap">
                    <div className="top__ratting">
                      <Image className="img-fluid" src={s_esther} alt="img" />
                    </div>
                    <div className="ratting">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                  </div>
                </div>
                <div className="right__content">
                  <div className="head__designation">
                    <div className="icon">
                      <i className="material-symbols-outlined">format_quote</i>
                    </div>
                    <div className="name">
                      <h5>Esther Howard</h5>
                      <span className="desig">Facebook</span>
                    </div>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology...
                  </p>
                </div>
              </div>
              <div
                className="ratt__supp__items wow fadeInUp"
                data-wow-duration="2.4s"
              >
                <div className="left__thumb">
                  <div className="thumb">
                    <Image src={sup_bg} alt="suport" className="img-fluid" />
                  </div>
                  <div className="ratting__wrap">
                    <div className="top__ratting">
                      <Image src={s_devon} alt="img" className="img-fluid" />
                    </div>
                    <div className="ratting">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                  </div>
                </div>
                <div className="right__content">
                  <div className="head__designation">
                    <div className="icon">
                      <i className="material-symbols-outlined">format_quote</i>
                    </div>
                    <div className="name">
                      <h5>Devon Lane</h5>
                      <span className="desig">Facebook</span>
                    </div>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology...
                  </p>
                </div>
              </div>
              <div
                className="ratt__supp__items wow fadeInUp"
                data-wow-duration="2.6s"
              >
                <div className="left__thumb">
                  <div className="thumb">
                    <Image src={sup_bg} alt="suport" className="img-fluid" />
                  </div>
                  <div className="ratting__wrap">
                    <div className="top__ratting">
                      <Image src={s_robert} alt="img" className="img-fluid" />
                    </div>
                    <div className="ratting">
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star</i>
                      <i className="material-symbols-outlined">star_half</i>
                    </div>
                  </div>
                </div>
                <div className="right__content">
                  <div className="head__designation">
                    <div className="icon">
                      <i className="material-symbols-outlined">format_quote</i>
                    </div>
                    <div className="name">
                      <h5>Robert Fox</h5>
                      <span className="desig">Facebook</span>
                    </div>
                  </div>
                  <p>
                    Our company has seen significant improvement in efficiency
                    and accuracy since implementing AI and ML technology...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
        {/* row */}
      </div>
      {/* container */}
      {/* elelments */}
      <div className="support__element1">
        <Image src={devided_element2} alt="img" className="img-fluid" />
      </div>
      <div className="support__lockyello">
        <Image src={devided_lockyello} alt="img" className="img-fluid" />
      </div>
      <div className="support__blump">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      <div className="support__gold">
        <Image src={global__mask} alt="img" className="img-fluid" />
      </div>
      {/* elelments */}
    </section>
  );
};

export default Support;
