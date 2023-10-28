import Image from "next/image";
import { useEffect, useState } from "react";
import ponkhi from "/public/img/elements/ponkhi.png";

const Preloader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [isLoded, setIsLoded] = useState(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoded("loaded");
    });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div className={`preloader__wrap ${isLoded}`}>
        <div className="preloader__box">
          <div className="robot">
            <Image src={ponkhi} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;
