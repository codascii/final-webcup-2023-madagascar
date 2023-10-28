import Image from "next/image";
import actionable from "/public/img/efective/actionable.png";
import ball3d from "/public/img/elements/ball3d.png";
import j_shape from "/public/img/elements/j-shape.png";
import brain from "/public/img/svg-icon/brain.svg";
import prosesing from "/public/img/svg-icon/prosesing.svg";
import stored from "/public/img/svg-icon/stored.svg";

const Work = () => {
  return (
    <section className="five__work__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* Header */}
        <div className="section__header section__center pb__60">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s">
            How It’s Work
          </h2>
          <p className="wow fadeInUp" data-wow-duration="1.9s">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
        </div>
        {/* Header */}
        <div className="row g-4">
          {/* col */}
          <div
            className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.2s"
          >
            <div className="five__work__items">
              <div className="icon">
                <Image src={brain} alt="icon" />
              </div>
              <div className="content">
                <h5>Data Generated</h5>
                <p>
                  The integration of AI and ML is leading to the creation of...
                </p>
              </div>
            </div>
          </div>
          {/* col */}
          <div
            className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.4s"
          >
            <div className="five__work__items five__work__2">
              <div className="icon">
                <Image src={stored} alt="icon" />
              </div>
              <div className="content">
                <h5>Data Stored</h5>
                <p>
                  The integration of AI and ML is leading to the creation of...
                </p>
              </div>
            </div>
          </div>
          {/* col */}
          <div
            className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.6s"
          >
            <div className="five__work__items five__work__3">
              <div className="icon">
                <Image src={prosesing} alt="icon" />
              </div>
              <div className="content">
                <h5>Data Processing</h5>
                <p>
                  The integration of AI and ML is leading to the creation of...
                </p>
              </div>
            </div>
          </div>
          {/* col */}
          <div
            className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 wow fadeInDown"
            data-wow-duration="1.8s"
          >
            <div className="five__work__items five__work__4">
              <div className="icon">
                <Image src={actionable} alt="icon" />
              </div>
              <div className="content">
                <h5>Actionable Insights</h5>
                <p>
                  The integration of AI and ML is leading to the creation of...
                </p>
              </div>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
      {/* element */}
      <div className="jav__round">
        <Image src={j_shape} alt="img" className="img-fluid" />
      </div>
      <div className="jthred__ball">
        <Image src={ball3d} alt="img" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default Work;
