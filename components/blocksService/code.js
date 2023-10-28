export const serviceOne = `
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
`;

export const serviceTwo = `
<section className="includeai__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content include__cheack">
              {/* Include element */}
              <div className="threeroune">
                <Image src={dround} alt="img" />
              </div>
              <div className="include__null">
                <Image src={null_dimond} alt="img" />
              </div>
              {/* Include element */}
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="0.5s">
                  Check out our wide range of services including AI
                </h2>
                <p className="wow fadeInUp" data-wow-duration="0.7s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable.
                </p>
              </div>
              <ul className="about__chack">
                <li className="wow fadeInUp" data-wow-duration="0.8s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Advanced Technology</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>100% Security System</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="1.1s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Competitive Pricing</span>
                </li>
                <li className="wow fadeInUp" data-wow-duration="01.2s">
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>24 Hours Supports</span>
                </li>
              </ul>
              <div
                className="include__btn wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <Link href="/service-details" className="cmn--btn">
                  <span>See All Services</span>
                </Link>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          {/* col grid */}
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="include__boxes">
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.1s"
              >
                <div className="icnos">
                  <Image src={robotic} alt="icon" />
                </div>
                <div className="content">
                  <h4>Robotic Automation</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
              <div className="inclue__box">
                <div className="icnos">
                  <Image src={machine} alt="icon" />
                </div>
                <div className="content">
                  <h4>Machine Learning</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.3s"
              >
                <div className="icnos">
                  <Image src={virtual} alt="icon" />
                </div>
                <div className="content">
                  <h4>Virtual Reality</h4>
                  <p>
                    Machine learning (ML), a fundamental concept of AI
                    research...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}

      {/* element */}
      <div className="include__elements3d">
        <Image src={ball3d} alt="include" />
      </div>
      <div className="include__elements">
        <Image src={include_element} alt="include" />
      </div>
      <div className="include__blumb">
        <Image src={blumb} alt="include" />
      </div>
      {/* element */}
    </section>
`;

export const serviceThree = `
<section className="includeai__section include__ml__section bgsection pt-120 pb-120">
      <div className="include__aicloud__wrapper">
        {/* container */}
        <div className="container">
          <div className="row justify-content-center align-items-center">
            {/* col grid */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content include__cheack">
                {/* Include element */}
                <div className="threeroune">
                  <Image src={redlight} alt="img" />
                </div>
                <div className="include__null">
                  <Image src={redlight} alt="img" />
                </div>
                {/* Include element */}
                <div className="section__header">
                  <h2 className="wow fadeInUp" data-wow-duration="1.4s">
                    We build AI and ML service solutions
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="1.8s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable.
                  </p>
                </div>
                <ul
                  className="about__chack wow fadeInUp"
                  data-wow-duration="2.1s"
                >
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Advanced Technology</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>100% Security System</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>Competitive Pricing</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="material-symbols-outlined">task_alt</i>
                    </span>
                    <span>24 Hours Supports</span>
                  </li>
                </ul>
                <div
                  className="include__btn wow fadeInUp"
                  data-wow-duration="2.5s"
                >
                  <Link href="/services" className="cmn--btn">
                    <span>See All Services</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="include__boxes include__grid__boxes">
                <div className="row g-4">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 ">
                    <div
                      className="inclue__box mb24 wow fadeInUp"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={robotic} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Robotic Automation</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                    <div
                      className="inclue__box include__box__grid2 wow fadeInDown"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={virtual} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Virtual Reality</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 custom__70">
                    <div
                      className="inclue__box include__box__grid1 mb24 wow fadeInDown"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={machine} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">Machine Learning</Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                    <div
                      className="inclue__box include__box__grid3 wow fadeInUp"
                      data-wow-duration="2.1s"
                    >
                      <div className="icnos">
                        <Image src={cloud} alt="icon" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/services">
                            Ai For Cloud Services
                          </Link>
                        </h4>
                        <p>
                          Machine learning (ML), a fundamental concept of AI
                          research...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* container */}
      </div>
      {/* element */}
      <div className="include__elements">
        <Image src={checkai} alt="include" className="img-fluid" />
      </div>
      <div className="include__spring">
        <Image src={spricng} alt="include" />
      </div>
      <div className="redlight1">
        <Image src={redlight} alt="include" />
      </div>
      <div className="redlight2">
        <Image src={redlight} alt="include" className="img-fluid" />
      </div>
      {/* element */}
    </section>
`;

