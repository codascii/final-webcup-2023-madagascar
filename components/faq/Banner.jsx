import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="FAQs">
      {/* Breadcrumb */}
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["FAQs", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
