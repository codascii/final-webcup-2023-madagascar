const ContactForm = () => {
  return (
    <section className="contact__section bg__white pt-120 pb-120">
      <div className="container">
        <div className="section__header section__center pb__60">
          <h2>Get in touch with us.</h2>
          <p>
            Fill up the form and our team will get back to you within 24 hours
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form_area">
              <form id="form">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="Name">Name</label>
                      <input
                        type="text"
                        id="Name"
                        placeholder="Enter Your Mane..."
                        required
                      />
                      <small>Error message</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="semail">Email</label>
                      <input
                        type="email"
                        id="semail"
                        placeholder="Enter Your Email..."
                        required
                      />
                      <small>Error message</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-control">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="number"
                        id="phone"
                        placeholder="Enter Your Number..."
                        required
                      />
                      <small>Error message</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <label id="country">Country</label>
                    <div className="select-wrapper">
                      <select>
                        <option value="1">Country...</option>
                        <option value="1">....</option>
                        <option value="1">....</option>
                        <option value="1">....</option>
                        <option value="1">....</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-control">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="10"
                        rows="5"
                        placeholder="Enter Your Message..."
                      ></textarea>
                      <small>Error message</small>
                    </div>
                  </div>
                </div>
                <div className="submit__btn text-center mt-4">
                  <button type="submit" className="cmn--btn">
                    <span>Send Message</span>
                  </button>
                </div>
                <div className="thank_you">
                  <p>Your Message is successfully send !</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
