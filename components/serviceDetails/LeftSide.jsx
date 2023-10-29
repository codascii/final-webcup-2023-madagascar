import Socila from "../socila/Socila";
import DescribtionReviews from "./DescribtionReviews";
import Details from "./Details";
import MoreDetails from "./MoreDetails";
import ReviewWriteForm from "./ReviewWriteForm";

const LeftSide = () => {
  return (
    <div className="service__details__left">
      <div className="machine__learning__box mb-5">
        {/* Details */}
        <Details />

        {/* Describtion Reviews 
        <DescribtionReviews />
      </div>
      <div className="machine__learning__box pt-4">
        {/* More Details 
        <MoreDetails /> */}

        {/* Socila */}
        <Socila />
      </div>
      {/* <div className="write__review__wrap">
        <h4 className="title">Write a Review</h4>
        {/* Review Write Form 
        <ReviewWriteForm />
      </div> */}
    </div>
  );
};

export default LeftSide;
