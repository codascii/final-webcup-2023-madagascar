import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Indian Ocean Institut">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["About us", "/"],
          ["Style 05", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
