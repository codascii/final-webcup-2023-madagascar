import ProductCard from "../cards/ProductCard";
import Pagination from "../pagination/Pagination";
import productsData from "./productsData";

const AllProducts = () => {
  return (
    <div className="col-xxl-8 col-xl-8 col-lg-8">
      <div className="row g-4">
        {productsData.map((itm) => (
          <div key={itm.id} className="col-lg-6 col-md-6">
            {/* Product Card */}
            <ProductCard itm={itm} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <Pagination />
      {/* Pagination */}
    </div>
  );
};

export default AllProducts;
