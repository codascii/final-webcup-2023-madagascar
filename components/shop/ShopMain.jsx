import AllProducts from "./AllProducts";
import FilterProduct from "./FilterProduct";

const ShopMain = () => {
  return (
    <section className="shop__section bg__white pt-80 pb-80">
      {/* container */}
      <div className="container">
        <div className="row">
          {/* All Products */}
          <AllProducts />

          {/* Filter Product */}
          <FilterProduct />
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default ShopMain;
