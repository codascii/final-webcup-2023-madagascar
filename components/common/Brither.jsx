import Image from "next/image";
import Link from "next/link";
import brighter from "/public/img/plan/brighter.png";

const Brither = () => {
  return (
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
  );
};

export default Brither;
