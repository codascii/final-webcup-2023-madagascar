import BlocksFaqMain from "@/components/blocksFaq/BlocksFaqMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksFaq() {
  return (
    <>
      {/*NavBarBlocks Section */}
      <NavBarBlocks />

      {/*BlocksFaqMain Section */}
      <BlocksFaqMain />
    </>
  );
}

BlocksFaq.getLayout = function getLayout(page) {
  return <>{page}</>;
};
