import Image from "next/image";
import machine_ai from "/public/img/efective/machine-ai.png";
import checkai from "/public/img/elements/checkai.png";
import efect_cross from "/public/img/elements/efect-cross.png";
import efect_cross2 from "/public/img/elements/efect-cross2.png";
import efect_rount from "/public/img/elements/efect-rount.png";
import efect_trevuj from "/public/img/elements/efect-trevuj.png";
import efecttablet1 from "/public/img/elements/efecttablet1.png";
import efecttablet2 from "/public/img/elements/efecttablet2.png";
import light_elements from "/public/img/elements/light-elements.png";
import real from "/public/img/elements/real.png";

const EfectiveThree = () => {
  return (
    <section className="efective__section efective__section__three bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* col grid */}
          <div className="col-xl-6 col-lg-7">
            <div className="efective__content">
              <div className="section__header pb__32">
                <h2 className="wow fadeInUp" data-wow-duration="1.2s">
                  User-Friendly Instruction Set for Quick and Easy Navigation
                </h2>
                <p className="wow fadeInUp" data-wow-duration="1.5s">
                  AI is the broader concept of machines being able to perform
                  tasks that would normally require human intelligence, such as
                  visual perception, speech recognition, and language
                  translation.
                </p>
              </div>
              <div
                className="efective__data__wrapper wow fadeInUp"
                data-wow-duration="2.2s"
              >
                <div className="efect__data__iems">
                  <div className="icons">1</div>
                  <div className="content">
                    <h5>Data Generated</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div className="efect__data__iems">
                  <div className="icons icons2">2</div>
                  <div className="content">
                    <h5>Recherche et Analyse</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div className="efect__data__iems">
                  <div className="icons icons3">3</div>
                  <div className="content">
                    <h5>Data Processing</h5>
                    <p>
                      The integration of AI and ML is leading to the creation of
                      intelligent systems that can automate tasks, improve
                      decision-making
                    </p>
                  </div>
                </div>
                <div className="efect__data__iems">
                  <div className="icons icons4">4</div>
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
              <Image src={machine_ai} alt="efective" className="img-fluid" />
              {/* efect Element */}
              <div className="efect__ecross">
                <Image src={efect_cross2} alt="img" />
              </div>
              <div className="efect__elyellow">
                <Image src={efect_cross} alt="img" />
              </div>
              <div className="efect__element4">
                <Image src={efect_trevuj} alt="img" />
              </div>
              <div className="teser__trvuj">
                <Image src={efect_trevuj} alt="img" />
              </div>
              <div className="efect__tablet">
                <Image src={efecttablet1} alt="img" />
              </div>
              <div className="efect__eleround">
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
      <div className="efect__light1">
        <Image src={light_elements} alt="img" />
      </div>
      <div className="efect__light2">
        <Image src={light_elements} alt="img" />
      </div>
      <div className="check__ai">
        <Image src={checkai} alt="img" className="img-fluid" />
      </div>
      <div className="efect__tb1">
        <Image src={efecttablet2} alt="efect1" />
      </div>
      <div className="efect__tbgold">
        <Image src={real} alt="efect1" />
      </div>
      {/* elements */}
    </section>
  );
};

export default EfectiveThree;
