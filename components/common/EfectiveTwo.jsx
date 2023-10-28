import Image from "next/image";
import actionable from "/public/img/efective/actionable.png";
import braindata from "/public/img/efective/braindata.png";
import dataprocessing from "/public/img/efective/dataprocessing.png";
import datastored from "/public/img/efective/datastored.png";
import efectsystem from "/public/img/efective/efectsystem.png";
import dround from "/public/img/elements/3dround.png";
import efect_ball from "/public/img/elements/efect-ball.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";

const EfectiveTwo = () => {
  return (
    <section className="efective__section efective__system__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between">
          {/* col grid */}
          <div className="col-xl-6 col-lg-7">
            <div className="efective__content efective__data__system">
              <div
                className="section__header pb__32 wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>Detailed Guide on How the System Works and Operates</h2>
                <p>
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
              </div>
              <div className="efective__data__wrapper">
                <div className="row g-3">
                  <div
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                    data-wow-duration="2.1s"
                  >
                    <div className="efect__data__iems d-grid">
                      <div className="icons">
                        <Image
                          src={braindata}
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <h5>Data Generated</h5>
                        <p>
                          The integration of AI and ML is leading to the
                          creation of intelligent systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                    data-wow-duration="2.4s"
                  >
                    <div className="efect__data__iems d-grid">
                      <div className="icons icons2">
                        <Image src={datastored} alt="icon" />
                      </div>
                      <div className="content">
                        <h5>Data Stored</h5>
                        <p>
                          The integration of AI and ML is leading to the
                          creation of intelligent systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                    data-wow-duration="2.6s"
                  >
                    <div className="efect__data__iems d-grid">
                      <div className="icons icons3">
                        <Image src={dataprocessing} alt="icon" />
                      </div>
                      <div className="content">
                        <h5>Data Processing</h5>
                        <p>
                          The integration of AI and ML is leading to the
                          creation of intelligent systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 wow fadeInUp"
                    data-wow-duration="2.8s"
                  >
                    <div className="efect__data__iems d-grid">
                      <div className="icons icons4">
                        <Image src={actionable} alt="icon" />
                      </div>
                      <div className="content">
                        <h5>Actionable Insights</h5>
                        <p>
                          The integration of AI and ML is leading to the
                          creation of intelligent systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="efective__system">
              <Image src={efectsystem} alt="efective" />
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="efect__element1">
        <Image src={efect_ball} alt="img" />
      </div>
      <div className="efect__three">
        <Image src={dround} alt="img" />
      </div>
      <div className="efect__rount">
        <Image src={efect_rount} alt="img" />
      </div>
      <div className="efect__cross">
        <Image src={efect_cross2} alt="img" />
      </div>
      {/* elements */}
    </section>
  );
};

export default EfectiveTwo;
