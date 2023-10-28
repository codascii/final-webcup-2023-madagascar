import Link from "next/link";
import { useState } from "react";

const CheckoutMain = () => {
  const [payment, setPayment] = useState("Credit/Debit Cards");

  const changeHandle = (e) => {
    setPayment(e.target.value);
  };

  return (
    <section className="cart__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" method="post">
              <div className="row g-4">
                <div className="col-md-5 col-lg-4 col-xl-3">
                  <div className="checkout__radio">
                    <p className="primary-text">Select any one</p>
                    <div className="checkout__radio-wrapper">
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="cCard"
                          name="pay-method"
                          value="Credit/Debit Cards"
                          onChange={changeHandle}
                        />
                        <label htmlFor="cCard" className="ms-1">
                          Credit/Debit Cards
                        </label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="paypal"
                          name="pay-method"
                          value="PayPal"
                          onChange={changeHandle}
                        />
                        <label htmlFor="paypal" className="ms-1">
                          PayPal
                        </label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="payoneer"
                          name="pay-method"
                          value="Payoneer"
                          onChange={changeHandle}
                        />
                        <label htmlFor="payoneer" className="ms-1">
                          Payoneer
                        </label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="visa"
                          name="pay-method"
                          value="Visa"
                          onChange={changeHandle}
                        />
                        <label htmlFor="visa" className="ms-1">
                          Visa
                        </label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="mastercard"
                          name="pay-method"
                          value="Mastercard"
                          onChange={changeHandle}
                        />
                        <label htmlFor="mastercard" className="ms-1">
                          Mastercard
                        </label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          id="fastPay"
                          name="pay-method"
                          value="Fastpay"
                          onChange={changeHandle}
                        />
                        <label htmlFor="fastPay" className="ms-1">
                          Fastpay
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div className="checkout__single-wrapper">
                    <div className="checkout__single boxshado__single">
                      <h4>Billing address</h4>
                      <div className="checkout__single-form">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="input-single">
                              <input
                                type="text"
                                name="user-first-name"
                                id="userFirstName"
                                required
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <input
                                required
                                type="text"
                                name="user-last-name"
                                id="userLastName"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <input
                                required
                                type="email"
                                name="user-check-email"
                                id="userCheckEmail"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <select className="country-select">
                                <option value="usa">USA</option>
                                <option value="aus">Aus</option>
                                <option value="uk">UK</option>
                                <option value="ned">NED</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-single">
                              <textarea
                                name="user-address"
                                id="userAddress"
                                placeholder="Address"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="checkout__single checkout__single__bg">
                      <h4>Payment Methods</h4>
                      <div className="checkout__single-form">
                        <p className="payment">{payment}</p>
                        <div className="row g-3">
                          <div className="col-lg-12">
                            <div className="input-single">
                              <label htmlFor="userCardNumber">
                                Card number
                              </label>
                              <input
                                required
                                type="number"
                                name="user-card-number"
                                id="userCardNumber"
                                placeholder="0000 0000 0000 0000"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <label htmlFor="userCardDate">Expiry date</label>
                              <input
                                required
                                type="text"
                                id="userCardDate"
                                placeholder="DD/MM/YY"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-single">
                              <label htmlFor="userCvc">Cvc / Cvv</label>
                              <input
                                required
                                type="text"
                                maxLength="3"
                                name="user-card-cvc"
                                id="userCvc"
                                placeholder="3 Digits"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-single">
                              <label htmlFor="userCardName">Name on card</label>
                              <input
                                required
                                type="text"
                                name="user-card-name"
                                id="userCardName"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-single input-check payment__save">
                        <input
                          required
                          type="checkbox"
                          className="form-check-input"
                          name="save-for-next"
                          id="saveForNext"
                        />
                        <label htmlFor="saveForNext">
                          Save for my next payment
                        </label>
                      </div>
                      <div className="text-center mt-4">
                        <Link href="/payment-successfull" className="cmn--btn">
                          <span>Payment Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default CheckoutMain;
