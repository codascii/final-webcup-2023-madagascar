import BlocksFactMain from "@/components/blocksFact/BlocksFactMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksFact() {
  return (
    <>
      {/*NavBarBlocks section */}
      <NavBarBlocks />

      {/*BlocksFactMain section */}
      <BlocksFactMain />
    </>
  );
}

BlocksFact.getLayout = function getLayout(page) {
  return <>{page}</>;
};
