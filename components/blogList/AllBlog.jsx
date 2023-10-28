import blogData from "@/data/blogData";
import BlogListCard from "../cards/BlogListCard";
import Pagination from "../pagination/Pagination";

const AllBlog = () => {
  return (
    <section className="blog__grid__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* col grid */}
          {blogData.map((itm, i) => (
            <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              {/* Blog Card */}
              <BlogListCard item={itm} />
            </div>
          ))}
          {/* col grid */}
        </div>
        {/* Pagination */}
        {/* Pagination */}
        <Pagination />
        {/* Pagination */}
      </div>
      {/* container */}
    </section>
  );
};

export default AllBlog;
