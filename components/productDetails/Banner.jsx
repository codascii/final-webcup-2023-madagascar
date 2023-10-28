import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Single Product">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Shop", "/"],
          ["Single Product", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
