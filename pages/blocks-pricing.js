import BlocksPricingMain from "@/components/blocksPricing/BlocksPricingMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksPricing() {
  return (
    <>
      {/*NavBarBlocks Section */}
      <NavBarBlocks />

      {/*BlocksPricingMain Section */}
      <BlocksPricingMain />
    </>
  );
}

BlocksPricing.getLayout = function getLayout(page) {
  return <>{page}</>;
};
