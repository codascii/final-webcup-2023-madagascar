import studiesData from "@/data/studiesData";
import BlogFourCard from "../cards/BlogFourCard";
import Pagination from "../pagination/Pagination";

const StudiesFourMain = () => {
  return (
    <section className="studies__section case__trough bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row mt__customcase g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="capa__case__box">
              {studiesData.slice(0, 4).map((itm) => (
                <BlogFourCard key={itm.id} itm={itm} />
              ))}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="capa__case__boxmiddle">
              {studiesData.slice(4, 8).map((itm) => (
                <BlogFourCard key={itm.id} itm={itm} />
              ))}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="capa__case__box3 capa__flex__lg">
              {studiesData.slice(5, 9).map((itm) => (
                <BlogFourCard key={itm.id} itm={itm} />
              ))}
            </div>
          </div>
        </div>
        {/* Pagination */}
        <Pagination />
        {/* Pagination */}
      </div>
      {/* container */}
    </section>
  );
};

export default StudiesFourMain;
