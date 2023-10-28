import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import moon from "/public/img/moon.png";
import sun from "/public/img/sun.png";

const MenuRight = ({ clss, setActive, active }) => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" || theme === "system" ? "light" : "dark");
  };

  useEffect(() => setEnabled(true), []);

  if (!enabled) return null;

  return (
    <div
      className={`menu__right__components ${clss} d-flex align-items-center`}
    >
      {/* <div className="menu__right__components right__com d-flex align-items-center"> */}
      <div className="menu__components">
        <button className="mode--toggle border" onClick={handleTheme}>
          <Image src={theme === "light" ? moon : sun} alt="icon" />
        </button>
        {/* <div className="search-button" role="tablist">
          <button className="nav-link">
            <span className="icons">
              <i className="material-symbols-outlined">search</i>
            </span>
          </button>
          <div className="search-popup" style={{ display: "none" }}>
            <div className="search-bg"></div>
            <div className="search-form" style={{ right: "-100%" }}>
              <form action="/">
                <div className="form">
                  <input type="text" placeholder="Search" required />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tolly__shop">
          <Link href="/shop">
            <i className="material-symbols-outlined">shopping_cart</i>
          </Link>
        </div>
        <Link href="/signin" className="cmn--btn">
          <span>Signin</span>
        </Link> */}
      </div>
      <div
        className={`header-bar d-lg-none ${active && "active"}`}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuRight;
