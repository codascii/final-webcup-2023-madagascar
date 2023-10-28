import Image from "next/image";
import Link from "next/link";
import blumb from "/public/img/elements/blumb.png";
import null_dimond from "/public/img/elements/null-dimond.png";
import real from "/public/img/elements/real.png";

const PlanFour = () => {
  return (
    <section className="plan__section plan__section__two bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* real head */}
        <div className="project__head wow fadeInUp" data-wow-duration="2s">
          <div className="section__header section__center pb__40">
            <h2>Pricing Information</h2>
            <p>
              AI is the broader concept of machines being able to carry out
              tasks in a way that would normally require human intelligence.
            </p>
          </div>
        </div>
        {/* real head */}
        {/* pricing save */}
        <div className="plan__save pb__60">
          <span className="month">Monthly</span>
          <div className="yearly__bar form-switch">
            <input className="form-check-input" type="checkbox" required />
          </div>
          <h5>
            Yearly <span>(Save 30%)</span>
          </h5>
        </div>
        {/* pricing save */}
        <div className="row g-4 justify-content-center">
          {/* col grid */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2.1"
          >
            <div className="plan__items plan__items__two">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">add_business</i>
                  </div>
                  <h4>Free</h4>
                  <h3>
                    <span className="dollar">$</span>
                    00.00
                  </h3>
                  <h6>/15 days</h6>
                </div>
              </div>
              <div className="content__wrap">
                <ul className="plan__list">
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Full acess library</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>One user</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>1 Analytic Reports</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined danger">
                        dangerous
                      </i>
                    </span>
                    <span>5 Free optimization</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined danger">
                        dangerous
                      </i>
                    </span>
                    <span>Hotline supports 24/7</span>
                  </li>
                </ul>
                <div className="price__btn">
                  <Link href="/pricing" className="cmn--btn border__btn">
                    <span>Get Started Free</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2.4"
          >
            <div className="plan__items plan__items__two plan__items__two1">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">redeem</i>
                  </div>
                  <h4>Pro</h4>
                  <h3>
                    <span className="dollar">$</span>
                    60.00
                  </h3>
                  <h6>/15 days</h6>
                </div>
              </div>
              <div className="content__wrap">
                <ul className="plan__list">
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Full acess library</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>One user</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>1 Analytic Reports</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">dangerous</i>
                    </span>
                    <span>5 Free optimization</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined danger">
                        dangerous
                      </i>
                    </span>
                    <span>Hotline supports 24/7</span>
                  </li>
                </ul>
                <div className="price__btn">
                  <Link href="/pricing" className="cmn--btn border__btn">
                    <span>3 Days Free</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-duration="2.7"
          >
            <div className="plan__items plan__items__two plan__items__two2">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">add_business</i>
                  </div>
                  <h4>Premium</h4>
                  <h3>
                    <span className="dollar">$</span>
                    90.00
                  </h3>
                  <h6>/15 days</h6>
                </div>
              </div>
              <div className="content__wrap">
                <ul className="plan__list">
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Full acess library</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>One user</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>1 Analytic Reports</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">dangerous</i>
                    </span>
                    <span>5 Free optimization</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">dangerous</i>
                    </span>
                    <span>Hotline supports 24/7</span>
                  </li>
                </ul>
                <div className="price__btn">
                  <Link href="/pricing" className="cmn--btn border__btn">
                    <span>Get Started Free</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="plan__ball">
        <Image src={real} alt="rocket" />
      </div>
      <div className="light__threed">
        <Image src={null_dimond} alt="img" />
      </div>
      <div className="light__element2">
        <Image src={blumb} alt="light" />
      </div>
      {/* elements */}
    </section>
  );
};

export default PlanFour;
