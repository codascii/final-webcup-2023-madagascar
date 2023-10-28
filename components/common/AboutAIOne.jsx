import Image from "next/image";
import Link from "next/link";
import about1 from "/public/img/about/about1.png";
import ashape_elements from "/public/img/elements/ashape-elements.png";
import brain_element from "/public/img/elements/brain-element.png";
import light_elements from "/public/img/elements/light-elements.png";

const AboutAIOne = () => {
  return (
    <section className="about__section bg__white pt-120 pb__60">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                  The world&#39;s leading AI and machine learning company
                </h2>
                <p className="wow fadeInDown" data-wow-duration="2s">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#39;t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn&#39;t
                  anything embarrassing hidden in the middle of text.
                </p>
              </div>
              <ul className="about__chack wow fadeInDown">
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>Talent Advisory Team</span>
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
                  <span>High-Quality Results</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span>24 Hours Supports</span>
                </li>
              </ul>
              <Link href="/about" className="cmn--btn">
                <span>Read More</span>
              </Link>
            </div>
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-9 col-sm-9">
            <div className="about__thumb">
              {/* <div className="brain__element">
                <Image src={brain_element} alt="breain" className="img-fluid" />
              </div> */}
              <Image src={about1} alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
        </div>
      </div>
      <div className="about__shape1">
        <Image src={ashape_elements} alt="about" />
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
      <div className="light__element5">
        <Image src={light_elements} alt="light" />
      </div>
    </section>
  );
};

export default AboutAIOne;
