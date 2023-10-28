import Socila from "../socila/Socila";
import PopularTags from "./PopularTags";
import RecentNews from "./RecentNews";
import Search from "./Search";

const DetailsRight = () => {
  return (
    <div className="service__details__right">
      <div className="common__item">
        {/* Search */}
        <Search />
      </div>
      <div className="common__item">
        {/* Recent News */}
        <RecentNews />
      </div>
      <div className="common__item">
        {/* Popular Tags */}
        <PopularTags />
      </div>
      <div className="common__item">
        <h5 className="title">Follow Our Journey</h5>
        {/* Socila */}
        <Socila />
      </div>
    </div>
  );
};

export default DetailsRight;
