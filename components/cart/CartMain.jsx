import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import cartitem from "/public/img/shop/cartitem.png";

const CartMain = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="cart__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="main__cart__wrap">
          <div className="row">
            <div className="col-12">
              <div className="cart__wrapper">
                <div className="cart-items-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-item">
                        <td className="cart-item-info">
                          <Image src={cartitem} alt="Image" />
                          <span className="secondary-text">White Gloves</span>
                        </td>
                        <td className="cart-item-price">
                          $ <span className="base-price">165.00</span>
                        </td>
                        <td>
                          <div className="cart-item-quantity">
                            <span className="cart-item-quantity-amount">
                              {quantity}
                            </span>
                            <div className="cart-item-quantity-controller">
                              <Link
                                href="#"
                                className="cart-increment"
                                onClick={incrementQuantity}
                              >
                                <i className="material-symbols-outlined">
                                  expand_less
                                </i>
                              </Link>
                              <Link
                                href="#"
                                className="cart-decrement"
                                onClick={decrementQuantity}
                              >
                                <i className="material-symbols-outlined">
                                  expand_more
                                </i>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="cart-item-price">
                          ${" "}
                          <span className="total-price">
                            {quantity * 165}.00
                          </span>
                        </td>
                        <td className="cart-item-remove">
                          <Link href="#">
                            <i className="material-symbols-outlined">close</i>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart__wrapper-footer">
                  <form action="/cart">
                    <input
                      type="text"
                      name="promo-code"
                      id="promoCode"
                      placeholder="Promo code"
                      required
                    />
                    <button type="submit" className="cmn--btn">
                      <span>Apply Code</span>
                    </button>
                  </form>
                  <Link href="/cart" className="cmn--btn">
                    <span>Update Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6"></div>
            <div className="col-xl-6">
              <div className="cart__pragh__box">
                <div className="cart__graph">
                  <h5>Cart Total</h5>
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span className="bg">$230.00</span>
                    </li>
                    <li>
                      <span>Shipping</span>
                      <span className="bg">$5</span>
                    </li>
                    <li>
                      <span>Total</span>
                      <span className="bg tprice">$235.00</span>
                    </li>
                  </ul>
                  <div className="chck">
                    <Link href="/checkout" className="cmn--btn">
                      <span>Checkout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default CartMain;
