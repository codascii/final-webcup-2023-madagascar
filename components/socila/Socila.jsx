import Image from "next/image";
import Link from "next/link";
import facebook from "/public/img/calltoaction/facebook.svg";
import instagram from "/public/img/calltoaction/instagram.svg";
import linkedin from "/public/img/calltoaction/linkedin.svg";
import twitter from "/public/img/calltoaction/twitter.svg";

const Socila = () => {
  return (
    <ul className="social__standard">
      <li>
        <Link href="#" className="social__item">
          <Image src={facebook} alt="icon" className="img-fluid" />
        </Link>
      </li>
      <li>
        <Link href="#" className="social__item social__itemtwo">
          <Image src={instagram} alt="icon" className="img-fluid" />
        </Link>
      </li>
      <li>
        <Link href="#" className="social__item social__itemthree">
          <Image src={twitter} alt="icon" className="img-fluid" />
        </Link>
      </li>
      <li>
        <Link href="#" className="social__item social__itemfour">
          <Image src={linkedin} alt="icon" className="img-fluid" />
        </Link>
      </li>
    </ul>
  );
};

export default Socila;
