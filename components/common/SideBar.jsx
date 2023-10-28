import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const route = router.route;

  return (
    <div className="side__sticky">
      <div className="common__sidebar__wrapper">
        {[
          ["Content", "Typography", "/typography"],
          ["Blocks - Hero", "Hero", "/blocks-hero"],
          ["Blocks - About", "About", "/blocks-about"],
          ["Blocks - Services", "Services", "/blocks-service"],
          ["Blocks - Fact", "Fact", "/blocks-fact"],
          ["Blocks - Case Studies", "Case Studies", "/blocks-studies"],
          ["Blocks - Pricing", "Pricing", "/blocks-pricing"],
          ["Blocks - Working", "Working", "/blocks-working"],
          ["Blocks - Testimonial", "Testimonial", "/blocks-testimonial"],
          ["Blocks - Newsletters", "Newsletters", "/blocks-newsletter"],
          ["Blocks - FAQ", "FAQ", "/blocks-faq"],
          ["Blocks - Footer", "Footer", "/blocks-footer"],
        ].map(([title, itm, url], i) => (
          <div key={i} className="common__left__item">
            <ul className="blocks__menu">
              <li className="head__title">
                <span className="title">{title}</span>
              </li>
              <li className={`${route === url ? "active" : ""}`}>
                <Link href={url}>{itm}</Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
