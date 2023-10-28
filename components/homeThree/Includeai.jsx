import Image from "next/image";
import Link from "next/link";
import checkai from "/public/img/elements/checkai.png";
import redlight from "/public/img/elements/redlight.png";
import spricng from "/public/img/elements/spricng.png";
import cloud from "/public/img/feature/cloud.png";
import machine from "/public/img/feature/machine.svg";
import robotic from "/public/img/feature/robotic.svg";
import virtual from "/public/img/feature/virtual.svg";

const Includeai = () => {
  return (
    <section className="includeai__section include__ml__section bgsection pt-120 pb-120">
      <div className="include__aicloud__wrapper">
        {/* container */}
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* col grid */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content include__cheack">
                {/* Include element */}
                <div className="threeroune">
                  <Image src={redlight} alt="img" />
                </div>
                <div className="include__null">
                  <Image src={redlight} alt="img" />
                </div>
                {/* Include element */}
                <div className="section__header">
                  <h2 className="wow fadeInUp" data-wow-duration="1.4s">
                    We build AI and ML service solutions
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="1.8s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable.
                  </p>
                </div>
                <ul
                  className="about__chack wow fadeInUp"
                  data-wow-duration="2.1s"
                >
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Advanced Technology</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>100% Security System</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Competitive Pricing</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>24 Hours Supports</span>
                  </li>
                </ul>
                <div
                  className="include__btn wow fadeInUp"
                  data-wow-duration="2.5s"
                >
                  <Link href="/services" className="cmn--btn">
                    <span>See All Services</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="include__boxes include__grid__boxes">
                <div className="row g-4">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                    <div
                      className="inclue__box mb24 wow fadeInUp"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={robotic} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Robotic Automation</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                    <div
                      className="inclue__box include__box__grid2 wow fadeInDown"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={virtual} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Virtual Reality</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 custom__70">
                    <div
                      className="inclue__box include__box__grid1 mb24 wow fadeInDown"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={machine} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Machine Learning</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                    <div
                      className="inclue__box include__box__grid3 wow fadeInUp"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={cloud} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Ai For Cloud Services</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* container */}
      </div>
      {/* element */}
      <div className="include__elements">
        <Image src={checkai} alt="include" className="img-fluid" />
      </div>
      <div className="include__spring">
        <Image src={spricng} alt="include" />
      </div>
      <div className="redlight1">
        <Image src={redlight} alt="include" />
      </div>
      <div className="redlight2">
        <Image src={redlight} alt="include" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default Includeai;
