import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Case Studies - Details">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Case Studies", "/"],
          ["Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
