import BlocksStudiesMain from "@/components/blocksStudies/BlocksStudiesMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksStudies() {
  return (
    <>
      {/*NavBarBlocks Section */}
      <NavBarBlocks />

      {/*BlocksStudiesMain Section */}
      <BlocksStudiesMain />
    </>
  );
}

BlocksStudies.getLayout = function getLayout(page) {
  return <>{page}</>;
};
