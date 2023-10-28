import serviceData from "@/data/serviceData";
import ServiceCard from "../cards/ServiceCard";
import Pagination from "../pagination/Pagination";

const ServicesMain = () => {
  return (
    <section className="service__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="include__boxes include__grid__boxes">
            <div className="row g-4">
              {serviceData.map((itm) => (
                <div
                  key={itm.id}
                  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6"
                >
                  {/* Service Card */}
                  <ServiceCard itm={itm} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default ServicesMain;
