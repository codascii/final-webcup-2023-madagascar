import BlocksHeroMain from "@/components/blocksHero/BlocksHeroMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksHero() {
  return (
    <>
      {/*NavBarBlocks section */}
      <NavBarBlocks />

      {/*BlocksHeroMain section */}
      <BlocksHeroMain />
    </>
  );
}

BlocksHero.getLayout = function getLayout(page) {
  return <>{page}</>;
};
