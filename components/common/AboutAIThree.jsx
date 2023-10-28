import Image from "next/image";
import Link from "next/link";
import about4 from "/public/img/about/about4.png";
import devided_element2 from "/public/img/banner/devided-element2.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";

const AboutAIThree = () => {
  return (
    <section className="about__section about__section__four bg__white pt-80 pb-120">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* about content */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  Empower your creativity with artificial intelligence
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.5s">
                  Artificial intelligence, or AI, is the simulation of human
                  intelligence in machines that are programmed to think and
                  learn. The field of AI research began in the 1950s and has
                  since evolved to encompass a wide range of technologies and
                  applications.
                </p>
              </div>
              <ul
                className="empower__list pb__40 wow fadeInUp"
                data-wow-duration="2.7s"
              >
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Computer Vision</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Content Services</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Digital Publishing</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Data Enhancement</span>
                </li>
              </ul>
              <Link
                href="/about-four"
                className="cmn--btn wow fadeInUp"
                data-wow-duration="2.9"
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
              <Image src={about4} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* elements */}
      <div className="empower__element1">
        <Image src={devided_element2} alt="img" className="img-fluid" />
      </div>
      <div className="empower__lockyello">
        <Image src={devided_lockyello} alt="img" className="img-fluid" />
      </div>
      <div className="empower__blump">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      <div className="empower__blump2">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default AboutAIThree;
