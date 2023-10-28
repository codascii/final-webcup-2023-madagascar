import Image from "next/image";
import Link from "next/link";
import re1 from "/public/img/detaisl/re1.jpg";
import re2 from "/public/img/detaisl/re2.jpg";
import re3 from "/public/img/detaisl/re3.jpg";
import re4 from "/public/img/detaisl/re4.jpg";

const RecentNews = () => {
  return (
    <div className="recent__wrap">
      <Link href="/service-details" className="recent__items">
        <span className="thumb">
          <Image src={re1} alt="img" className="img-fluid" />
        </span>
        <div className="recent__content">
          <h6>OpenAI and Microsoft Extend Partnership</h6>
          <span className="date">January 23, 2023</span>
        </div>
      </Link>
      <Link href="/service-details" className="recent__items">
        <span className="thumb">
          <Image src={re2} alt="img" className="img-fluid" />
        </span>
        <div className="recent__content">
          <h6>Real-time tracking of wildfire boundaries...</h6>
          <span className="date">January 23, 2023</span>
        </div>
      </Link>
      <Link href="/service-details" className="recent__items">
        <span className="thumb">
          <Image src={re3} alt="img" className="img-fluid" />
        </span>
        <div className="recent__content">
          <h6>Google is holding an event about...</h6>
          <span className="date">January 23, 2023</span>
        </div>
      </Link>
      <Link href="/service-details" className="recent__items">
        <span className="thumb">
          <Image src={re4} alt="img" className="img-fluid" />
        </span>
        <div className="recent__content">
          <h6>Amazon AI technology</h6>
          <span className="date">January 23, 2023</span>
        </div>
      </Link>
    </div>
  );
};

export default RecentNews;
