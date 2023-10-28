import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About us - Style 02">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["About us", "/"],
          ["Style 02", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
