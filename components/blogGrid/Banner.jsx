import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog Grid">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/"],
          ["Blog Grid", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
