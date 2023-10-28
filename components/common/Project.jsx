import Image from "next/image";
import Link from "next/link";
import map from "/public/img/elements/map.png";

const Project = ({ clss = "bg__white" }) => {
  return (
    <section className={`project__count ${clss} pt-120 pb-120`}>
      {/* wrapper */}
      <div className="project__count__wrap">
        {/* container */}
        <div className="container">
          {/* project-head */}
          <div className="project__head">
            <div className="section__header section__center pb__60">
              <h2 className="wow fadeInUp" data-wow-duration="1.1s">
                We have successfully completed{" "}
                <span className="basecon">3k+</span> projects annually and
                counting
              </h2>
              <p className="wow fadeInUp" data-wow-duration="1.4s">
                AI is the broader concept of machines being able to carry out
                tasks in a way that would normally require human intelligence.
              </p>
            </div>
          </div>
          {/* project-head */}
          <div className="row g-5 justify-content-center align-items-center">
            {/* col grid */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="project__count__items">
                <div className="icon wow fadeInUp" data-wow-duration="1s">
                  <i className="material-symbols-outlined">manage_accounts</i>
                </div>
                <div
                  className="counter__items odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="3.6">
                        3.6
                      </span>
                      <span className="plus__icon">k</span>
                    </div>
                  </div>
                  <p>Completed Projects</p>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div
                className="project__count__items wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="icon icon2">
                  <i className="material-symbols-outlined">thumb_up</i>
                </div>
                <div
                  className="counter__items counter__items2 odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="2.7">
                        2.7
                      </span>
                      <span className="plus__icon">k</span>
                    </div>
                  </div>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="project__count__items">
                <div className="icon icon3 wow fadeInUp" data-wow-duration="1s">
                  <i className="material-symbols-outlined">group</i>
                </div>
                <div
                  className="counter__items counter__items3 odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="457">
                        457
                      </span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Expert Employees</p>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="project__count__items">
                <div className="icon icon4 wow fadeInUp" data-wow-duration="1s">
                  <i className="material-symbols-outlined">military_tech</i>
                </div>
                <div
                  className="counter__items counter__items4 odometer-item wow fadeInDown"
                  data-wow-duration="2s"
                >
                  <div className="counter__content">
                    <div className="cont d-flex align-items-center">
                      <span className="odometer" data-odometer-final="78">
                        78
                      </span>
                      <span className="plus__icon">+</span>
                    </div>
                  </div>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-6">
              <div
                className="project__qustion wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="project__qustion__left">
                  <h5>Have any question about us?</h5>
                  <p>Don&#39;t hesitate to contact us.</p>
                </div>
                <div className="project__qustion__right">
                  <Link href="/contact" className="cmn--btn">
                    <span>Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* container */}

        {/* porject efect */}
        <div className="project__map">
          <Image src={map} alt="img" />
        </div>
        {/* porject efect */}
      </div>
      {/* wrapper */}
    </section>
  );
};

export default Project;
