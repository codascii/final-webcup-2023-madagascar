import Socila from "../socila/Socila";
import RecentNews from "./RecentNews";
import Search from "./Search";
import Services from "./Services";

const RightSide = () => {
  return (
    <div className="service__details__right">
      <div className="common__item">
        {/* Search */}
        <Search />
      </div>
      <div className="common__item">
        <h4>Our Services</h4>
        {/* Services */}
        <Services />
      </div>
      <div className="common__item">
        <h5 className="title">Recent Our News</h5>

        {/* Recent News */}
        <RecentNews />
      </div>
      <div className="common__item">
        <h5 className="title">Follow Our Journey</h5>

        {/* Socila */}
        <Socila />
      </div>
    </div>
  );
};

export default RightSide;
