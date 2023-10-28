import ContactTab from "./ContactTab";
import HomeTab from "./HomeTab";
import ProfileTab from "./ProfileTab";

const TermsCondition = () => {
  return (
    <section className="terms_condition pt-120 pb-120">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-3 col-lg-3">
            <div className="condition__terms__tab">
              <ul className="nav nav-tabs" id="myTabterms" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tabterm"
                    data-bs-toggle="tab"
                    data-bs-target="#hometerm"
                    type="button"
                    role="tab"
                    aria-controls="hometerm"
                    aria-selected="true"
                  >
                    {" "}
                    Support
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tabterm"
                    data-bs-toggle="tab"
                    data-bs-target="#profileterm"
                    type="button"
                    role="tab"
                    aria-controls="profileterm"
                    aria-selected="false"
                  >
                    Vie privée et sécurité 
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tabterm"
                    data-bs-toggle="tab"
                    data-bs-target="#contactterm"
                    type="button"
                    role="tab"
                    aria-controls="contactterm"
                    aria-selected="false"
                  >
                    Terms & Condition
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="terms__condition__body">
              <div className="tab-content" id="myTabContent">
                {/* Home Tab */}
                <HomeTab />

                {/* Profile Tab */}
                <ProfileTab />

                {/* Contact Tab */}
                <ContactTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
