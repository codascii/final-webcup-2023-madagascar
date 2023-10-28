import Image from "next/image";
import Link from "next/link";
import dots_elements from "/public/img/elements/3dots-elements.png";
import bell_elements from "/public/img/elements/bell-elements.png";
import facebook_element from "/public/img/elements/facebook-element.png";
import map from "/public/img/elements/map.png";
import pinter_elements from "/public/img/elements/pinter-elements.png";
import swith_elements from "/public/img/elements/swith-elements.png";

const Newsletter = () => {
  return (
    <section className="newsletter__section bg__white">
      {/* container */}
      <div className="container">
        {/* newsletter wrapper */}
        <div
          className="newsletter__wrapper pt-120 pb-120 wow fadeInUp"
          data-wow-duration="2s"
        >
          <div className="row justify-content-center">
            {/* col grid */}
            <div className="col-xl-6 col-lg-6">
              <div className="newsletter__content">
                <div className="section__header section__center">
                  <h2>Join Our Community</h2>
                  <p>
                    We are trusted by over 5000+ clients. Join them by using our
                    services and grow your business.
                  </p>
                </div>
                <div className="join__btn">
                  <Link href="/signup" className="cmn--btn">
                    <span>Join us</span>
                  </Link>
                </div>
                {/* map mast */}
                <div className="map__mask">
                  <Image src={map} alt="ma--mask" />
                </div>
                {/* map mast */}
              </div>
            </div>
            {/* col grid */}
          </div>
        </div>
        {/* newsletter wrapper */}
      </div>
      {/* container */}
      {/* efect Element */}
      <div className="social__element1">
        <Image src={facebook_element} alt="img" className="img-fluid" />
      </div>
      <div className="social__element1repet">
        <Image src={facebook_element} alt="img" className="img-fluid" />
      </div>
      <div className="social__element2">
        <Image src={dots_elements} alt="img" className="img-fluid" />
      </div>
      <div className="social__element3">
        <Image src={pinter_elements} alt="img" className="img-fluid" />
      </div>
      <div className="social__element4">
        <Image src={bell_elements} alt="img" className="img-fluid" />
      </div>
      <div className="social__element5">
        <Image src={swith_elements} alt="img" className="img-fluid" />
      </div>
      {/* efect Element */}
    </section>
  );
};

export default Newsletter;
