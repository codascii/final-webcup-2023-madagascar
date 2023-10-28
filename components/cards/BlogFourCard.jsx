import Image from "next/image";
import Link from "next/link";

const BlogFourCard = ({ itm }) => {
  const { title, desc, img, tag } = itm;
  return (
    <div className="capabilities__items">
      <Link href="/studies-details" className="thumb">
        <Image src={img} alt="capabi" className="img-fluid" />
      </Link>
      <div className="content">
        <Link href="/" className="cmn--btn capabilites__btn">
          <span>{tag}</span>
        </Link>
        <h4>
          <Link href="/studies-details">{title.slice(0, 18)}</Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogFourCard;
