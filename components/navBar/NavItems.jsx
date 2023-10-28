import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import home1 from "/public/img/banner/home1.jpg";
import home2 from "/public/img/banner/home2.jpg";
import home3 from "/public/img/banner/home3.jpg";
import home4 from "/public/img/banner/home4.jpg";
import home5 from "/public/img/banner/home5.jpg";
import error from "/public/img/blocks/404.png";
import about from "/public/img/blocks/about.png";
import blog_details from "/public/img/blocks/blog-details.png";
import blog_grid from "/public/img/blocks/blog-grid.png";
import blog_list from "/public/img/blocks/blog-list.png";
import callaction from "/public/img/blocks/callaction.png";
import cart from "/public/img/blocks/cart.png";
import checkout from "/public/img/blocks/checkout.png";
import contact from "/public/img/blocks/contact.png";
import faq from "/public/img/blocks/faq.png";
import footer from "/public/img/blocks/footer.png";
import hero from "/public/img/blocks/hero.png";
import pricing from "/public/img/blocks/pricing.png";
import service from "/public/img/blocks/service.png";
import shop from "/public/img/blocks/shop.png";
import single from "/public/img/blocks/single.png";
import studies from "/public/img/blocks/studies.png";
import successful from "/public/img/blocks/successful.png";
import testimonial from "/public/img/blocks/testimonial.png";
import typro from "/public/img/blocks/typro.png";
import working from "/public/img/blocks/working.png";
import studies1 from "/public/img/header/studies1.png";
import studies2 from "/public/img/header/studies2.png";
import studies3 from "/public/img/header/studies3.png";
import studies4 from "/public/img/header/studies4.png";
import studies5 from "/public/img/header/studies5.png";

