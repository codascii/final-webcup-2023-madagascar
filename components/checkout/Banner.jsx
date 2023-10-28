import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Checkout">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Shop", "/"],
          ["Checkout", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
