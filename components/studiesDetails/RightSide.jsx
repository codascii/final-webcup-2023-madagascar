import Image from "next/image";
import Link from "next/link";
import Socila from "../socila/Socila";
import Tags from "./Tags";
import scace3 from "/public/img/bog-capabilities/scace3.jpg";
import scase1 from "/public/img/bog-capabilities/scase1.jpg";
import scase2 from "/public/img/bog-capabilities/scase2.jpg";
import scase4 from "/public/img/bog-capabilities/scase4.jpg";

const RightSide = () => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="service__details__right">
        <div className="common__item">
          <h5 className="title">Search</h5>
          <form action="/">
            <input type="text" placeholder="Search" required />
            <button>
              <i className="material-symbols-outlined">search</i>
            </button>
          </form>
        </div>
        <div className="common__item">
          <h5 className="title">Recent Case Studies</h5>
          <div className="recent__wrap">
            <Link href="/studies-details" className="recent__items">
              <span className="thumb">
                <Image src={scase1} alt="img" className="img-fluid" />
              </span>
              <div className="recent__content">
                <h6 className="fw500">AI is being used to analyze social...</h6>
                <span className="recent__btn">
                  <span>Read More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </span>
              </div>
            </Link>
            <Link href="/studies-details" className="recent__items">
              <span className="thumb">
                <Image src={scase2} alt="img" className="img-fluid" />
              </span>
              <div className="recent__content">
                <h6 className="fw500">
                  classNameifying AI photos Gallery Service
                </h6>
                <span className="recent__btn">
                  <span>Read More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </span>
              </div>
            </Link>
            <Link href="/studies-details" className="recent__items">
              <span className="thumb">
                <Image src={scace3} alt="img" className="img-fluid" />
              </span>
              <div className="recent__content">
                <h6 className="fw500">Image recognition AI technology</h6>
                <span className="recent__btn">
                  <span>Read More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </span>
              </div>
            </Link>
            <Link href="/studies-details" className="recent__items">
              <span className="thumb">
                <Image src={scase4} alt="img" className="img-fluid" />
              </span>
              <div className="recent__content">
                <h6 className="fw500">Amazon AI technology</h6>
                <span className="recent__btn">
                  <span>Read More</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">arrow_right_alt</i>
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="common__item">
          <h5 className="title">Popular Tags</h5>
          {/* Tags */}
          <Tags />
        </div>
        <div className="common__item">
          <h5 className="title">Follow Our Journey</h5>
          {/* Socila */}
          <Socila />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
