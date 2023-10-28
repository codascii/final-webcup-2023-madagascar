import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Case Studies - Style 02">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Case Studies", "/"],
          ["Style 02", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
