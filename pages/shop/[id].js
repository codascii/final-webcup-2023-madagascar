import Banner from "@/components/productDetails/Banner";
import ProductsDetailsMain from "@/components/productDetails/ProductsDetailsMain";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import WriteReview from "@/components/productDetails/WriteReview";

export default function ProductDetails() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Products Details Main section */}
      <ProductsDetailsMain />

      {/* Write Review section */}
      <WriteReview />

      {/* Related Products section */}
      <RelatedProducts />
    </>
  );
}