const NavItems = ({ active, setActive }) => {
  const [showDropdown, setShowDropdown] = useState("");
  const [imgActive, setImgActive] = useState("");

  const handleShowDropdown = (id) => {
    if (showDropdown === id) {
      setShowDropdown("");
    } else {
      setShowDropdown(id);
    }
  };

  const handleMouseOver = (id) => {
    setImgActive(id);
  };

  return (
    <ul className={`main-menu ${active && "active"}`}>
      {/* comp */}
      <li onClick={() => handleShowDropdown("home")}>
        <Link href="URL:void(0)" className="d-flex">
          <span>Home</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul
          className={`menu__imgchange  sub-menu ${
            showDropdown === "home" ? "d-lg-flex d-block" : ""
          }`}
        >
          <li className="chnage__imgmenu">
            {[
              ["Hero One", "", "/"],
              ["Hero Two", "home2", "/index-two"],
              ["Hero Three", "home3", "/index-three"],
              ["Hero Four", "home4", "/index-four"],
              ["Hero Five", "home5", "/index-five"],
              ["Shop", "shop", "/shop"],
              ["Single Product", "single_product", "/shop/1"],
              ["Cart Page", "cart", "/cart"],
              ["Checkout", "checkout", "/checkout"],
              ["Successful", "payment_successfull", "/payment-successfull"],
              ["Studies 1", "studies1", "/studies-one"],
              ["Studies 2", "studies2", "/studies-two"],
              ["Studies 3", "studies3", "/studies-three"],
              ["Studies 4", "studies4", "/studies-four"],
              ["Studies 5", "studies5", "/studies-five"],
              ["Blog Grid", "blog_grid", "/blog-grid"],
              ["Blog List", "blog_list", "/blog-list"],
              ["Blog Details", "blog_details", "/blog-details"],
              ["Typrography", "typography", "/typography"],
              ["Blocks - Hero", "blocks_hero", "/blocks-hero"],
              ["Blocks - About", "blocks_about", "/blocks-about"],
              ["Blocks - Service", "blocks_service", "/blocks-service"],
              ["Faq", "faq", "/faq"],
              ["Contact", "contact", "/contact"],
              ["404", "error", "/error"],
            ].map(([itm, slug, url], i) => (
              <span
                key={`s${i}`}
                className={`image-small-list-item ${
                  imgActive === slug && "active"
                }`}
                onMouseOver={() => handleMouseOver(slug)}
              >
                <Link href={url} onClick={() => setActive(false)}>
                  {itm}
                </Link>
              </span>
            ))}
          </li>
          <li className="image-big-list">
            {[
              [home1, ""],
              [home2, "home2"],
              [home3, "home3"],
              [home4, "home4"],
              [home5, "home5"],
              [shop, "shop"],
              [single, "single_product"],
              [cart, "cart"],
              [checkout, "checkout"],
              [successful, "payment_successfull"],
              [studies1, "studies1"],
              [studies2, "studies2"],
              [studies3, "studies3"],
              [studies4, "studies4"],
              [studies5, "studies5"],
              [blog_grid, "blog_grid"],
              [blog_list, "blog_list"],
              [blog_details, "blog_details"],
              [typro, "typography"],
              [hero, "blocks_hero"],
              [about, "blocks_about"],
              [service, "blocks_service"],
              [faq, "faq"],
              [contact, "contact"],
              [error, "error"],
            ].map(([itm, slug], i) => (
              <span
                key={`ss${i}`}
                className={`image-big-list-item ${
                  imgActive === slug && "active"
                }`}
              >
                <span className="thumb">
                  <Image src={itm} alt="img" />
                </span>
              </span>
            ))}
          </li>
        </ul>
      </li>

      {/* comp */}
      <li onClick={() => handleShowDropdown("case")}>
        <Link href="URL:void(0)" className="d-flex">
          <span>Case Studies</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul
          className={`sub-menu ${
            showDropdown === "case" ? "d-lg-flex d-block" : ""
          }`}
        >
          {[
            ["Studies One", studies1, "/studies-one"],
            ["Studies Two", studies2, "/studies-two"],
            ["Studies Three", studies3, "/studies-three"],
            ["Studies Four", studies4, "/studies-four"],
            ["Studies Five", studies5, "/studies-five"],
          ].map(([itm, img, url], i) => (
            <li key={`sss${i}`} className="subtwohober">
              <Link
                href={url}
                className="d-lg-none"
                onClick={() => setActive(false)}
              >
                {itm}
              </Link>
              <Link href={url} className="mh__img">
                <Image src={img} alt="img" />
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="grid__style">
        <Link
          href="URL:void(0)"
          className="d-flex"
          onClick={() => handleShowDropdown("pages")}
        >
          <span>Pages</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul className={`sub-menu ${showDropdown === "pages" ? "d-block" : ""}`}>
          {[
            [
              "About",
              "URL:void(0)",
              [
                ["About One", "/about"],
                ["About Two", "/about-two"],
                ["About Three", "/about-three"],
                ["About Four", "/about-four"],
                ["About Five", "/about-five"],
              ],
            ],
            ["Pricing Page", "/pricing"],
            [
              "Services",
              "URL:void(0)",
              [
                ["Services Page", "/services"],
                ["Service Details", "/service-details"],
              ],
            ],
            ["Faq Page", "/faq"],
            ["Contact", "/contact"],
            ["404", "/error"],
          ].map(([itm, url, sub_dop], i) => {
            return sub_dop ? (
              <li key={`sr${i}`} className="subtwohober">
                <Link
                  href={url}
                  className="d-flex align-items-center justify-content-between"
                >
                  <span className="text">{itm}</span>
                  <span className="icon">
                    <i className="material-symbols-outlined">add</i>
                  </span>
                </Link>

                <ul className="sub-two">
                  {sub_dop.map(([itm, url], i) => (
                    <li key={`st${i}`}>
                      <Link href={url} onClick={() => setActive(false)}>
                        {itm}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={`sp${i}`}>
                <Link href={url} onClick={() => setActive(false)}>
                  {itm}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>

      <li className="grid__style">
        <Link
          href="URL:void(0)"
          className="d-flex"
          onClick={() => handleShowDropdown("shop")}
        >
          <span>Shop</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul className={`sub-menu ${showDropdown === "shop" ? "d-block" : ""}`}>
          {[
            ["Shop Page", "/shop"],
            ["Single Product", "/shop/1"],
            ["Cart Page", "/cart"],
            ["Checkout", "/checkout"],
            ["Successful", "/payment-successfull"],
          ].map(([itm, url], i) => (
            <li key={`sop${i}`} className="subtwohober">
              <Link href={url} onClick={() => setActive(false)}>
                {itm}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="grid__style">
        <Link
          href="URL:void(0)"
          className="d-flex"
          onClick={() => handleShowDropdown("blog")}
        >
          <span>Blog</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul className={`sub-menu ${showDropdown === "blog" ? "d-block" : ""}`}>
          {[
            ["Blog Grid", "/blog-grid"],
            ["Blog List", "/blog-list"],
            ["Blog Details", "/blog-details"],
          ].map(([itm, url], i) => (
            <li key={`ssa${i}`} className="subtwohober">
              <Link href={url} onClick={() => setActive(false)}>
                {itm}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* comp */}
      <li className="block__menus">
        <Link
          href="URL:void(0)"
          className="d-flex"
          onClick={() => handleShowDropdown("blocks")}
        >
          <span>Blocks</span>
          <span className="icons">
            <i className="material-symbols-outlined">expand_more</i>
          </span>
        </Link>
        <ul
          className={`sub-menu ${
            showDropdown === "blocks" ? "d-lg-flex d-block" : ""
          }`}
        >
          {[
            ["Typrography", typro, "/typography"],
            ["Hero", hero, "/blocks-hero"],
            ["About", about, "/blocks-about"],
            ["Service", service, "/blocks-service"],
            ["Fact", faq, "/blocks-fact"],
            ["Case Studies", studies, "/blocks-studies"],
            ["Pricing", pricing, "/blocks-pricing"],
            ["Working Process", working, "/blocks-working"],
            ["Testimonial", testimonial, "/blocks-testimonial"],
            ["Call To Action", callaction, "/blocks-newsletter"],
            ["Faq", faq, "/blocks-faq"],
            ["Footer", footer, "/blocks-footer"],
          ].map(([itm, img, url], i) => (
            <li key={`smj${i}`} className="subtwohober">
              <Link
                href={url}
                className="subhover__link"
                onClick={() => setActive(false)}
              >
                {itm}
              </Link>
              <Link href={url}>
                <Image src={img} alt="img" />
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default NavItems;
