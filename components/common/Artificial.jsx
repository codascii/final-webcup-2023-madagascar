import Image from "next/image";
import Link from "next/link";
import artificial from "/public/img/efective/artificial.png";
import checkai from "/public/img/elements/checkai.png";
import light_elements from "/public/img/elements/light-elements.png";

const Artificial = () => {
  return (
    <section className="artificial__section bg__white pt-120 pb__60">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse justify-content-between">
          {/* about content */}
          <div className="col-xl-6 col-xl-6 col-lg-6">
            <div className="artificial__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  We provide most realistic Artificial intelligence
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.2s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&#39;t
                  anything embarrassing hidden in the middle of text.
                </p>
              </div>
              <div
                className="artificial__app wow fadeInUp"
                data-wow-duration="1.2s"
              >
                <div className="articial__items">
                  <span className="apptext">App Store</span>
                  <span className="apppweek">APP OF THE WEEK</span>
                  <span className="date">2023</span>
                </div>
                <div className="articial__items">
                  <span className="apptext">Google play</span>
                  <span className="apppweek">AWARD WINNER</span>
                  <span className="date">2023</span>
                </div>
                <div className="articial__items">
                  <span className="apptext">Envato</span>
                  <span className="apppweek">AWARD WINNER</span>
                  <span className="date">2023</span>
                </div>
              </div>
              <p className="pb__40 wow fadeInUp" data-wow-duration="1.4s">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <Link
                href="/about-three"
                className="cmn--btn wow fadeInUp"
                data-wow-duration="1.8s"
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
          {/* about content */}
          {/* about thumb */}
          <div className="col-xl-5 col-xl-6 col-lg-6">
            <div className="artificial__thumb">
              <Image src={artificial} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* element */}
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
      <div className="light__checkai">
        <Image src={checkai} alt="light" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default Artificial;
