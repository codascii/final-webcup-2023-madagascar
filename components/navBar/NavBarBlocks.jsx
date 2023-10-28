import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuRight from "./MenuRight";
import NavItems from "./NavItems";
import dark_logo from "/public/img/logo/dark-logo.png";
import favicon from "/public/img/logo/favicon.png";

const NavBarBlocks = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section signin__header ${
        windowHeight > 150 && "menu-fixed animated fadeInDown"
      }`}
    >
      <div className="container-fluid">
        <div className="header-wrapper border__none">
          <div className="logo-menu">
            <Link href="/" className="logo">
              <Image src={dark_logo} alt="logo" className="img-fluid" />
            </Link>
            <Link href="/" className="small__logo d-xl-none">
              <Image src={favicon} alt="logo" className="img-fluid" />
            </Link>
          </div>

          {/* Menu Right */}
          <MenuRight
            clss="compoent__middle"
            active={active}
            setActive={setActive}
          />

          {/* Nav Items */}
          <NavItems active={active} setActive={setActive} />

          {/* Menu Right */}
          <MenuRight clss="right__com" active={active} setActive={setActive} />
        </div>
      </div>
    </header>
  );
};

export default NavBarBlocks;
