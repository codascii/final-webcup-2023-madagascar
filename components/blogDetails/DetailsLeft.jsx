import Comments from "./Comments";
import Details from "./Details";
import Review from "./Review";

const DetailsLeft = () => {
  return (
    <div className="service__details__left blog__details__left">
      {/* Details  */}
      <Details />

      {/* Comments */}
      <Comments />

      {/* Review */}
      <Review />
    </div>
  );
};

export default DetailsLeft;
