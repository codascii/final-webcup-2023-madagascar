import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Terms & Conditions">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Company", "/"],
          ["Terms & Conditions", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
