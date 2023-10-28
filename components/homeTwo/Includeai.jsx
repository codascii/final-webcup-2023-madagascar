import Image from "next/image";
import Link from "next/link";
import dround from "/public/img/elements/3dround.png";
import ball3d from "/public/img/elements/ball3d.png";
import blumb from "/public/img/elements/blumb.png";
import include_element from "/public/img/elements/include-element.png";
import null_dimond from "/public/img/elements/null-dimond.png";
import machine from "/public/img/feature/machine.svg";
import robotic from "/public/img/feature/robotic.svg";
import virtual from "/public/img/feature/virtual.svg";

const Includeai = () => {
  return (
    <section className="includeai__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content include__cheack">
              {/* Include element */}
              <div className="threeroune">
                <Image src={dround} alt="img" />
              </div>
              <div className="include__null">
                <Image src={null_dimond} alt="img" />
              </div>
              {/* Include element */}
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="0.5s">
                  Check out our wide range of services including AI
                </h2>
                <p className="wow fadeInUp" data-wow-duration="0.7s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable.
                </p>
              </div>
              <ul className="about__chack">
                <li className="wow fadeInUp" data-wow-duration="0.8s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Advanced Technology</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>100% Security System</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1.1s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Competitive Pricing</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="01.2s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>24 Hours Supports</span>
                </li>
              </ul>
              <div
                className="include__btn wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <Link href="/service-details" className="cmn--btn">
                  <span>See All Services</span>
                </Link>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          {/* col grid */}
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="include__boxes">
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.1s"
              >
                <div className="icnos">
                  <Image src={robotic} alt="icon" />
                </div>
                <div className="content">
                  <h4>Sismomètres Avancés</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
              <div className="inclue__box">
                <div className="icnos">
                  <Image src={machine} alt="icon" />
                </div>
                <div className="content">
                  <h4>Machine Learning</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.3s"
              >
                <div className="icnos">
                  <Image src={virtual} alt="icon" />
                </div>
                <div className="content">
                  <h4>Virtual Reality</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}

      {/* element */}
      <div className="include__elements3d">
        <Image src={ball3d} alt="include" />
      </div>
      <div className="include__elements">
        <Image src={include_element} alt="include" />
      </div>
      <div className="include__blumb">
        <Image src={blumb} alt="include" />
      </div>
      {/* element */}
    </section>
  );
};

export default Includeai;
