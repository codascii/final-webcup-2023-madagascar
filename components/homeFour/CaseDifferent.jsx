import studiesData from "@/data/studiesData";
import Image from "next/image";
import Link from "next/link";
import BlogFiveCard from "../cards/BlogFiveCard";
import devided_element2 from "/public/img/banner/devided-element2.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";

const CaseDifferent = () => {
  return (
    <section className="case__trough case__different__section bgsection pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* section header */}
        <div className="capabilites__header pb__60">
          <div
            className="section__header section__center wow fadeInUp"
            data-wow-duration="2.5s"
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
        <div className="row g-4 justify-content-center">
          {studiesData.slice(0, 6).map((itm, i) => (
            <div key={itm.id} className="col-xxl-6 col-xl-6 col-lg-6">
              {/* Blog Five Card */}
              <BlogFiveCard itm={itm} index={i} />
            </div>
          ))}
        </div>
        <div className="case__btn">
          <Link href="/studies-four" className="cmn--btn">
            <span>See All Case Studies</span>
          </Link>
        </div>
        {/* capabilites warap */}
      </div>
      {/* container */}
      {/* elelments */}
      <div className="diferent__element1">
        <Image src={devided_element2} alt="img" className="img-fluid" />
      </div>
      <div className="diferent__lockyello">
        <Image src={devided_lockyello} alt="img" className="img-fluid" />
      </div>
      <div className="diferent__blump">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      <div className="diferent__blump2">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      {/* elelments */}
    </section>
  );
};

export default CaseDifferent;
