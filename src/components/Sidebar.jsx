import { useEffect } from "react";
import menuIconClose from "../images/menu-close.svg";
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import { languages } from "../i18n/ui";

const Sidebar = ({ open = false, setOpen }) => {
  const url = { pathname: window.location.pathname };
  const currentPath = "/" + url.pathname.slice(1);
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 w-[350px] overflow-y-auto max-w-full bg-white text-gray-950 overflow- h-screen z-[999] transition-transform ease-in-out duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              <img src={menuIconClose.src} alt="Zamknij" className="w-10" />
            </button>
          </div>
          <div className="mt-8 mb-16">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`/${lang}/${t("slug.about")}`}
                  className={`font-medium tracking-wide drop-shadow-sm ${
                    currentPath.indexOf(`/${lang}/${t("slug.about")}`) > -1
                      ? "text-rose-500"
                      : ""
                  }`}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/${t("slug.countries")}`}
                  className={`font-medium tracking-wide drop-shadow-sm ${
                    currentPath.indexOf(`/${lang}/${t("slug.countries")}`) > -1
                      ? "text-rose-500"
                      : ""
                  }`}
                >
                  {t("nav.countries")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/${t("slug.trips")}`}
                  className={`font-medium tracking-wide drop-shadow-sm ${
                    currentPath.indexOf(`/${lang}/${t("slug.trips")}`) > -1
                      ? "text-rose-500"
                      : ""
                  }`}
                >
                  {t("nav.trips")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/${t("slug.blog")}`}
                  className={`font-medium tracking-wide drop-shadow-sm ${
                    currentPath.indexOf(`/${lang}/${t("slug.blog")}`) > -1
                      ? "text-rose-500"
                      : ""
                  }`}
                >
                  {t("nav.blog")}
                </a>
              </li>
              <li>
                <a
                  href={`/${lang}/${t("slug.contact")}`}
                  className={`font-medium tracking-wide drop-shadow-sm ${
                    currentPath.indexOf(`/${lang}/${t("slug.contact")}`) > -1
                      ? "text-rose-500"
                      : ""
                  }`}
                >
                  {t("nav.contact")}
                </a>
              </li>
              {Object.entries(languages).map(([language, label]) => (
                <li
                  key={language}
                  className={language === lang ? "hidden" : "mt-8 font-medium"}
                >
                  <a href={`/${language}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`w-full h-full fixed bg-black z-10 top-0 transition-opacity duration-100 left-0 ${
          open ? "translate-x-0 opacity-80" : "translate-x-full opacity-100"
        }`}
      ></div>
    </div>
  );
};

export default Sidebar;
