import Image from "next/image";
import datastored from "/public//img/efective/datastored.png";
import actionable from "/public/img/efective/actionable.png";
import braindata from "/public/img/efective/braindata.png";
import dataprocessing from "/public/img/efective/dataprocessing.png";
import efective from "/public/img/efective/efective.png";
import efect_ball from "/public/img/elements/efect-ball.png";
import efect_cross from "/public/img/elements/efect-cross.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";
import efect_trevuj from "/public/img/elements/efect-trevuj.png";
import efecttablet1 from "/public/img/elements/efecttablet1.png";
import efecttablet2 from "/public/img/elements/efecttablet2.png";
import eye_element from "/public/img/elements/eye-element.png";

const Efective = () => {
  return (
    <section className="efective__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between flex-row-reverse">
          {/* col grid */}
          <div className="col-xl-6 col-lg-7">
            <div className="efective__content">
              <div className="section__header pb__32">
                <h2 className="wow fadeInUp" data-wow-duration="1s">
                  Step-by-step user manual for effective and efficient use
                </h2>
                <p className="wow fadeInDown" data-wow-duration="2s">
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
              </div>
              <div className="efective__data__wrapper">
                <div
                  className="efect__data__iems wow fadeInUp"
                  data-wow-duration="1s"
                >
                  <div className="icons">
                    <Image src={braindata} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Data Generated</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div
                  className="efect__data__iems wow fadeInUp"
                  data-wow-duration="2s"
                >
                  <div className="icons icons2">
                    <Image src={datastored} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Recherche et Analyse</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div
                  className="efect__data__iems wow fadeInUp"
                  data-wow-duration="2.2s"
                >
                  <div className="icons icons3">
                    <Image src={dataprocessing} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Data Processing</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div
                  className="efect__data__iems wow fadeInUp"
                  data-wow-duration="2.5s"
                >
                  <div className="icons icons4">
                    <Image src={actionable} alt="icon" />
                  </div>
                  <div className="content">
                    <h5>Actionable Insights</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
          <div className="col-xl-5 col-lg-5 col-md-12">
            <div className="efective__thumb">
              <Image src={efective} alt="efective" className="img-fluid" />
              {/* efect Element */}
              <div className="efect__element2">
                <Image src={efect_cross2} alt="img" />
              </div>
              <div className="efect__element3">
                <Image src={efect_cross} alt="img" />
              </div>
              <div className="efect__element4">
                <Image src={efect_trevuj} alt="img" />
              </div>
              <div className="efect__element5">
                <Image src={efecttablet1} alt="img" />
              </div>
              <div className="efect__element6">
                <Image src={efecttablet2} alt="img" />
              </div>
              <div className="efect__element7">
                <Image src={efect_rount} alt="img" />
              </div>
              {/* efect Element */}
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="eye__elements">
        <Image src={eye_element} alt="eye" className="img-fluid" />
      </div>
      <div className="efect__element1">
        <Image src={efect_ball} alt="img" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Efective;
