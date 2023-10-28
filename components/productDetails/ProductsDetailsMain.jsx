import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import review from "/public/img/detaisl/review.png";
import ladies from "/public/img/shop/ladies.png";

const ProductsDetailsMain = () => {
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState("#C57381");

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

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <section className="ladies__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* col grid */}
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="ladies__thumb">
              <Image src={ladies} alt="img" className="img-fluid" />
            </div>
          </div>
          {/* col grid */}
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="ladies__content">
              <h3>Luxe Ladies Bags</h3>
              <div className="describtion__reviews">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Describtion
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="describtion">
                  <div
                    className="tab-pane fade"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p className="describtion__text">
                      An AI review refers to the evaluation and analysis of an
                      artificial intelligence system or application. This could
                      involve assessing its performance, accuracy, reliability,
                      and security...
                    </p>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="reviews__boxes">
                      <div className="thumb">
                        <Image src={review} alt="img" />
                      </div>
                      <div className="review-content">
                        <div className="name__ratting">
                          <span className="name">Jerome Bell</span>
                          <span className="time">2 days ago</span>
                          <div className="ratting">
                            <span>
                              <i className="material-symbols-outlined">grade</i>
                            </span>
                            <span>
                              <i className="material-symbols-outlined">grade</i>
                            </span>
                            <span>
                              <i className="material-symbols-outlined">grade</i>
                            </span>
                            <span>
                              <i className="material-symbols-outlined">grade</i>
                            </span>
                            <span>
                              <i className="material-symbols-outlined">
                                star_half
                              </i>
                            </span>
                          </div>
                        </div>
                        <p>
                          An AI review refers to the evaluation and analysis of
                          an artificial intelligence system or application. This
                          could involve assessing its performance, accuracy,
                          reliability, and security...
                        </p>
                        <Link href="/shop/1" className="view__btn">
                          <span>View More</span>
                          <span className="icon">
                            <i className="material-symbols-outlined">
                              arrow_right_alt
                            </i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-description__content-footer">
                <div className="product-pricing">
                  <div className="product-pricing-single">
                    <div className="product-color-variations">
                      <label htmlFor="productColor">
                        <input
                          type="color"
                          id="productColor"
                          name="product-color"
                          value={color}
                          onChange={changeColor}
                        />
                        <i className="material-symbols-outlined">expand_more</i>
                      </label>
                    </div>
                  </div>
                  <div className="product-pricing-single product-pricing-calculator">
                    <span className="cart-decre" onClick={decrementQuantity}>
                      <i className="material-symbols-outlined">remove</i>
                    </span>
                    <span className="product-quant">{quantity}</span>
                    <span className="cart-incre" onClick={incrementQuantity}>
                      <i className="material-symbols-outlined">add</i>
                    </span>
                  </div>
                  <div className="product-pricing-single">
                    <p>
                      $ <span className="product-pri">0.00</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col grid */}
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default ProductsDetailsMain;
