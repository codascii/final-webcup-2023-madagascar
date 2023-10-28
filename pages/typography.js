import NavBarBlocks from "@/components/navBar/NavBarBlocks";
import TypographyMain from "@/components/typography/TypographyMain";

export default function Typography() {
  return (
    <>
      {/*NavBarBlocks Section */}
      <NavBarBlocks />

      {/*TypographyMain Section */}
      <TypographyMain />
    </>
  );
}

Typography.getLayout = function getLayout(page) {
  return <>{page}</>;
};
