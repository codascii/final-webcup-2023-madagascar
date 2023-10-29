import Image from "next/image";
import Link from "next/link";
import about5 from "/public/img/about/about5.png";
import bulp from "/public/img/banner/bulp.png";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import null_dimond from "/public/img/elements/null-dimond.png";

const AboutAIFive = () => {
  return (
    <section className="about__section__five bg__white pt-120 pb-120">
      {/* Container */}
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          {/* about content */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content">
              <div className="section__header">
                <h2 className="wow fadeInUp" data-wow-duration="2s">
                {"L'Indian Ocean Institut"}
                </h2>
                <p className="wow fadeInUp" data-wow-duration="2.5s">
                Au cours des quatre dernières décennies, le monde a connu une augmentation alarmante des catastrophes naturelles. Depuis 2012, chaque année, en moyenne, 700 événements destructeurs touchent notre planète. Inondations, tremblements de terre, tsunamis, éruptions volcaniques, méga-feux, tempêtes, ouragans, typhons, cyclones... la liste est longue et les conséquences dévastatrices.
                </p>
              </div>
              <ul
                className="about__chack__five pb__32 wow fadeInUp"
                data-wow-duration="2.8s"
              >
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                    Innovation à la pointe
                    </span>
                    <span>
                    {"L'Indian Ocean Institute mène la voie avec une IA révolutionnaire qui prédit les catastrophes naturelles."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                    Au service de la communauté
                    </span>
                    <span>
                    {"L'Institut s'engage à protéger les vies grâce à la technologie et à l'information."}
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <i className="material-symbols-outlined">task_alt</i>
                  </span>
                  <span className="content">
                    <span className="texthead">
                    Science au service de la sécurité
                    </span>
                    <span>
                    L&apos;Institut allie recherche de pointe et engagement communautaire pour un avenir plus sûr.
                    </span>
                  </span>
                </li>
              </ul>
              <Link href="/contact" className="cmn--btn">
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>
          {/* about content */}
          {/* about thumb */}
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-9 col-sm-9">
            <div className="about__thumb">
              <Image src={about5} alt="about" className="img-fluid" />
            </div>
          </div>
          {/* about thumb */}
        </div>
      </div>
      {/* Container */}
      {/* element */}
      <div className="bulp__light">
        <Image src={bulp} alt="bulp" className="img-fluid" />
      </div>
      <div className="threed__ball">
        <Image src={ball3d} alt="img" className="img-fluid" />
      </div>
      <div className="global__ball">
        <Image src={ball_element} alt="bal" className="img-fluid" />
      </div>
      <div className="null__five">
        <Image src={null_dimond} alt="null" className="img-fluid" />
      </div>
      {/* element */}
    </section>
  );
};

export default AboutAIFive;
