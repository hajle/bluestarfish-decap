import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { getLangFromUrl } from "../i18n/utils";
import menuIcon from "../images/menu-open.svg";
import menuIconWhite from "../images/menu-open-white.svg";
import logo from "../images/logo.svg";
import logoWhite from "../images/logo-white.svg";

const Header = ({ children }) => {
  const url = { pathname: window.location.pathname };
  const currentPath = "/" + url.pathname.slice(1);
  const lang = getLangFromUrl(url);

  const [open, setOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY > 70) {
      return setColorChange(true);
    }
    return setColorChange(false);
  }
  return (
    <header
      className={`fixed top-0 inset-x-0 z-10 py-4 w-full transition-all duration-500 ${
        colorChange ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="px-4 w-full sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
        <div
          className={`flex items-center justify-between ${
            !colorChange && "text-white"
          }`}
        >
          <a href={`/${lang}`}>
            <img
              src={colorChange ? logo.src : logoWhite.src}
              alt="Logo"
              className="w-48 md:w-64"
            />
          </a>
          <nav>
            <button
              className="xl:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img
                src={colorChange ? menuIcon.src : menuIconWhite.src}
                alt="Otwórz menu"
                className="w-10"
              />
            </button>
            <Sidebar open={open} setOpen={setOpen} />
            {children}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
