export const newsLetterOne = `
<section className="newsletter__section bg__white">
    <div className="container">
    <div className="newsletter__wrapper pt-120 pb-120">
        <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-6">
            <div className="newsletter__content">
            <div className="section__header section__center">
                <h2 className="wow fadeInUp" data-wow-duration="1s">
                Subscribe to newsletters and get news.
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2s">
                Sign up for updates and stay informed about the latest
                developments and be a part of our community and get the
                latest news and insights
                </p>
            </div>
            <form action="#">
                <input
                type="email"
                placeholder="Enter your email address"
                required
                />
                <button className="cmn--btn" type="submit">
                <span>Subscribe</span>
                </button>
            </form>

            <div className="map__mask">
                <Image src={map} alt="ma--mask" />
            </div>
            </div>
        </div>
        </div>

        <div className="news__element1">
        <Image src={news_elements2} alt="new" />
        </div>
        <div className="news__element2">
        <Image src={news_element1} alt="new" />
        </div>
    </div>
    </div>

    <div className="efect__element2">
        <Image src={efect_cross} alt="img" />
    </div>
    <div className="efect__cross">
    <   Image src={efect_cross2} alt="img" />
    </div>
    <div className="efect__element7">
        <Image src={efect_rount} alt="img" />
    </div>
    <div className="efect__element8">
        <Image src={efect_rount} alt="img" />
    </div>
</section>
`;

export const newsLetterTwo = `
<section className="newsletter__section bg__white">
{/* container */}
<div className="container">
  {/* newsletter wrapper */}
  <div
    className="newsletter__wrapper pt-120 pb-120 wow fadeInUp"
    data-wow-duration="2s"
  >
    <div className="row justify-content-center">
      {/* col grid */}
      <div className="col-xl-6 col-lg-6">
        <div className="newsletter__content">
          <div className="section__header section__center">
            <h2>Join Our Community</h2>
            <p>
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </p>
          </div>
          <div className="join__btn">
            <Link href="/signup" className="cmn--btn">
              <span>Join us</span>
            </Link>
          </div>
          {/* map mast */}
          <div className="map__mask">
            <Image src={map} alt="ma--mask" />
          </div>
          {/* map mast */}
        </div>
      </div>
      {/* col grid */}
    </div>
  </div>
  {/* newsletter wrapper */}
</div>
{/* container */}
{/* efect Element */}
<div className="social__element1">
  <Image src={facebook_element} alt="img" className="img-fluid" />
</div>
<div className="social__element1repet">
  <Image src={facebook_element} alt="img" className="img-fluid" />
</div>
<div className="social__element2">
  <Image src={dots_elements} alt="img" className="img-fluid" />
</div>
<div className="social__element3">
  <Image src={pinter_elements} alt="img" className="img-fluid" />
</div>
<div className="social__element4">
  <Image src={bell_elements} alt="img" className="img-fluid" />
</div>
<div className="social__element5">
  <Image src={swith_elements} alt="img" className="img-fluid" />
</div>
{/* efect Element */}
</section>

`;

export const newsLetterThree = `
    <section className="newsletter__section__four bg__white">
      {/* container */}
      <div className="container">
        {/* newsletter wrapper */}
        <div className="newsletter__wrapper newsletter__wrapper__four">
          <div className="row justify-content-center">
            {/* col grid */}
            <div className="col-xl-6 col-lg-6">
              <div className="newsletter__content">
                <div className="section__header section__center">
                  <h2 className="wow fadeInUp" data-wow-duration="1.5s">
                    Subscribe Here
                  </h2>
                  <p className="wow fadeInUp" data-wow-duration="1.8s">
                    Subscribe to get notified about new templates and updates
                  </p>
                </div>
                <form
                  action="#"
                  className="wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="cmn--btn" type="submit">
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
            {/* col grid */}
          </div>
          {/* newletter element */}
          <div className="newsfour__ball1">
            <Image src={ballglobal} alt="img" className="img-fluid" />
          </div>
          <div className="newsfour__ball2">
            <Image src={ballglobal} alt="img" className="img-fluid" />
          </div>
          <div className="newsfour__element1">
            <Image src={news_arowleft} alt="new" className="img-fluid" />
          </div>
          <div className="newsfour__element2">
            <Image src={news_arowright} alt="new" className="img-fluid" />
          </div>
          {/* newletter element */}
        </div>
        {/* newsletter wrapper */}
      </div>
      {/* container */}
    </section>

`;

export const newsLetterFour = `
<section className="brighter__future bg__white">
<div className="container">
  <div className="brighter__wrap">
    <div className="brighter__content">
      <span className="d3 wow fadeInUp" data-wow-duration="1.5s">
        Revitalizing Data for a Brighter Future
      </span>
      <p className="wow fadeInUp" data-wow-duration="1.9s">
        Unlocking the Potential of Your Business Metrics Through Data
        Analysis & Improving Key Business Metrics with Data Analytics
        Techniques
      </p>
      <div className="cmn__grp wow" data-wow-duration="2.1s">
        <Link href="/pricing" className="cmn--btn">
          <span>Start free 14-day trial</span>
        </Link>
        <Link href="/pricing" className="cmn--btn cmn__border">
          <span>Request a demo</span>
        </Link>
      </div>
    </div>
    <div className="brighter__thumb">
      <div className="thumb">
        <Image src={brighter} alt="brighter" className="img-fluid" />
      </div>
    </div>
  </div>
</div>
</section>
`;

export const newsLetterFive = `
<section className="newsletter__section newsletter__section__three bg__white">
      {/* container */}
      <div className="container">
        {/* newsletter wrapper */}
        <div className="newsletter__wrapper pt-120 pb-120">
          <div className="row justify-content-around align-items-center">
            {/* col grid */}
            <div className="col-xl-6 col-lg-6">
              <div
                className="newsletter__content wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="section__header">
                  <h2>
                    Subscribe to the newsletter and receive notifications.
                  </h2>
                  <p>
                    Sign up for updates and stay informed about the latest
                    developments and be a part of our community and get the
                    latest news and insights
                  </p>
                </div>
                <form action="/">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="cmn--btn" type="submit">
                    <span>Subscribe</span>
                  </button>
                </form>
                <div className="social__part">
                  <div className="follow__btn">
                    <Link href="/">
                      <span>Follow us</span>
                      <span className="icon">
                        <i className="material-symbols-outlined">
                          trending_flat
                        </i>
                      </span>
                    </Link>
                  </div>
                  <ul className="social__standard">
                    <li>
                      <Link href="/" className="social__item">
                        <span className="icon">
                          <Image src={facebook} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemtwo">
                        <span className="icon">
                          <Image src={instagram} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemthree">
                        <span className="icon">
                          <Image src={twitter} alt="svg" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="social__item social__itemfour">
                        <span className="icon">
                          <Image src={linkedin} alt="svg" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* col grid */}
            <div className="col-xl-4 col-lg-6 col-md-9">
              <div className="newsletter__three__thumb">
                <Image src={newsletter3} alt="thumb" className="img-fluid" />
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* newsletter wrapper */}
      </div>
      {/* container */}
    </section>
`;
