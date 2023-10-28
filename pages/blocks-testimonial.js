import BlocksTestimonialMain from "@/components/blocksTestimonial/BlocksTestimonialMain";
import NavBarBlocks from "@/components/navBar/NavBarBlocks";

export default function BlocksTestimonial() {
  return (
    <>
      {/*NavBarBlocks section */}
      <NavBarBlocks />

      {/*BlocksTestimonialMain section */}
      <BlocksTestimonialMain />
    </>
  );
}

BlocksTestimonial.getLayout = function getLayout(page) {
  return <>{page}</>;
};
