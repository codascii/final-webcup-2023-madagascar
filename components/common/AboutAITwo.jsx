import Image from "next/image";
import Link from "next/link";
import about2 from "/public/img/about/about2.png";
import dround from "/public/img/elements/3dround.png";
import ball3d from "/public/img/elements/ball3d.png";
import blumb from "/public/img/elements/blumb.png";
import null_dimond from "/public/img/elements/null-dimond.png";

const AboutAITwo = () => {
  return (
    <section className="about__section about__section__two bg__white pt-80 pb-120">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* about content */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                Algorithme Intelligent de Prévision des Catastrophes Naturelles (AIPCN)
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.2s">
                L&apos;Indian Ocean Institut est fier de présenter l&apos;AIPCN, un algorithme révolutionnaire basé sur l&apos;intelligence artificielle. En utilisant une combinaison de données provenant de sismomètres, satellites, ballons météorologiques et d&apos;autres capteurs stratégiquement placés autour du globe, l&apos;AIPCN analyse en temps réel les variations et anomalies. Grâce à des modèles prédictifs avancés, il est capable d&apos;identifier et d&apos;alerter d&apos;une catastrophe imminente jusqu&apos;à 4 heures à l&apos;avance, donnant une chance cruciale aux communautés de se préparer et de se protéger
                </p>
              </div>
              <div
                className="progress__wrap wow fadeInUp"
                data-wow-duration="2.4s"
              >
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Apprentissage Continue</span>
                    <span className="point">99%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Performance</span>
                    <span className="point">100%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Prise de Décision Autonome</span>
                    <span className="point">100%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
                <div className="pro__items">
                  <div className="pro__head">
                    <span className="title">Adaptabilité </span>
                    <span className="point">100%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-value"></div>
                  </div>
                </div>
              </div>
              <Link
                href="/about-two"
                className="cmn--btn wow fadeInUp"
                data-wow-duration="2.6"
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
          {/* about content */}
          <div className="col-xxl-1 col-xl-1 col-lg-1"></div>
          {/* about thumb */}
          <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-9 col-sm-9">
            <div className="about__thumb">
              <Image src={about2} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* elements */}
      <div className="ball3d">
        <Image src={ball3d} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner3__two">
        <Image src={dround} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner__blump">
        <Image src={blumb} alt="ball3d" className="img-fluid" />
      </div>
      <div className="banner__nulldimond">
        <Image src={null_dimond} alt="ball3d" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default AboutAITwo;
