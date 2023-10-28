import studiesData from "@/data/studiesData";
import BlogFiveCard from "../cards/BlogFiveCard";
import Pagination from "../pagination/Pagination";

const StudiesFiveMain = () => {
  return (
    <section className="case__trough case__different__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row g-4 justify-content-center">
          {studiesData.slice(0, 8).map((itm, i) => (
            <div key={itm.id} className="col-xxl-6 col-xl-6 col-lg-6">
              {/* Blog Five Card */}
              <BlogFiveCard itm={itm} index={i} />
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

export default StudiesFiveMain;
