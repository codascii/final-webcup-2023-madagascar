import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About us - Style 01">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["About us", "/"],
          ["Style 01", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
