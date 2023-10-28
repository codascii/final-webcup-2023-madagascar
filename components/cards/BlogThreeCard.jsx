import Image from "next/image";
import Link from "next/link";

const BlogThreeCard = ({ itm }) => {
  const { title, desc, img } = itm;

  return (
    <div className="success__stry__item">
      <div className="thumb">
        <Image src={img} alt="img" className="img-fluid" />
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{desc}</p>
        <Link href="/studies-details">
          <span>Read More</span>
          <span className="icon">
            <i className="material-symbols-outlined">east</i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogThreeCard;
