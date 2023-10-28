export const heroOne = `
<section className="banner__section bannerbg">
    <div className="banner__bgmask">
    <Image src={boxElement} alt="mask" className="img-fluid" />
    </div>

    <div className="container">
    <div className="banner__wrapper">
        <div className="row g-4  justify-content-between">
        <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="banner__content">
            <div className="content__box">
                <span className="d3 mb-0 text-white">Unleash the</span>
                <span className="d3 text-white">
                potential of <span className="theme">AI</span> and{" "}
                <span className="theme2">machine</span> learning
                </span>
                <p className="text-white">
                Machine learning algorithms build a model based on sample
                data, known as training data, in order to make predictions
                or decisions...
                </p>
                <div className="btg__grp">
                <Link href="/signin" className="cmn--btn">
                    <span>Get Started</span>
                </Link>
                <button
                    // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
                    className="play__btn video-btn bg-transparent border-0 text-white"
                >
                    <span className="play__icon">
                    <i className="material-symbols-outlined">play_arrow</i>
                    </span>
                    <span>Watch Intro Video</span>
                </button>
                </div>
            </div>
            <div className="ai__text">
                <Image src={t_element} alt="ai" className="img-fluid" />
            </div>
            <div className="ai__elements">
                <Image src={ai_element} alt="ai" className="img-fluid" />
            </div>
            </div>
        </div>
        <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8">
            <div className="banner__thumb">
            <div className="thumb">
                <Image src={banner1} alt="banner" className="img-fluid" />
            </div>
            <div className="rocket__element">
                <Image
                src={rocket_element}
                alt="rocket"
                className="img-fluid"
                />
            </div>
            </div>
        </div>
        <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
        </div>
    </div>
    </div>

    <div className="ball__element">
        <Image src={ball_element} alt="ball" className="img-fluid" />
    </div>
    <div className="banner__mask">
        <Image src={shape_element1} alt="mask" className="img-fluid" />
    </div>
    <div className="dark__mask d-none">
        <Image src={banner_shape1_dark} alt="mask" className="img-fluid" />
    </div>
    <div className="light__element1">
        <Image src={light_elements} alt="light" className="img-fluid" />
    </div>
    <div className="light__element2">
        <Image src={light_elements} alt="light" className="img-fluid" />
    </div>
    <div className="light__element3">
        <Image src={light_elements} alt="light" className="img-fluid" />
    </div>
    <div className="light__element4">
        <Image src={light_elements} alt="light" className="img-fluid" />
    </div>
    <div className="light__element5">
        <Image src={light_elements} alt="light" className="img-fluid" />
    </div>
</section>
`;

export const heroTwo = `
  <section className="banner__section banner__section__two bannerbg">
      {/* Mask */}
      <div className="banner__bgmask">
        <Image src={box_element} alt="mask" />
      </div>
      {/* Mask */}
      {/* Container */}
    <div className="container">
      <div className="banner__wrapper">
        <div className="row g-4  justify-content-between">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="banner__content">
              <div className="content__box">
                <span className="d3 mb-0 text-white">Revolutionize your</span>
                <span className="d3 text-white">
                  business with <span className="theme">AI</span>
                  <span className="theme2"> machines</span>
                </span>
                <p className="text-white">
                  Machine learning algorithms build a model based on sample
                  data, known as training data, in order to make predictions
                  or decisions...
                </p>
                <div className="btg__grp">
                  <Link href="/signup" className="cmn--btn">
                    <span>Get Started</span>
                  </Link>
                  <button
                    // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
                    className="play__btn video-btn bg-transparent border-0 text-white"
                  >
                    <span className="play__icon">
                      <i className="material-symbols-outlined">play_arrow</i>
                    </span>
                    <span>Watch Intro Video</span>
                  </button>
                </div>
              </div>
              <div className="aitext2">
                <Image src={aitext2} alt="ai" />
              </div>
              <div className="ball3d">
                <Image src={ball3d} alt="ball3d" />
              </div>
              <div className="banner3__two">
                <Image src={dround} alt="ball3d" />
              </div>
              <div className="banner__blump">
                <Image src={blumb} alt="ball3d" />
              </div>
            </div>
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-8">
            <div className="banner__thumb">
              <div className="thumb">
                <Image
                  src={banner2}
                  alt="banner"
                  height={isDesktopOrLaptop ? 610 : 710}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Container */}
    {/* Elements */}
    <div className="banner__mask">
      <Image src={banner_shape2} alt="mask" className="img-fluid" />
    </div>
    <div className="dark__mask d-none">
      <Image src={banner_shape2dark} alt="mask" />
    </div>
    <div className="banner__ai2">
      <Image src={feature_ali} alt="ai" />
    </div>
    <div className="banner__checkai">
      <Image src={checkai} alt="ai" />
    </div>
    <div className="banner__nulldimond">
      <Image src={null_dimond} alt="ai" />
    </div>
    {/* Elements */}
  </section>
`;

