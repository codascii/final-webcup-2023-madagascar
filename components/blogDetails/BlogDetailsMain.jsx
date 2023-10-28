import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";

const BlogDetailsMain = () => {
  return (
    <section className="service__section bg__white pt-120 pb-80">
      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            {/* Details Left */}
            <DetailsLeft />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* Details Right */}
            <DetailsRight />
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default BlogDetailsMain;
