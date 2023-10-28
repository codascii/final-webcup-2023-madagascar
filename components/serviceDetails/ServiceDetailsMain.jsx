import LeftSide from "./LeftSide";
//import RightSide from "./RightSide";

const ServiceDetailsMain = () => { 
  
  return (
    <section className="service__section bg__white pt-120 pb-120">
      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-xxl- col-xl- col-lg-">
            {/* Left Side */}
            <LeftSide />
          </div>
          {/* <div className="col-xxl-4 col-xl-4 col-lg-4">
            Right Side 
            <RightSide />
          </div>*/}
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default ServiceDetailsMain;
