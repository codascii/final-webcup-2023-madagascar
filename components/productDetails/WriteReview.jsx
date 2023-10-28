import Image from "next/image";
import ReviewForm from "./ReviewForm";
import femalebag from "/public/img/shop/femalebag.jpg";

const WriteReview = () => {
  return (
    <section className="female__bag__section bgsection pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="female__review">
              <div className="write__review__wrap">
                <h3 className="title">Write a Review</h3>
                {/* Review Form */}
                <ReviewForm />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="female__img">
              <Image src={femalebag} alt="shop" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteReview;
