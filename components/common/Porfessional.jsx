import Image from "next/image";
import Link from "next/link";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import j_shape from "/public/img/elements/j-shape.png";
import map from "/public/img/elements/map.png";

const Porfessional = ({ clss }) => {
  return (
    <section className={`professional__section ${clss} pt-120 pb-120`}>
      {/* container */}
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* col */}
          <div className="col-xl-5 col-lg-5">
            <div className="professional__content">
              <div className="section__header">
                <h2 className="wow fadeInDown" data-wow-duration="1.5s">
                  Professional Services that Deliver Results
                </h2>
                <p className="wow fadeInDown" data-wow-duration="2s">
                  AI (Artificial Intelligence) and ML (Machine Learning) are
                  closely related fields that are focused on the development of
                  computer systems that can perform tasks that would normally
                  require human intelligence, such language.
                </p>
              </div>
              <div className="promap1 wow fadeInUp" data-wow-duration="2.2s">
                <Image src={map} alt="map" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* col */}
          {/* col */}
          <div className="col-xl-6 col-lg-7">
            <div
              className="professional__right__content wow fadeInUp"
              data-wow-duration="2.4s"
            >
              <div className="progr__wrap d-flex justify-content-between">
                <div className="progressbar semi-circle blue" data-value="80">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M163.882 84C166.156 84 168.011 82.155 167.899 79.8832C167.427 70.2585 165.301 60.7762 161.606 51.8546C157.384 41.6632 151.197 32.4032 143.397 24.603C135.597 16.8029 126.337 10.6155 116.145 6.39412C105.954 2.17272 95.031 -4.82182e-07 84 0C72.969 4.82182e-07 62.0459 2.17273 51.8546 6.39412C41.6632 10.6155 32.4031 16.8029 24.603 24.603C16.8029 32.4032 10.6155 41.6632 6.39412 51.8546C2.69866 60.7762 0.573197 70.2585 0.100939 79.8832C-0.0105342 82.155 1.84389 84 4.11844 84V84C6.39299 84 8.22521 82.1547 8.3488 79.8835C8.81361 71.3411 10.7226 62.9288 14.004 55.0067C17.8115 45.8147 23.3921 37.4626 30.4274 30.4274C37.4626 23.3921 45.8147 17.8115 55.0067 14.004C64.1987 10.1966 74.0506 8.23689 84 8.23689C93.9494 8.23688 103.801 10.1966 112.993 14.004C122.185 17.8115 130.537 23.3921 137.573 30.4274C144.608 37.4626 150.189 45.8147 153.996 55.0067C157.277 62.9288 159.186 71.3411 159.651 79.8835C159.775 82.1547 161.607 84 163.882 84V84Z"
                      fill="#452FF4"
                    />
                    <path
                      className="pathtwo"
                      d="M163.882 84C166.156 84 168.011 82.1547 167.899 79.8829C167.045 62.4724 160.793 45.7544 150.014 32.0557C148.607 30.2682 145.997 30.0925 144.28 31.585C142.564 33.0775 142.392 35.6725 143.789 37.4674C153.277 49.6568 158.812 64.4596 159.651 79.8831C159.775 82.1543 161.607 84 163.882 84Z"
                      fill="#ECEAFE"
                    />
                  </svg>
                  <div className="content__box">
                    <span className="count">80%</span>
                    <span className="text">Completed Projects</span>
                  </div>
                </div>
                <div className="progressbar semi-circle blue" data-value="80">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M163.882 84C166.156 84 168.011 82.155 167.899 79.8832C167.427 70.2585 165.301 60.7762 161.606 51.8546C157.384 41.6632 151.197 32.4032 143.397 24.603C135.597 16.8029 126.337 10.6155 116.145 6.39412C105.954 2.17272 95.031 -4.82182e-07 84 0C72.969 4.82182e-07 62.0459 2.17273 51.8546 6.39412C41.6632 10.6155 32.4031 16.8029 24.603 24.603C16.8029 32.4032 10.6155 41.6632 6.39412 51.8546C2.69866 60.7762 0.573197 70.2585 0.100939 79.8832C-0.0105342 82.155 1.84389 84 4.11844 84V84C6.39299 84 8.22521 82.1547 8.3488 79.8835C8.81361 71.3411 10.7226 62.9288 14.004 55.0067C17.8115 45.8147 23.3921 37.4626 30.4274 30.4274C37.4626 23.3921 45.8147 17.8115 55.0067 14.004C64.1987 10.1966 74.0506 8.23689 84 8.23689C93.9494 8.23688 103.801 10.1966 112.993 14.004C122.185 17.8115 130.537 23.3921 137.573 30.4274C144.608 37.4626 150.189 45.8147 153.996 55.0067C157.277 62.9288 159.186 71.3411 159.651 79.8835C159.775 82.1547 161.607 84 163.882 84V84Z"
                      fill="#452FF4"
                    />
                    <path
                      className="pathtwo"
                      d="M163.882 84C166.156 84 168.011 82.1547 167.899 79.8829C167.045 62.4724 160.793 45.7544 150.014 32.0557C148.607 30.2682 145.997 30.0925 144.28 31.585C142.564 33.0775 142.392 35.6725 143.789 37.4674C153.277 49.6568 158.812 64.4596 159.651 79.8831C159.775 82.1543 161.607 84 163.882 84Z"
                      fill="#ECEAFE"
                    />
                  </svg>
                  <div className="content__box">
                    <span className="count">70%</span>
                    <span className="text">Customer Satsfaction</span>
                  </div>
                </div>
                <div className="progressbar semi-circle blue" data-value="80">
                  <svg
                    width="168"
                    height="168"
                    viewBox="0 0 168 168"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M163.882 84C166.156 84 168.011 82.155 167.899 79.8832C167.427 70.2585 165.301 60.7762 161.606 51.8546C157.384 41.6632 151.197 32.4032 143.397 24.603C135.597 16.8029 126.337 10.6155 116.145 6.39412C105.954 2.17272 95.031 -4.82182e-07 84 0C72.969 4.82182e-07 62.0459 2.17273 51.8546 6.39412C41.6632 10.6155 32.4031 16.8029 24.603 24.603C16.8029 32.4032 10.6155 41.6632 6.39412 51.8546C2.69866 60.7762 0.573197 70.2585 0.100939 79.8832C-0.0105342 82.155 1.84389 84 4.11844 84V84C6.39299 84 8.22521 82.1547 8.3488 79.8835C8.81361 71.3411 10.7226 62.9288 14.004 55.0067C17.8115 45.8147 23.3921 37.4626 30.4274 30.4274C37.4626 23.3921 45.8147 17.8115 55.0067 14.004C64.1987 10.1966 74.0506 8.23689 84 8.23689C93.9494 8.23688 103.801 10.1966 112.993 14.004C122.185 17.8115 130.537 23.3921 137.573 30.4274C144.608 37.4626 150.189 45.8147 153.996 55.0067C157.277 62.9288 159.186 71.3411 159.651 79.8835C159.775 82.1547 161.607 84 163.882 84V84Z"
                      fill="#452FF4"
                    />
                    <path
                      className="pathtwo"
                      d="M163.882 84C166.156 84 168.011 82.1547 167.899 79.8829C167.045 62.4724 160.793 45.7544 150.014 32.0557C148.607 30.2682 145.997 30.0925 144.28 31.585C142.564 33.0775 142.392 35.6725 143.789 37.4674C153.277 49.6568 158.812 64.4596 159.651 79.8831C159.775 82.1543 161.607 84 163.882 84Z"
                      fill="#ECEAFE"
                    />
                  </svg>
                  <div className="content__box">
                    <span className="count">70%</span>
                    <span className="text">Expert Employees</span>
                  </div>
                </div>
              </div>
              <div className="project__qustion">
                <div className="project__qustion__left">
                  <h5>Have any question about us?</h5>
                  <p>Don&#39;t hesitate to contact us.</p>
                </div>
                <div className="project__qustion__right">
                  <Link href="/contact" className="cmn--btn">
                    <span>Contact us</span>
                  </Link>
                </div>
              </div>
              <div className="promap2">
                <Image src={map} alt="map" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* col */}
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="jeb__round">
        <Image src={j_shape} alt="jshape" className="img-fluid" />
      </div>
      <div className="threed__round">
        <Image src={ball3d} alt="jshape" className="img-fluid" />
      </div>
      <div className="threed__round2">
        <Image src={ball_element} alt="jshape" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default Porfessional;
