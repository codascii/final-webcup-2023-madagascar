import Banner from "@/components/blogDetails/Banner";
import BlogDetailsMain from "@/components/blogDetails/BlogDetailsMain";
import RelatedNews from "@/components/blogDetails/RelatedNews";

export default function BlogDetails() {
  return (
    <>
      {/*Banner section */}
      <Banner />

      {/*Blog Details Main section */}
      <BlogDetailsMain />

      {/*RelatedNews section */}
      <RelatedNews />
    </>
  );
}
