import BlocksServiceMain from "@/components/blocksService/BlocksServiceMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksService() {
  return (
    <>
      {/*NavBarBlocks Section */}
      <NavBarBlocks />

      {/*BlocksServiceMain Section */}
      <BlocksServiceMain />
    </>
  );
}

BlocksService.getLayout = function getLayout(page) {
  return <>{page}</>;
};
