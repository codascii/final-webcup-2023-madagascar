import Image from "next/image";
import Link from "next/link";
import about2 from "/public/img/about/about2.png";
import dround from "/public/img/elements/3dround.png";
import ball3d from "/public/img/elements/ball3d.png";
import blumb from "/public/img/elements/blumb.png";
import null_dimond from "/public/img/elements/null-dimond.png";

const AboutAITwo = () => {
  return (
    <section className="about__section about__section__two bg__white pt-80 pb-120">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* about content */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  We offer professional AI & ML solutions for humans
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.2s">
                  Artificial intelligence (AI) is perceiving, synthesizing, and
                  inferring information—demonstrated by , as opposed to
                  intelligence displayed by n and . Example tasks in which this
                  is done include speech recognition, computer vision,
                  translation between (natural) languages, as well as other
                  mappings of inputs. The of defines artificial intelligence as:
                </p>
              </div>
              <div
                className="progress__wrap wow fadeInUp"
                data-wow-duration="2.4s"
              >
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Customer satisfaction</span>
                    <span className="point">80%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Performance</span>
                    <span className="point">90%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Marketing</span>
                    <span className="point">70%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Privacy</span>
                    <span className="point">85%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
              </div>
              <Link
                href="/about-two"
                className="cmn--btn wow fadeInUp"
                data-wow-duration="2.6"
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
          {/* about content */}
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          {/* about thumb */}
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-9 col-sm-9">
            <div className="about__thumb">
              <Image src={about2} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* elements */}
      <div className="ball3d">
        <Image src={ball3d} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner3__two">
        <Image src={dround} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner__blump">
        <Image src={blumb} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner__nulldimond">
        <Image src={null_dimond} alt="ball3d" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default AboutAITwo;
