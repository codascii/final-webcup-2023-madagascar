import studiesData from "@/data/studiesData";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BlogCard from "../cards/BlogCard";
import Pagination from "../pagination/Pagination";

const Blogs = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wXNv-x5zVgE"
        onClose={() => setOpen(false)}
      />

      <section className="studies__section bg__white pt-80 pb-80">
        {/* container */}
        <div className="container">
          {/* studies Wrapper */}
          <div className="studies__wrap__one">
            <div className="row g-4 justify-content-center">
              {/* col grid */}
              {studiesData.map((itm) => (
                <div
                  key={itm.id}
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                >
                  {/* Blog Card */}
                  <BlogCard itm={itm} setOpen={setOpen} />
                </div>
              ))}
            </div>
            {/* Pagination */}
            <Pagination />
            {/* Pagination */}
          </div>
          {/* studies Wrapper */}
        </div>
        {/* container */}
      </section>
    </>
  );
};

export default Blogs;
