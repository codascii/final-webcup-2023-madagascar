import Image from "next/image";
import Link from "next/link";
import bl2 from "/public//img/bog-capabilities/bl2.jpg";
import smai from "/public/img/bog-capabilities/smai.jpg";
import re3 from "/public/img/detaisl/re3.jpg";
import re4 from "/public/img/detaisl/re4.jpg";

const RecentNews = () => {
  return (
    <>
      <h5 className="title">Recent News</h5>
      <div className="recent__wrap">
        <Link href="/blog-details" className="recent__items">
          <span className="thumb">
            <Image src={smai} alt="img" className="img-fluid" />
          </span>
          <div className="recent__content">
            <h6>AI is being used to analyze social...</h6>
            <span className="recent__btn">
              <span>Read More</span>
              <span className="icon">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </span>
            </span>
          </div>
        </Link>
        <Link href="/blog-details" className="recent__items">
          <span className="thumb">
            <Image src={bl2} alt="img" className="img-fluid" />
          </span>
          <div className="recent__content">
            <h6>Google has announced plans...</h6>
            <span className="recent__btn">
              <span>Read More</span>
              <span className="icon">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </span>
            </span>
          </div>
        </Link>
        <Link href="/blog-details" className="recent__items">
          <span className="thumb">
            <Image src={re3} alt="img" className="img-fluid" />
          </span>
          <div className="recent__content">
            <h6>AI is also being used in the healthcare...</h6>
            <span className="recent__btn">
              <span>Read More</span>
              <span className="icon">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </span>
            </span>
          </div>
        </Link>
        <Link href="/blog-details" className="recent__items">
          <span className="thumb">
            <Image src={re4} alt="img" className="img-fluid" />
          </span>
          <div className="recent__content">
            <h6>There is growing interest in using...</h6>
            <span className="recent__btn">
              <span>Read More</span>
              <span className="icon">
                <i className="material-symbols-outlined">arrow_right_alt</i>
              </span>
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RecentNews;
