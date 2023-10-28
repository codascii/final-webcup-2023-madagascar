import Image from "next/image";
import Link from "next/link";

const BlogListCard = ({ item }) => {
  const { title, author, date, desc, img } = item;

  return (
    <div className="realworld__items blog__list__items">
      <div className="thumb">
        <Image src={img} alt="img" className="img-fluid" />
      </div>
      <div className="content">
        <h4>
          <Link href="/blog-details">{title.slice(0, 33)}...</Link>
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
        <Link href="/blog-details" className="real__btn">
          <span>Read More</span>
          <span className="icon">
            <i className="material-symbols-outlined">arrow_right_alt</i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogListCard;
