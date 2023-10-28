import BlocksNewsletterMain from "@/components/blocksNewsletter/BlocksNewsletterMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksNewsletter() {
  return (
    <>
      {/*NavBarBlocks section */}
      <NavBarBlocks />

      {/*BlocksNewsletterMain section */}
      <BlocksNewsletterMain />
    </>
  );
}

BlocksNewsletter.getLayout = function getLayout(page) {
  return <>{page}</>;
};
