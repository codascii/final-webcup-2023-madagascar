import BlocksAboutMain from "@/components/blocksAbout/BlocksAboutMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksAbout() {
  return (
    <>
      {/*NavBar Blocks Section */}
      <NavBarBlocks />

      {/*Blocks About Main Section */}
      <BlocksAboutMain />
    </>
  );
}

BlocksAbout.getLayout = function getLayout(page) {
  return <>{page}</>;
};