export const heroThree = `
    <section className="banner__section banner__section__three bannerbg">
      {/* Mask */}
      <div className="banner__bgmask">
        <Image src={box_element} alt="mask" />
      </div>
      {/* Mask */}
      {/* banner 3 wrapper */}
      <div className="banner3__content__wrapper">
        {/* Container */}
        <div className="container-fluid">
          <div className="banner__wrapper">
            <div className="row justify-content-center  align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                <div className="banner3__left__shape">
                  <Image src={banner3left} alt="banner" className="img-fluid" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="banner__content">
                  <div className="content__box text-white">
                    <span className="d3 mb-0">
                      <span className="theme">AI</span> and{" "}
                      <span className="theme2">machine</span>
                    </span>
                    <span className="d3">Learning for Smart Systems</span>
                    <p>
                      Machine learning algorithms build a model based on sample
                      data, known as training data, in order to make predictions
                      or decisions...
                    </p>
                    <div className="btg__grp">
                      <Link href="/signup" className="cmn--btn">
                        <span>Get Started</span>
                      </Link>
                      <button
                        // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
                        className="play__btn video-btn bg-transparent border-0 text-white"
                      >
                        <span className="play__icon">
                          <i className="material-symbols-outlined">
                            play_arrow
                          </i>
                        </span>
                        <span>Watch Intro Video</span>
                      </button>
                    </div>
                  </div>
                  <div className="ai__text">
                    <Image src={aitext2} alt="ai" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                <div className="banner3__left__shape">
                  <Image
                    src={banner3right}
                    alt="banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container */}
      </div>
      {/* banner 3 wrapper */}
      {/* Elements */}
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
      <div className="light__element5">
        <Image src={light_elements} alt="light" />
      </div>
      {/* Elements */}
    </section>
`;

export const heroFour = `
  <section className="banner__section banner__section__four  bannerbg">
      {/* Mask */}
      <div className="banner__bgmask">
        <Image src={box_element} alt="mask" />
      </div>
      {/* Mask */}
      {/* Container */}
      <div className="container">
        <div className="banner__wrapper">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="banner__content">
                <div className="content__box text-white">
                  <span className="d3 mb-0">Maker of AI and</span>
                  <span className="d3">
                    <span className="rounded">
                      machine
                      <svg
                        viewBox="0 0 305 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M303 24.3836C288.692 17.9436 268.61 12.5665 244.918 8.83439C220.687 5.01763 193.058 3.00066 165.022 3C122.09 3.00262 81.644 7.61135 51.1299 15.9765C36.1191 20.0951 24.311 24.9046 16.0332 30.2731C7.38213 35.8798 2.99603 41.8441 3 48.0007C2.99603 54.1572 7.38213 60.1209 16.0332 65.7276C28.439 73.7672 48.8743 80.5891 75.1254 85.455C101.756 90.3899 132.84 92.9993 165.018 93C192.98 93 220.55 90.9922 244.744 87.1932C268.39 83.4781 288.46 78.1253 302.788 71.7135"
                          stroke="#EDCB50"
                          strokeWidth="5"
                        />
                      </svg>
                    </span>{" "}
                    learning products
                  </span>
                  <p>
                    Machine learning algorithms build a model based on sample
                    data, known as training data, in order to make predictions
                    or decisions...
                  </p>
                  <div className="btg__grp">
                    <Link href="/signup" className="cmn--btn">
                      <span>Get Started</span>
                    </Link>
                    <button
                      // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
                      className="play__btn video-btn bg-transparent border-0 text-white"
                    >
                      <span className="play__icon">
                        <i className="material-symbols-outlined">play_arrow</i>
                      </span>
                      <span>Watch Intro Video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-4 col-lg-4 ">
              <div className="banner__thumb">
                <div className="thumb">
                  <Image src={banner4} alt="banner" className="img-fluid" />
                </div>
                <div className="banner__airound">
                  <Image src={banner_round} alt="round" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
      {/* elements */}
      <div className="devided__round">
        <Image src={devided_element} alt="img" className="img-fluid" />
      </div>
      <div className="devided__lock1">
        <Image src={devided_lock} alt="img" />
      </div>
      <div className="devided__lock2">
        <Image src={devided_lockyello} alt="img" />
      </div>
      <div className="devided__blump">
        <Image src={round_devided} alt="img" />
      </div>
      {/* elements */}
    </section>
`;

