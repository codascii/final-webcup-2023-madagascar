import Image from "next/image";
import Link from "next/link";
import devided_element2 from "/public/img/banner/devided-element2.png";
import devided_lockyello from "/public/img/banner/devided-lockyello.png";
import round_devided from "/public/img/banner/round-devided.png";
import work_feature from "/public/img/feature/work-feature.png";
import brain from "/public/img/svg-icon/brain.svg";
import prosesing from "/public/img/svg-icon/prosesing.svg";
import solution from "/public/img/svg-icon/solution.svg";
import stored from "/public/img/svg-icon/stored.svg";

const Feature = () => {
  return (
    <section className="feature__work__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Section header */}
        <div
          className="section__header section__center pb__60 wow fadeInUp"
          data-wow-duration="2s"
        >
          <h2>How It’s Work</h2>
          <p>
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
        </div>
        {/* Section header */}
        <div className="row g-5 justify-content-between align-items-center">
          {/* col grid */}
          <div className="col-md-6 col-xl-3">
            <div className="feature__component__work feature__work__align">
              <Link href="/" className="feature__work__items">
                <div className="content">
                  <h5>Data Generated</h5>
                  <p>
                    The integration of AI and ML is leading to the creation
                    of...
                  </p>
                </div>
                <div className="icon">
                  <Image src={brain} alt="icon" />
                </div>
              </Link>
              <div className="feature__work__items">
                <div className="content">
                  <h5>Data Processing</h5>
                  <p>
                    The integration of AI and ML is leading to the creation
                    of...
                  </p>
                </div>
                <div className="icon">
                  <Image src={prosesing} alt="icon" />
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-10 order-sm-3 order-xl-2 col-xl-5">
            <div className="feature__work__thumb">
              <Image src={work_feature} alt="feature" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-md-6 order-sm-2 col-xl-3">
            <div className="feature__component__work">
              <div className="feature__work__items2">
                <div className="icon">
                  <Image src={stored} alt="icon" />
                </div>
                <div className="content">
                  <h5>Data Stored</h5>
                  <p>
                    The integration of AI and ML is leading to the creation
                    of...
                  </p>
                </div>
              </div>
              <div className="feature__work__items2">
                <div className="icon">
                  <Image src={solution} alt="icon" />
                </div>
                <div className="content">
                  <h5>Solutions</h5>
                  <p>
                    The integration of AI and ML is leading to the creation
                    of...
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="work__element1">
        <Image src={devided_element2} alt="img" className="img-fluid" />
      </div>
      <div className="work__lockyello">
        <Image src={devided_lockyello} alt="img" className="img-fluid" />
      </div>
      <div className="work__blump">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      <div className="work__blump2">
        <Image src={round_devided} alt="img" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Feature;
