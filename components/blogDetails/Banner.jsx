import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog Details">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/"],
          ["Blog Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
