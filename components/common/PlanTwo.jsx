import Image from "next/image";
import Link from "next/link";
import pri1 from "/public/img/elements/pri1.png";
import pri2 from "/public/img/elements/pri2.png";

const PlanTwo = () => {
  return (
    <section className="plan__section__four bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* real head */}
        <div className="project__head wow fadeInUp" data-wow-duration="2s">
          <div className="section__header section__center pb__40">
            <h2>Our pricing features</h2>
            <p>
              AI is the broader concept of machines being able to carry out
              tasks in a way that would normally require human intelligence.
            </p>
          </div>
        </div>
        {/* real head */}

        {/* pricing save */}
        <div className="plan__save__four pb__60">
          <div className="pricing__chaek__items">
            <input
              className="form-check-input"
              type="radio"
              name="pricing1"
              id="pri1"
              required
            />
            <label className="form-check-label" htmlFor="pri1">
              Monthly payment
            </label>
          </div>
          <div className="pricing__chaek__items">
            <input
              className="form-check-input"
              type="radio"
              name="pricing1"
              id="pri2"
              required
            />
            <label className="form-check-label" htmlFor="pri2">
              Annualy payment
            </label>
          </div>
          <div className="pricing__sav">
            Save 20%
            <div className="icon">
              <Image src={pri1} alt="shape" className="img-fluid" />
            </div>
            <div className="icon icon2">
              <Image src={pri2} alt="shape" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* pricing save */}
        <div className="row g-4 justify-content-center">
          {/* col grid */}
          <div
            className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="2.1s"
          >
            <div className="plan__items plan__items__two d-grid justify-content-start">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">add_business</i>
                  </div>
                  <div className="content__small">
                    <h4>Free</h4>
                    <h3>
                      <span className="dollar">$</span>
                      00.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="content__wrap d-grid">
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
            className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="2.4s"
          >
            <div className="plan__items plan__items__two plan__items__two1 d-grid">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">local_mall</i>
                  </div>
                  <div className="content__small">
                    <h4>Basic</h4>
                    <h3 className="d-flex gap-1">
                      <span className="dollar">$</span>
                      30.00
                    </h3>
                  </div>
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
            className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="2.6s"
          >
            <div className="plan__items plan__items__two plan__items__two2 d-grid">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">redeem</i>
                  </div>
                  <div className="content__small">
                    <h4>Premium</h4>
                    <h3>
                      <span className="dollar">$</span>
                      60.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="content__wrap d-grid">
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
          <div
            className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 wow fadeInDown"
            data-wow-duration="2.8s"
          >
            <div className="plan__items plan__items__two plan__items__two3 d-grid">
              <div className="plan__valu__left">
                <div className="prices__area">
                  <div className="icon">
                    <i className="material-symbols-outlined">add_card</i>
                  </div>
                  <div className="content__small">
                    <h4>Busness</h4>
                    <h3>
                      <span className="dollar">$</span>
                      90.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="content__wrap d-grid">
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

      {/* elements */}
    </section>
  );
};

export default PlanTwo;
