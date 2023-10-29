import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Contactez nous">
      {/* Breadcrumb 
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["Contact us", "/"],
        ]}
      /> */}
    </SmallBanner>
  );
};

export default Banner;
