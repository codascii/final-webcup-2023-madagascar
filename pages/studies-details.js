import Banner from "@/components/studiesDetails/Banner";
import RelatedBlog from "@/components/studiesDetails/RelatedBlog";
import StudiesDetailsMain from "@/components/studiesDetails/StudiesDetailsMain";

export default function StudiesDetails() {
  return (
    <>
      {/*Banner section */}
      <Banner />

      {/*Studies Details Main section */}
      <StudiesDetailsMain />

      {/*Related Blog section */}
      <RelatedBlog />
    </>
  );
}
