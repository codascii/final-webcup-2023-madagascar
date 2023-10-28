import Image from "next/image";
import Link from "next/link";
import about5 from "/public/img/about/about5.png";
import bulp from "/public/img/banner/bulp.png";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import null_dimond from "/public/img/elements/null-dimond.png";

const AboutAIFive = () => {
  return (
    <section className="about__section__five bg__white pt-120 pb-120">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* about content */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  Revolutionizing industries with cutting-edge AI technology
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
                className="about__chack__five pb__32 wow fadeInUp"
                data-wow-duration="2.8s"
              >
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                      The Most Personalized Object Detection
                    </span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                      We Create The Most Realistic AI
                    </span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                      Innovative Machine Learning Products
                    </span>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                  </span>
                </li>
              </ul>
              <Link href="/about-five" className="cmn--btn">
                <span>Read More</span>
              </Link>
            </div>
          </div>
          {/* about content */}
          {/* about thumb */}
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-9 col-sm-9">
            <div className="about__thumb">
              <Image src={about5} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* element */}
      <div className="bulp__light">
        <Image src={bulp} alt="bulp" className="img-fluid" />
      </div>
      <div className="threed__ball">
        <Image src={ball3d} alt="img" className="img-fluid" />
      </div>
      <div className="global__ball">
        <Image src={ball_element} alt="bal" className="img-fluid" />
      </div>
      <div className="null__five">
        <Image src={null_dimond} alt="null" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default AboutAIFive;
