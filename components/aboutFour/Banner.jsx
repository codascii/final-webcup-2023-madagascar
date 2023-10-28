import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About us - Style 04">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["About us", "/"],
          ["Style 04", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
