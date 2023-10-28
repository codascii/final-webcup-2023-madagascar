import Image from "next/image";
import qualified from "/public/img/about/qualified.png";
import light_elements from "/public/img/elements/light-elements.png";

const Qualified = () => {
  return (
    <section className="qualified__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row align-items-center">
          {/* col */}
          <div className="col-lg-6">
            <div className="qualified__content">
              <div
                className="section__header wow fadeInUp"
                data-wow-duration="2s"
              >
                <h2>
                  Save your time and money by choosing our qualified services
                </h2>
                <p>
                  AI (Artificial Intelligence) and ML (Machine Learning) are
                  closely related fields that are focused on the development of
                  computer systems that can perform tasks that would normally
                  require human intelligence, such as understanding natural
                  language, recognizing images, making decisions, and solving
                  problems.
                </p>
              </div>
              <div className="counting__wrap">
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
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="1.5">
                        1.5
                      </span>
                      <span className="plus__icon">k</span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="counter__items odometer-item">
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="500">
                        500
                      </span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Expert Employees</p>
                </div>
              </div>
            </div>
          </div>
          {/* col */}
          <div className="col-lg-1"></div>
          {/* col */}
          <div className="col-lg-4">
            <div className="qualified__thumb">
              <Image src={qualified} alt="qualified" />
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}

      {/* elements */}
      <div className="light__element1">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element2">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element3">
        <Image src={light_elements} alt="light" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Qualified;
