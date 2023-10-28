import BlogThreeCard from "../cards/BlogThreeCard";
import Pagination from "../pagination/Pagination";
import studiesData from "./studiesData";

const StudiesThreeMain = () => {
  return (
    <section className="studies__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row g-4 justify-content-center align-items-center">
          {studiesData.map((itm) => (
            <div key={itm.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              {/* Blog Three Card */}
              <BlogThreeCard itm={itm} />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination />
        {/* Pagination */}
      </div>
      {/* container */}
    </section>
  );
};

export default StudiesThreeMain;
