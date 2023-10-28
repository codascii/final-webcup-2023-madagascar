import BlocksWorkingMain from "@/components/blocksWorking/BlocksWorkingMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksWorking() {
  return (
    <>
      {/*NavBarBlocks section */}
      <NavBarBlocks />

      {/*BlocksWorkingMain section */}
      <BlocksWorkingMain />
    </>
  );
}

BlocksWorking.getLayout = function getLayout(page) {
  return <>{page}</>;
};
