import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog List">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/"],
          ["Services", "/"],
          ["Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
