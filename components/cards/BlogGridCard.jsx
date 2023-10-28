import Image from "next/image";
import Link from "next/link";

const BlogGridCard = ({ item }) => {
  const { title, author, date, desc, img } = item;

  return (
    <div className="capabilities__items blog__grid__items">
      <Link href="/blog-details" className="thumb">
        <Image src={img} alt="capabi" className="img-fluid" />
      </Link>
      <div className="content">
        <h4>
          <Link href="/blog-details">{title}</Link>
        </h4>
        <ul className="admin__wrap">
          <li>
            <span className="icon">
              <i className="material-symbols-outlined">group</i>
            </span>
            <span>{author}</span>
          </li>
          <li>
            <span className="icon">
              <i className="material-symbols-outlined">event_available</i>
            </span>
            <span>{date}</span>
          </li>
        </ul>
        <p>{desc}</p>
        <Link href="/blog-details" className="capa__more">
          <span>Read More</span>
          <i className="material-symbols-outlined">east</i>
        </Link>
      </div>
    </div>
  );
};

export default BlogGridCard;
