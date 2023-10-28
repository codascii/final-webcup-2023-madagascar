import Image from "next/image";
import Link from "next/link";
import checkai from "/public/img/elements/checkai.png";
import green from "/public/img/elements/green.png";
import ponkhi from "/public/img/elements/ponkhi.png";

const QualifiedTwo = () => {
  return (
    <section className="qualified__section make__service__section bg__white pt-120 pb-120">
      {/* ai robot */}
      <div className="airobot">
        <Image src={ponkhi} alt="robot" className="img-fluid" />
      </div>
      {/* ai robot */}
      {/* container */}
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* col */}
          <div className="col-lg-5">
            <div className="make__service">
              <div className="counting__wrap">
                <div className="counter__items odometer-item">
                  <div className="counter__content counter__content__green">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="1.9">
                        1.9
                      </span>
                      <span className="plus__icon">k</span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="counting__middle">
                  <div className="counter__items odometer-item">
                    <div className="counter__content">
                      <div className="cont d-flex align-items-center">
                        <span className="odometer" data-odometer-final="2.3">
                          2.3
                        </span>
                        <span className="plus__icon">k</span>
                        <span className="plus__icon">+</span>
                      </div>
                    </div>
                    <p>Completed Projects</p>
                  </div>
                  <div className="counter__items odometer-item">
                    <div className="counter__content counter__content__red">
                      <div className="cont d-flex align-items-center">
                        <span className="odometer" data-odometer-final="450">
                          450
                        </span>
                        <span className="plus__icon">+</span>
                      </div>
                    </div>
                    <p>Expert Employees</p>
                  </div>
                </div>
                <div className="counter__items odometer-item">
                  <div className="counter__content counter__yellow">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="67">
                        67
                      </span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Awards Wan</p>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col-lg-6">
            <div className="qualified__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  Professional Services that Make Your Life Easier
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.5s">
                  AI is the broader concept of machines being able to carry out
                  tasks in a way that would normally require human intelligence.
                  This can include things like image recognition, speech
                  recognition, and decision making. ML is a specific type of AI
                  that involves the use of algorithms that can learn from data.
                </p>
              </div>
              <Link
                href="/about-three"
                className="cmn--btn wow fadeInUp"
                data-wow-duration="2.3s"
              >
                <span>About us</span>
              </Link>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="textgreen__light">
        <Image src={green} alt="light" />
      </div>
      <div className="light__elegr">
        <Image src={green} alt="light" />
      </div>
      <div className="light__element2gr">
        <Image src={green} alt="light" />
      </div>
      <div className="light__element3">
        <Image src={green} alt="light" />
      </div>
      <div className="checkai">
        <Image src={checkai} alt="ai" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default QualifiedTwo;
