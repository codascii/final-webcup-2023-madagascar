import faqData from "@/data/faqData";
import Image from "next/image";
import Link from "next/link";
import SingleFaq from "../common/SingleFaq";
import ana from "/public/img/svg-icon/ana.svg";
import clo from "/public/img/svg-icon/clo.svg";
import iai from "/public/img/svg-icon/iai.svg";
import iaph from "/public/img/svg-icon/iaph.svg";
import imac from "/public/img/svg-icon/imac.svg";
import iphy from "/public/img/svg-icon/iphy.svg";
import ivar from "/public/img/svg-icon/ivar.svg";

const Faqs = () => {
  return (
    <section className="faq__section__four bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between">
          {/* col grid */}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="common__item">
              <div className="service__link__wrap">
                <Link href="/">
                  <span className="icon">
                    <Image src={iai} alt="img" className="img-fluid" />
                  </span>
                  <span>Robotic Automation</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={imac} alt="img" className="img-fluid" />
                  </span>
                  <span>Machine Learning</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={ivar} alt="img" className="img-fluid" />
                  </span>
                  <span>Virtual Reality</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={clo} alt="img" className="img-fluid" />
                  </span>
                  <span>AI For Cloud Services</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={ana} alt="img" className="img-fluid" />
                  </span>
                  <span>Predictive Analytics</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={iphy} alt="img" className="img-fluid" />
                  </span>
                  <span>Deep Learning</span>
                </Link>
                <Link href="/">
                  <span className="icon">
                    <Image src={iaph} alt="img" className="img-fluid" />
                  </span>
                  <span>Statistical Modeling</span>
                </Link>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="main__accordion__content">
              <div className="accordion__wrap">
                <div className="accordion" id="accordionExample4">
                  {/* Accordion items */}
                  {faqData.map((itm, i) => (
                    // Single Faq
                    <SingleFaq itm={itm} key={itm.id} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Faqs;
