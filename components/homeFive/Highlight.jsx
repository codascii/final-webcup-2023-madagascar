import Image from "next/image";
import Link from "next/link";
import highligt from "/public//img/efective/highligt.png";
import ball3d from "/public/img/elements/ball3d.png";
import j_shape from "/public/img/elements/j-shape.png";
import cloud_icon from "/public/img/feature/cloud-icon.png";
import machine from "/public/img/feature/machine.svg";
import robotic from "/public/img/feature/robotic.svg";
import virtual2 from "/public/img/feature/virtual2.png";

const Highlight = () => {
  return (
    <section className="hightlight__section__five bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Section header */}
        <div className="section__header section__center pb__60">
          <h2 className="wow fadeInDown" data-wow-duration="1.5s">
            Highlight service features
          </h2>
          <p className="pb__32 wow fadeInUp" data-wow-duration="1.7s">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
          <Link
            href="/services"
            className="cmn--btn border__btn wow fadeInUp"
            data-wow-duration="1.9s"
          >
            <span>Get Started</span>
          </Link>
        </div>
        {/* Section header */}
        <div className="row">
          {/* col grid */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="highlight__left__wrap include__boxes include__grid__boxes">
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="content">
                  <h4>Robotic Automation</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
                <div className="icnos">
                  <Image src={robotic} alt="icon" className="img-fluid" />
                </div>
              </div>
              <div
                className="inclue__box include__box__grid2 wow fadeInUp"
                data-wow-duration="2.2s"
              >
                <div className="icnos">
                  <Image src={cloud_icon} alt="img" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>AI For Cloud Services</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="highlight__thumb">
              <Image src={highligt} alt="feature" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="highlight__right__wrap include__boxes include__grid__boxes">
              <div
                className="inclue__box include__box__grid1 wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="content">
                  <h4>Machine Learning</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
                <div className="icnos">
                  <Image src={machine} alt="icon" className="img-fluid" />
                </div>
              </div>
              <div
                className="inclue__box include__box__grid3 wow fadeInUp"
                data-wow-duration="2.5s"
              >
                <div className="icnos">
                  <Image src={virtual2} alt="icon" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>Ai For Cloud Services</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="j__shape">
        <Image src={j_shape} alt="jshape" className="img-fluid" />
      </div>
      <div className="j__ball1">
        <Image src={ball3d} alt="ball" className="img-fluid" />
      </div>
      <div className="j__ball2">
        <Image src={ball3d} alt="ball" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Highlight;
