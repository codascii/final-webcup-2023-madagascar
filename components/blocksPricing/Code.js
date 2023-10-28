export const planOne = `
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
`;

export const planTwo = `
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
            <input
              className="form-check-input"
              type="checkbox"
              required
            />
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
`;

export const planThree = `
    <section className="plan__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row g-5">
          {/* col grid */}
          <div className="col-xl-6 col-lg-10">
            <div
              className="plan__content__left wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="section__header pb__40">
                <h2>Basic and Premium plans at different levels</h2>
                <p className="pb__32">
                  AI is the broadesr concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
                <p className="pb__32">
                  ML, on the other hand, is a specific subfield of AI that is
                  focused on the development of algorithms and statistical
                  models that allow systems to automatically improve their
                  performance with experience
                </p>
                <p>
                  These algorithms and models can be used for a variety of tasks
                  such as prediction, classNameification, and clustering.
                </p>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-6">
            <div className="plan__wrapper position-relative z-1">
              <Slider {...settings} ref={sliderRef}>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Basic</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <i className="material-symbols-outlined">
                          add_business
                        </i>
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
                    </div>
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
                      <Link
                        href="/pricing"
                        className="cmn--btn border__btn"
                      >
                        <span>Get Started Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items premium__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <i className="material-symbols-outlined">add_card</i>
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
                    </div>
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
                      <Link
                        href="/pricing"
                        className="cmn--btn border__btn"
                      >
                        <span>Start 3 Days Free Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items">
                  <div className="plan__head">
                    <h4>Basic</h4>
                    <p>For personal use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <Image src={addbusness} alt="icon" />
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        00.00
                      </h3>
                    </div>
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
                      <Link
                        href="/pricing"
                        className="cmn--btn border__btn"
                      >
                        <span>Get Started Free</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="plan__items premium__items">
                  <div className="plan__head">
                    <h4>Premium</h4>
                    <p>For Multi use</p>
                  </div>
                  <div className="content__wrap">
                    <div className="prices__area">
                      <div className="icon">
                        <Image src={addcard} alt="icon" />
                      </div>
                      <h3>
                        <span className="dollar">$</span>
                        25.00
                      </h3>
                    </div>
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
                      <Link
                        href="/pricing"
                        className="cmn--btn border__btn"
                      >
                        <span>Start 3 Days Free Trial</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>

              <SliderNavigation sliderRef={sliderRef} />
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="plan__ai">
        <Image src={feature_ali} alt="rocket" />
      </div>
      <div className="plan__ball">
        <Image src={bigball_elements} alt="rocket" />
      </div>
      <div className="plan__man">
        <Image src={planrobot} alt="rocket" className="img-fluid" />
      </div>
      <div className="light__element1">
        <Image src={light_elements} alt="light" />
      </div>
      <div className="light__element2">
        <Image src={light_elements} alt="light" />
      </div>
      {/* elements */}
    </section>
`;

export const planFour = `
    <section className="plan__section plan__section__three bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* header */}
        <div className="section__header section__center pb__40">
          <h2 className="wow fadeInUp" data-wow-duration="2.2s">
            Pricing Information
          </h2>
          <p className="wow fadeInUp" data-wow-duration="2.2s">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
        </div>
        {/* header */}
        {/* pricing save */}
        <div className="plan__save pb__60 fadeInDown" data-wow-duration="2.5s">
          <span className="month">Monthly</span>
          <div className="yearly__bar form-switch">
            <input className="form-check-input" type="checkbox" />
          </div>
          <h5>
            Yearly <span>(Save 30%)</span>
          </h5>
        </div>
        {/* pricing save */}
        <div className="table__main wow fadeInUp" data-wow-duration="2.9s">
          <table className="pricing__table center">
            <thead>
              <tr>
                <th></th>
                <th>
                  <span className="title">Basic</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">15.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Premimum</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">25.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Corporate</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">35.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Business</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">45.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project</td>
                <td>1</td>
                <td>5</td>
                <td>20</td>
                <td>90</td>
              </tr>
              <tr>
                <td>API Accrss</td>
                <td>100k</td>
                <td>200k</td>
                <td>300k</td>
                <td>900k</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>100MB</td>
                <td>200MB</td>
                <td>300MB</td>
                <td>900MB</td>
              </tr>
              <tr>
                <td>Weekly Reports</td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
              </tr>
              <tr>
                <td>24/7 Support</td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link href="#" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="digital__ball">
        <Image src={j_shape} alt="img" className="img-fluid" />
      </div>
      <div className="digital__ballelement">
        <Image src={ball_element} alt="img" className="img-fluid" />
      </div>
      <div className="digital__round">
        <Image src={ball3d} alt="img" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
`;

export const planFive = `
<section className="plan__section plan__section__three bgsection pt-120 pb-120">
{/* container */}
<div className="container">
  <div className="row align-items-center justify-content-between">
    {/* col grid */}
    <div className="col-xxl-6 col-xl-7">
      <div className="plan__wrapper position-relative z-1">
        <Slider {...settings} ref={sliderRef}>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Free</h4>
              <p>For personal use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  00.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Get Started Free</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Premium</h4>
              <p>For Multi use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  25.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Start 3 Days Gree Trial</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Free</h4>
              <p>For personal use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  00.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Get Started Free</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Premium</h4>
              <p>For Multi use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  25.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Start 3 Days Gree Trial</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Free</h4>
              <p>For personal use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  00.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Get Started Free</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="plan__items">
            <div className="plan__head">
              <h4>Premium</h4>
              <p>For Multi use</p>
            </div>
            <div className="content__wrap">
              <div className="prices__area">
                <h3>
                  <span className="dollar">$</span>
                  25.00
                </h3>
                <span className="pricetext">/month</span>
              </div>
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
                <Link
                  href="/pricing"
                  className="cmn--btn border__btn"
                >
                  <span>Start 3 Days Gree Trial</span>
                </Link>
              </div>
            </div>
          </div>
        </Slider>

        {/* Slider Navigation */}
        <SliderNavigation sliderRef={sliderRef} />
      </div>
    </div>
    {/* col grid */}
    <div className="col-xxl-5 col-xl-5 col-lg-10">
      <div className="plan__content__left">
        <div className="section__header pb__40">
          <h2 className="wow fadeInUp" data-wow-duration="1.2s">
            Advanced models and pricing methods
          </h2>
          <p className="pb__32 wow fadeInUp" data-wow-duration="1.5s">
            AI is the broader concept of machines being able to perform
            tasks that would normally require human intelligence, such as
            visual perception, speech recognition, and language
            translation.
          </p>
          <p className="wow fadeInUp" data-wow-duration="1.7s">
            ML, on the other hand, is a specific subfield of AI that is
            focused on the development of algorithms and statistical
            models that allow systems to automatically improve their
            performance with experience
          </p>
        </div>
      </div>
    </div>
    {/* col grid */}
  </div>
</div>
{/* container */}
{/* elements */}
<div className="plan__aithree">
  <Image src={feature_ali} alt="rocket" className="img-fluid" />
</div>
<div className="plan__ballr">
  <Image src={bigball_elements} alt="rocket" className="img-fluid" />
</div>
<div className="light__element1">
  <Image src={light_elements} alt="light" className="img-fluid" />
</div>
<div className="light__element2">
  <Image src={light_elements} alt="light" className="img-fluid" />
</div>
<div className="light__real">
  <Image src={real} alt="light" className="img-fluid" />
</div>
{/* elements */}
</section>
`;
