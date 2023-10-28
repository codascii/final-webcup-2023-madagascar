import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Les catastrophes naturelles">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["Services", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
