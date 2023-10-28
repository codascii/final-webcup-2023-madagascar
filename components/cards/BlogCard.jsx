import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ itm, clss = "", setOpen }) => {
  const { title, desc, img, tag } = itm;

  return (
    <div className={`capabilities__items ${clss}`}>
      <div className="thumb">
        <Image src={img} alt="capabi" className="img-fluid" />
        <button
          className="play__btn video-btn border-0 text-white"
          onClick={() => setOpen(true)}
        >
          <i className="material-symbols-outlined">play_arrow</i>
        </button>
      </div>
      <div className="content">
        <Link href="/studies-one" className="cmn--btn capabilites__btn">
          <span>{tag}</span>
        </Link>
        <h4>
          <Link href="/studies-details">{title}</Link>
        </h4>
        <p>{desc}</p>
        <Link href="/studies-one" className="capa__more">
          <span>Read More</span>
          <i className="material-symbols-outlined">east</i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