export const heroFive = `
<section className="banner__section banner__section__five bannerbg">
{/* Mask */}
<div className="banner__bgmask">
  <Image src={box_element} alt="mask" className="img-fluid" />
</div>
{/* Mask */}
{/* Container */}
<div className="container">
  <div className="banner__wrapper">
    <div className="row g-4  justify-content-between">
      <div className="col-xxl-6 col-xl-6 col-lg-6">
        <div className="banner__content">
          <div className="content__box text-white">
            <span className="d3 mb-0">
              <svg
                viewBox="0 0 61 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.7201 47.3052C30.2929 47.718 24.5306 49.5423 18.3829 51.2019C17.1823 51.5262 16.4551 52.7004 16.7527 53.8251C17.0506 54.9504 18.269 55.5993 19.4697 55.2757C25.2992 53.7019 30.7635 51.9271 36.8683 51.5338C38.1031 51.4545 39.074 50.4414 39.0297 49.2753C38.9928 48.1077 37.9547 47.2252 36.7201 47.3052Z"
                  fill="#EDCB50"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M44.8468 32.0309C32.8604 25.365 18.4113 20.0291 4.64664 17.397C3.44456 17.168 2.23706 17.9132 1.95496 19.0596C1.67286 20.2061 2.41435 21.3248 3.61642 21.5538C16.9252 24.0994 30.8998 29.2598 42.4845 35.7071C43.5343 36.289 44.9145 35.9381 45.5646 34.9242C46.2147 33.9103 45.8965 32.6128 44.8468 32.0309Z"
                  fill="#EDCB50"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.147 26.6481C53.0834 17.5874 47.8444 9.48874 41.8493 2.75543C41.063 1.87827 39.6537 1.79267 38.704 2.56329C37.7474 3.33672 37.6093 4.677 38.3885 5.55631C43.8515 11.6876 48.7332 19.0102 49.7031 27.2621C49.8387 28.4199 50.9463 29.2214 52.1699 29.0524C53.3937 28.884 54.2824 27.8052 54.147 26.6481Z"
                  fill="#EDCB50"
                />
              </svg>
              Advanced <span className="theme">AI</span> and
            </span>
            <span className="d3">
              <span className="theme2">machine</span> learning technology
              <span className="round3">
                <Image src={dround} alt="round" className="img-fluid" />
              </span>
            </span>
            <p>
              Machine learning algorithms build a model based on sample
              data, known as training data, in order to make predictions
              or decisions...
            </p>
            <div className="btg__grp">
              <Link href="/signup" className="cmn--btn">
                <span>Get Started</span>
              </Link>
              <button
                // href="https://www.youtube.com/watch?v=wXNv-x5zVgE"
                className="play__btn video-btn bg-transparent border-0 text-white"
              >
                <span className="play__icon">
                  <i className="material-symbols-outlined">play_arrow</i>
                </span>
                <span>Watch Intro Video</span>
              </button>
            </div>
            <div className="banner5__blump">
              <Image src={blumb} alt="blump" className="img-fluid" />
            </div>
          </div>
          <div className="aitext5">
            <Image src={aitext2} alt="ai" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-11">
        <div className="banner__thumb">
          <div className="thumb">
            <Image src={banner5} alt="banner" className="img-fluid" />
          </div>
          <div className="animated3">
            <Image src={ball3d} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Container */}
{/* Elements */}
<div className="ball__element5">
  <Image src={ball_element} alt="ball" className="img-fluid" />
</div>
<div className="bulp">
  <Image src={bulp} alt="bulp" className="img-fluid" />
</div>
<div className="null__dimond">
  <Image src={null_dimond} alt="null" className="img-fluid" />
</div>
{/* Elements */}
</section>
`;
