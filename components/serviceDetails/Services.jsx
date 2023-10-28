import Image from "next/image";
import Link from "next/link";
import ana from "/public/img/svg-icon/ana.svg";
import clo from "/public/img/svg-icon/clo.svg";
import iai from "/public/img/svg-icon/iai.svg";
import iaph from "/public/img/svg-icon/iaph.svg";
import imac from "/public/img/svg-icon/imac.svg";
import iphy from "/public/img/svg-icon/iphy.svg";
import ivar from "/public/img/svg-icon/ivar.svg";

const Services = () => {
  return (
    <div className="service__link__wrap">
      <Link href="/">
        <span className="icon">
          <Image src={iai} alt="img" />
        </span>
        <span>Robotic Automation</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={imac} alt="img" />
        </span>
        <span>Machine Learning</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={ivar} alt="img" />
        </span>
        <span>Virtual Reality</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={clo} alt="img" />
        </span>
        <span>AI For Cloud Services</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={ana} alt="img" />
        </span>
        <span>Predictive Analytics</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={iphy} alt="img" />
        </span>
        <span>Deep Learning</span>
      </Link>
      <Link href="/">
        <span className="icon">
          <Image src={iaph} alt="img" />
        </span>
        <span>Statistical Modeling</span>
      </Link>
    </div>
  );
};

export default Services;