export const serviceFour = `
<section className="hightlight__section__five bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Section header */}
        <div className="section__header section__center pb__60">
          <h2 className="wow fadeInDown" data-wow-duration="1.5s">
            Highlight service features
          </h2>
          <p className="pb__32 wow fadeInUp" data-wow-duration="1.7s">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
          <Link
            href="/services"
            className="cmn--btn border__btn wow fadeInUp"
            data-wow-duration="1.9s"
          >
            <span>Get Started</span>
          </Link>
        </div>
        {/* Section header */}
        <div className="row">
          {/* col grid */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="highlight__left__wrap include__boxes include__grid__boxes">
              <div
                className="inclue__box wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="content">
                  <h4>Robotic Automation</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
                <div className="icnos">
                  <Image src={robotic} alt="icon" className="img-fluid" />
                </div>
              </div>
              <div
                className="inclue__box include__box__grid2 wow fadeInUp"
                data-wow-duration="2.2s"
              >
                <div className="icnos">
                  <Image src={cloud_icon} alt="img" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>AI For Cloud Services</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="highlight__thumb">
              <Image src={highligt} alt="feature" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-3 col-xl-3 col-lg-3">
            <div className="highlight__right__wrap include__boxes include__grid__boxes">
              <div
                className="inclue__box include__box__grid1 wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="content">
                  <h4>Machine Learning</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
                <div className="icnos">
                  <Image src={machine} alt="icon" className="img-fluid" />
                </div>
              </div>
              <div
                className="inclue__box include__box__grid3 wow fadeInUp"
                data-wow-duration="2.5s"
              >
                <div className="icnos">
                  <Image src={virtual2} alt="icon" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>Ai For Cloud Services</h4>
                  <p>Machine learning (ML), a fundamental concept of AI</p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="j__shape">
        <Image src={j_shape} alt="jshape" className="img-fluid" />
      </div>
      <div className="j__ball1">
        <Image src={ball3d} alt="ball" className="img-fluid" />
      </div>
      <div className="j__ball2">
        <Image src={ball3d} alt="ball" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
`;

export const serviceFive = `
<section className="include__benefits bgsection pt-120 pb-120">
{/* container */}
<div className="container">
  {/* Header section */}
  <div
    className="section__header section__center pb__60 wow fadeInUp"
    data-wow-duration="2s"
  >
    <h2>Benefits Service Features</h2>
    <p>
      AI is the broader concept of machines being able to carry out tasks
      in a way that would normally require human intelligence.
    </p>
  </div>
  {/* Header section */}
  {/* include benefits */}
  <div className="include__benefits__wrap">
    <Slider {...settings} ref={sliderRef}>
      <div className="inclue__benefits__box">
        <div className="icnos">
          <Image src={robotic} alt="icon" />
        </div>
        <div className="content">
          <h4>Robotic Automation</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
      <div className="inclue__benefits__box benefits__box2">
        <div className="icnos">
          <Image src={machine} alt="icon" />
        </div>
        <div className="content">
          <h4>Machine Learning</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
      <div className="inclue__benefits__box benefits__box3">
        <div className="icnos">
          <Image src={virtual} alt="icon" />
        </div>
        <div className="content">
          <h4>Virtual Reality</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
      <div className="inclue__benefits__box">
        <div className="icnos">
          <Image src={robotic} alt="icon" />
        </div>
        <div className="content">
          <h4>Robotic Automation</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
      <div className="inclue__benefits__box benefits__box2">
        <div className="icnos">
          <Image src={machine} alt="icon" />
        </div>
        <div className="content">
          <h4>Machine Learning</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
      <div className="inclue__benefits__box benefits__box3">
        <div className="icnos">
          <Image src={virtual} alt="icon" />
        </div>
        <div className="content">
          <h4>Virtual Reality</h4>
          <p>
            Machine learning (ML), a fundamental concept of AI research...
          </p>
          <Link href="/services" className="benefits__btn">
            <span>Discover More</span>
            <span className="icon">
              <i className="material-symbols-outlined">arrow_right_alt</i>
            </span>
          </Link>
        </div>
      </div>
    </Slider>

    {/* Slider Navigation */}
    <div className="d-flex align-items-center justify-content-center">
      <SliderNavigation sliderRef={sliderRef} />
    </div>
  </div>
  {/* include benefits */}
</div>
{/* container */}

{/* element */}
<div className="bene__element1">
  <Image src={devided_element2} alt="img" className="img-fluid" />
</div>
<div className="bene__lockyello">
  <Image src={devided_lockyello} alt="img" className="img-fluid" />
</div>
<div className="bene__blump">
  <Image src={round_devided} alt="img" className="img-fluid" />
</div>
<div className="bene__blump2">
  <Image src={round_devided} alt="img" className="img-fluid" />
</div>
{/* element */}
</section>
`;
