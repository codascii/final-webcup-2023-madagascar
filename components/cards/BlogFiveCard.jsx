import Image from "next/image";
import Link from "next/link";

const BlogFiveCard = ({ itm, index }) => {
  const { title, desc, img, tag } = itm;
  return (
    <div className="capabilities__items">
      <Link
        href="/studies-details"
        className={`thumb ${index % 2 !== 0 ? "order-1" : ""}`}
      >
        <Image src={img} alt="capabi" className="img-fluid" />
      </Link>
      <div className="content">
        <Link href="/" className="cmn--btn capabilites__btn">
          <span>{tag}</span>
        </Link>
        <h4>
          <Link href="/studies-details">{title.slice(0, 20)}</Link>
        </h4>
        <p>{desc}</p>
        <Link href="/studies-details" className="difference__btn">
          <span>Read More</span>
          <span className="icon">
            <i className="material-symbols-outlined">east</i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogFiveCard;
