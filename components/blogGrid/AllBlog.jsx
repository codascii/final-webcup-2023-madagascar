import blogData from "@/data/blogData";
import BlogGridCard from "../cards/BlogGridCard";
import Pagination from "../pagination/Pagination";

const AllBlog = () => {
  return (
    <section className="blog__grid__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row g-4">
          {blogData.map((itm) => (
            <div key={itm.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              {/* Blog Grid Card */}
              <BlogGridCard item={itm} />
            </div>
          ))}
        </div>
        {/* row */}

        {/* Pagination */}
        <Pagination />
        {/* Pagination */}
      </div>
      {/* container */}
    </section>
  );
};

export default AllBlog;
