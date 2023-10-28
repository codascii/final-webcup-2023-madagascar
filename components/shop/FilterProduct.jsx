import Cart from "./Cart";
import Categories from "./Categories";
import Tags from "./Tags";

const FilterProduct = () => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="service__details__right">
        <div className="common__item shop__side__bar">
          <h4 className="title">Filter</h4>
          <div className="cmn__items">
            <h6 className="cmn__head">Search</h6>
            <form action="javacript:void(0)">
              <input type="text" placeholder="Search" />
              <button>
                <i className="material-symbols-outlined">search</i>
              </button>
            </form>
          </div>
          <div className="cmn__items">
            <h6 className="cmn__head">Categories</h6>
            {/* Categories */}
            <Categories />
          </div>
          <div className="cmn__items">
            <h6 className="cmn__head">Pricing Scale</h6>
            <div className="pricing__bar">
              <div className="range-slider">
                <input
                  // value="6000"
                  min="100"
                  max="50000"
                  step="500"
                  type="range"
                />
                <input
                  // value="44500"
                  min="1000"
                  max="50000"
                  step="500"
                  type="range"
                />
                <span className="rangeValues"></span>
              </div>
            </div>
          </div>
          <div className="cmn__items">
            <h6 className="cmn__head">Cart</h6>
            {/* Cart */}
            <Cart />
          </div>
          <div className="cmn__items">
            <h6 className="cmn__head">Tag</h6>
            {/* Tags */}
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
