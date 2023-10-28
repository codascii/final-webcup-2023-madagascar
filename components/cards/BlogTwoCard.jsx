import Image from "next/image";
import Link from "next/link";

const BlogTwoCard = ({ itm, setOpen }) => {
  const { title, desc, img, tag } = itm;

  return (
    <div className="realworld__items">
      <div className="thumb">
        <Image src={img} alt="img" height={262} width={228} />
        <button
          className="play__btn video-btn border-0 text-white"
          onClick={() => setOpen(true)}
        >
          <i className="material-symbols-outlined">play_arrow</i>
        </button>
      </div>
      <div className="content">
        <h6>{tag}</h6>
        <h4>
          <Link href="/studies-details">{title.slice(0, 20)}</Link>
        </h4>
        <p>{desc}</p>
        <Link href="/studies-details" className="real__btn">
          <span>Read More</span>
          <span className="icon">
            <i className="material-symbols-outlined">arrow_right_alt</i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogTwoCard;
