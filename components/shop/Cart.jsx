import Image from "next/image";
import Link from "next/link";
import sluxe from "/public/img/shop/sluxe.png";

const Cart = () => {
  return (
    <div className="Cart__wrap">
      <div className="cart__head">
        <div className="thumb">
          <Image src={sluxe} alt="img" />
        </div>
        <Link href="/" className="cross__icon">
          <i className="material-symbols-outlined">backspace</i>
        </Link>
        <div className="head__content">
          <h5>Luxe Ladies Bags</h5>
          <span className="luxeprice">1*$165.00</span>
        </div>
      </div>
      <div className="subprice">
        <span className="sub">Subtotal :</span>
        <span className="price">$165.00</span>
      </div>
      <div className="shop__btn">
        <Link href="/cart" className="cmn--btn">
          <span>View Cart</span>
        </Link>
        <Link href="/checkout" className="cmn--btn bg__trns">
          <span>Cheakout</span>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
