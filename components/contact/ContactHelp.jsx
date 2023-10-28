import Link from "next/link";

const ContactHelp = () => {
  return (
    <section className="need__help bg__white pt-120 pb-120">
      {/* container- */}
      <div className="container">
        <div className="section__header section__center pb__60">
          <h2>Need more help?</h2>
          <p>Queries, complaints and feedback. We will be happy to serve you</p>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="help__box">
              <div className="icon">
                <i className="material-symbols-outlined">add_call</i>
              </div>
              <div className="cont">
                <h5>Call Now</h5>
                <Link href="#">(907) 555-0101</Link>
                <Link href="#">(252) 555-0126</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="help__box">
              <div className="icon icon2">
                <i className="material-symbols-outlined">mark_as_unread</i>
              </div>
              <div className="cont">
                <h5>Email Address</h5>
                <Link href="3">sara.cruz@example.com</Link>
                <Link href="#">bill.sanders@example.com</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="help__box">
              <div className="icon icon3">
                <i className="material-symbols-outlined">pin_drop</i>
              </div>
              <div className="cont">
                <h5>Location</h5>
                <Link href="#">Royal Ln. Mesa, New Jersey 45463</Link>
                <Link href="#">Thornridge Cir. Shiloh, Hawaii 81063</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container- */}
    </section>
  );
};

export default ContactHelp;
