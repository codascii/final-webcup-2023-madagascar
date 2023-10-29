import Link from "next/link";

const ContactHelp = () => {
  return (
    <section className="need__help bg__white pt-120 pb-120">
      {/* container- */}
      <div className="container">
        <div className="section__header section__center pb__60">
          <h2>Besoin d'aide ?</h2>
          <p>Questions, plaintes et commentaires. Nous serons heureux de vous servire</p>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="help__box">
              <div className="icon">
                <i className="material-symbols-outlined">add_call</i>
              </div>
              <div className="cont">
                <h5>Call Now</h5>
                <Link href="tel:0269123456">0269123456</Link>
                <Link href="tel:0269123498">0269123498</Link>
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
                <Link href="mailto:contact@altesphere.com">contact@altesphere.com</Link>
                <Link href="mailto:sarah@altesphere.com">sarah@altesphere.com</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="help__box">
              <div className="icon icon3">
                <i className="material-symbols-outlined">pin_drop</i>
              </div>
              <div className="cont">
                <h5>Localisation</h5>
                <Link href="javascript:void(0)" >17 rue Kaweni</Link>
                <Link href="javascript:void(0)">97600 Mayotte</Link>
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
