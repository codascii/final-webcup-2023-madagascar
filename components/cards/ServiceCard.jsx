import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ itm }) => {
  const { title, details, icon, clss } = itm;

  return (
    <div className={`inclue__box ${clss}`}>
      <div className="icnos">
        <Image src={icon} alt="icon" />
      </div>
      <div className="content">
        <h4>
          <Link href="/service-details">{title}</Link>
        </h4>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
