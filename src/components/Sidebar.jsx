import { useEffect } from "react";
import menuIconClose from "../images/menu-close.svg";
import navLinks from "../utils/nav-links";

const Sidebar = ({ open = false, setOpen }) => {
  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open]);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 w-[350px] overflow-y-auto max-w-full bg-white text-gray-950 overflow- h-screen z-[999] transition-transform ease-in-out duration-500 ${open ? "translate-x-0" : "translate-x-full"
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
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-xl hover:text-rose-500 transition"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`w-full h-full fixed bg-black z-10 top-0 transition-opacity duration-100 left-0 ${open ? "translate-x-0 opacity-80" : "translate-x-full opacity-100"
          }`}
      ></div>
    </div>
  );
};

export default Sidebar;
