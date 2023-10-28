import Image from "next/image";
import Link from "next/link";
import feature_ali from "/public/img/elements/feature-ali.png";
import feature_rocket from "/public/img/elements/feature-rocket.png";
import light_elements from "/public/img/elements/light-elements.png";
import ai from "/public/img/feature/ai.png";
import cloud from "/public/img/feature/cloud.png";
import feature from "/public/img/feature/feature.png";
import machine from "/public/img/feature/machine.png";
import man from "/public/img/feature/man.png";
import neurology from "/public/img/feature/neurology.png";
import virtual from "/public/img/feature/virtual.png";

const Feature = () => {
  return (
    <section className="feature__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Section header */}
        <div
          className="section__header section__center pb__60 wow fadeInUp"
          data-wow-duration="2s"
        >
          <h2>Key Services Features</h2>
          <p className="pb__32">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
          <Link href="/service-details" className="cmn--btn border__btn">
            <span>Get Started</span>
          </Link>
        </div>
        {/* Section header */}
        <div className="row g-5 justify-content-center align-items-center">
          {/* col grid */}
          <div className="col-sm-6 col-xl-4">
            <div className="feature__component__wrap feature__right__align">
              <div
                className="feature__items wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="icon">
                  <Image src={man} alt="icon" />
                </div>
                <div className="content">
                  <h4>Robotic Automation</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
              <div
                className="feature__items pl__space wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="icon">
                  <Image src={ai} alt="icon" />
                </div>
                <div className="content">
                  <h4>Image Processing</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
              <div
                className="feature__items wow fadeInUp"
                data-wow-duration="2.2s"
              >
                <div className="icon">
                  <Image src={cloud} alt="icon" />
                </div>
                <div className="content">
                  <h4>Al For Cloud Services</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-8 order-sm-3 order-xl-2 col-xl-4">
            <div className="feature__thumb">
              <Image src={feature} alt="feature" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-sm-6 order-sm-2 col-xl-4">
            <div className="feature__component__wrap">
              <div
                className="feature__items wow fadeInUp"
                data-wow-duration="2.4s"
              >
                <div className="icon">
                  <Image src={machine} alt="icon" />
                </div>
                <div className="content">
                  <h4>Machine Learning</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
              <div
                className="feature__items pr__space wow fadeInUp"
                data-wow-duration="2.6s"
              >
                <div className="icon">
                  <Image src={virtual} alt="icon" />
                </div>
                <div className="content">
                  <h4>Virtual Reality</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
              <div
                className="feature__items wow fadeInUp"
                data-wow-duration="2.8s"
              >
                <div className="icon">
                  <Image src={neurology} alt="icon" />
                </div>
                <div className="content">
                  <h4>Deep Learning</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI research
                    since...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>

      <div className="feature__rocket">
        <Image src={feature_rocket} alt="rocket" />
      </div>
      <div className="feature__ai">
        <Image src={feature_ali} alt="rocket" />
      </div>
      <div className="light__element1">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element2">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element3">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element4">
        <Image src={light_elements} alt="light" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Feature;
