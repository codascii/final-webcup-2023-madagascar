import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ itm, clss }) => {
  const { name, img, price, discountPrice } = itm;
  return (
    <div className={`shop__items ${clss}`}>
      <div className="thumb">
        <Link href="/shop/{id}">
          <Image src={img} alt="img" />
        </Link>
      </div>
      <div className="content">
        <h4>
          <Link href="/shop/{id}">{name}</Link>
        </h4>
        <span className="price__wrap">
          <span className="price">${discountPrice}</span>
          <span className="price_hide">${price}</span>
        </span>
        <div className="ratting">
          <span>
            <i className="material-symbols-outlined">star</i>
          </span>
          <span>
            <i className="material-symbols-outlined">star</i>
          </span>
          <span>
            <i className="material-symbols-outlined">star</i>
          </span>
          <span>
            <i className="material-symbols-outlined">star</i>
          </span>
          <span>
            <i className="material-symbols-outlined">star_half</i>
          </span>
        </div>
        <div className="shop__btn">
          <Link href="/" className="cmn--btn">
            <span>Add Cart</span>
          </Link>
          <Link href="/" className="cmn--btn bg__trns">
            <span>Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
