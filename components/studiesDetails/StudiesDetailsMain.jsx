import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const StudiesDetailsMain = () => {
  return (
    <section className="service__section bg__white pt-120">
      {/* container */}
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <LeftSide />

          {/* Right Side */}
          <RightSide />
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default StudiesDetailsMain;
