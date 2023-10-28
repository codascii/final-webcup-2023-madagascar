import Image from "next/image";
import Link from "next/link";
import ball_element from "/public/img/elements/ball-element.png";
import ball3d from "/public/img/elements/ball3d.png";
import j_shape from "/public/img/elements/j-shape.png";

const PricingInformation = () => {
  return (
    <section className="plan__section plan__section__three bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        {/* header */}
        <div className="section__header section__center pb__40">
          <h2 className="wow fadeInUp" data-wow-duration="2.2s">
            Pricing Information
          </h2>
          <p className="wow fadeInUp" data-wow-duration="2.2s">
            AI is the broader concept of machines being able to carry out tasks
            in a way that would normally require human intelligence.
          </p>
        </div>
        {/* header */}
        {/* pricing save */}
        <div className="plan__save pb__60 fadeInDown" data-wow-duration="2.5s">
          <span className="month">Monthly</span>
          <div className="yearly__bar form-switch">
            <input className="form-check-input" type="checkbox" />
          </div>
          <h5>
            Yearly <span>(Save 30%)</span>
          </h5>
        </div>
        {/* pricing save */}
        <div className="table__main wow fadeInUp" data-wow-duration="2.9s">
          <table className="pricing__table center">
            <thead>
              <tr>
                <th></th>
                <th>
                  <span className="title">Basic</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">15.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Premimum</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">25.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Corporate</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">35.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
                <th>
                  <span className="title">Business</span>
                  <span className="price__area">
                    <span className="dollar">&</span>
                    <span className="price">45.00</span>
                    <span className="month">/Monthly</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project</td>
                <td>1</td>
                <td>5</td>
                <td>20</td>
                <td>90</td>
              </tr>
              <tr>
                <td>API Accrss</td>
                <td>100k</td>
                <td>200k</td>
                <td>300k</td>
                <td>900k</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>100MB</td>
                <td>200MB</td>
                <td>300MB</td>
                <td>900MB</td>
              </tr>
              <tr>
                <td>Weekly Reports</td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
              </tr>
              <tr>
                <td>24/7 Support</td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined danger">dangerous</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
                <td>
                  <i className="material-symbols-outlined success">task_alt</i>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link href="#" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
                <td>
                  <Link href="/pricing" className="cmn--btn">
                    <span>Choose Plan</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* container */}
      {/* elements */}
      <div className="digital__ball">
        <Image src={j_shape} alt="img" className="img-fluid" />
      </div>
      <div className="digital__ballelement">
        <Image src={ball_element} alt="img" className="img-fluid" />
      </div>
      <div className="digital__round">
        <Image src={ball3d} alt="img" className="img-fluid" />
      </div>
      {/* elements */}
    </section>
  );
};

export default PricingInformation;
