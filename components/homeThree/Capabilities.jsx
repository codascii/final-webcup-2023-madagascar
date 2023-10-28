import Image from "next/image";
import Link from "next/link";
import c1 from "/public/img/bog-capabilities/c1.png";
import c2 from "/public/img/bog-capabilities/c2.png";
import c3 from "/public/img/bog-capabilities/c3.png";
import c4 from "/public/img/bog-capabilities/c4.png";
import c5 from "/public/img/bog-capabilities/c5.png";
import c6 from "/public/img/bog-capabilities/c6.png";
import caserobot from "/public/img/bog-capabilities/caserobot.png";
import global__mask from "/public/img/elements/global__mask.png";
import redlight from "/public/img/elements/redlight.png";
import spricng from "/public/img/elements/spricng.png";

const Capabilities = () => {
  return (
    <section className="capabilities__section case__trough bgsection pt-120 pb-120">
      {/* shpae */}
      <div className="redlight">
        <Image src={redlight} alt="redliht" />
      </div>
      {/* shpae */}
      {/* container */}
      <div className="container">
        {/* section header */}
        <div className="capabilites__header pb__60">
          <div
            className="section__header section__center wow fadeInUp"
            data-wow-duration="2s"
          >
            <h2>Differentiating through case studies</h2>
            <p>
              AI is the broader concept of machines being able to carry out
              tasks in a way that would normally require human intelligence.
            </p>
          </div>
        </div>
        {/* section header */}
        {/* capabilites warap */}
        <div className="row mt__customcase g-4 justify-content-center">
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="2.7s"
          >
            <div className="capa__case__box small__space__capa">
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c1} alt="capabi" />
                </Link>
                <div className="content">
                  <Link href="/" className="cmn--btn capabilites__btn">
                    <span>Technology</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">AI Antibiotics</Link>
                  </h4>
                </div>
              </div>
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c4} alt="capabi" />
                </Link>
                <div className="content">
                  <Link href="/" className="cmn--btn capabilites__btn">
                    <span>Robot</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">Education Al Studies</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="2.5s"
          >
            <div className="capa__case__boxmiddle">
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c2} alt="capabi" />
                </Link>
                <div className="content">
                  <Link
                    href="javacript:void(0)"
                    className="cmn--btn capabilites__btn"
                  >
                    <span>Machine</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">classNameifying Al Photos</Link>
                  </h4>
                </div>
              </div>
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c5} alt="capabi" />
                </Link>
                <div className="content">
                  <Link href="/" className="cmn--btn capabilites__btn">
                    <span>Technology</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">Army Defence Al & Ml</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 wow fadeInDown"
            data-wow-duration="2.s"
          >
            <div className="capa__case__box3 capa__flex__small">
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c3} alt="capabi" />
                </Link>
                <div className="content">
                  <Link href="/" className="cmn--btn capabilites__btn">
                    <span>Robot</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">Industry Labor Machine</Link>
                  </h4>
                </div>
              </div>
              <div className="capabilities__items">
                <Link href="/studies-three" className="thumb">
                  <Image src={c6} alt="capabi" />
                </Link>
                <div className="content">
                  <Link
                    href="javacript:void(0)"
                    className="cmn--btn capabilites__btn"
                  >
                    <span>Machine</span>
                  </Link>
                  <h4>
                    <Link href="/studies-three">ACT Al Performance</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="case__btn wow fadeInDown" data-wow-duration="2s">
          <Link href="/studies-three" className="cmn--btn">
            <span>See All Case Studies</span>
          </Link>
        </div>
        {/* capabilites warap */}
      </div>
      {/* container */}
      {/* elelments */}
      <div className="global__mask">
        <Image src={global__mask} alt="img" />
        <div className="light__element1">
          <Image src={redlight} alt="light" />
        </div>
      </div>
      <div className="case__rocket">
        <Image src={caserobot} alt="img" className="img-fluid" />
      </div>
      <div className="light__redb">
        <Image src={redlight} alt="light" />
      </div>
      <div className="light__redt">
        <Image src={redlight} alt="light" />
      </div>
      <div className="spring__case">
        <Image src={spricng} alt="light" />
      </div>
      {/* elelments */}
    </section>
  );
};

export default Capabilities;
