import studiesData from "@/data/studiesData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import BlogTwoCard from "../cards/BlogTwoCard";
import blumb from "/public/img/elements/blumb.png";
import include_element from "/public/img/elements/include-element.png";
import real from "/public/img/elements/real.png";

const RealWorld = () => {
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

      <section className="real__world bgsection pt-120 pb-120">
        {/* container */}
        <div className="container">
          {/* real head */}
          <div className="project__head">
            <div className="section__header section__center pb__60">
              <h2>Real-world examples of our unique capabilities</h2>
              <p>
                AI is the broader concept of machines being able to carry out
                tasks in a way that would normally require human intelligence.
              </p>
            </div>
          </div>
          {/* real head */}
          <div className="row g-4 justify-content-center align-items-center">
            {/* col grid */}

            {studiesData.slice(0, 6).map((itm) => (
              <div
                key={itm.id}
                className="col-xxl-6 col-xl-6 col-lg-6 col-md-6"
              >
                {/* Blog Two Card */}
                <BlogTwoCard itm={itm} setOpen={setOpen} />
              </div>
            ))}
          </div>
          {/* case Studies */}
          <div className="case__btn mt-4">
            <Link href="/studies-two" className="cmn--btn">
              <span>See All Case Studies</span>
            </Link>
          </div>
          {/* case Studies */}
        </div>
        {/* container */}

        {/* element */}
        <div className="include__elements">
          <Image src={include_element} alt="include" className="img-fluid" />
        </div>
        <div className="include__blumb">
          <Image src={blumb} alt="include" className="img-fluid" />
        </div>
        <div className="include__blumb2">
          <Image src={blumb} alt="include" className="img-fluid" />
        </div>
        <div className="include__real">
          <Image src={real} alt="include" className="img-fluid" />
        </div>
        {/* element */}
      </section>
    </>
  );
};

export default RealWorld;
