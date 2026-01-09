import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;


      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHide(true);
      } else {
        setHide(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
       bg-transparent
        fixed top-0 left-0 w-full z-50
      
        transition-transform duration-300 ease-in-out
        ${hide ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/">
          <img
            src="/assets/logo/LogoImg.png"
            alt="Logo"
            className="h-15 object-contain"
          />
        </Link>

        <nav className="hidden md:flex text-sm uppercase tracking-wider font-extrabold text-[#3A2E2A]">
          {["Home", "Menu", "Services", "About Us", "Contact Us"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="px-4 py-2 rounded-full transition hover:bg-[#E76F51] hover:text-white"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/"
            className="px-3 py-1 rounded-full transition hover:bg-[#E76F51] hover:text-white"
          >
            <ShoppingCart />
          </Link>
        </nav>

        <button
          className="md:hidden text-2xl text-[#3A2E2A]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm px-6 pb-6 space-y-2 text-sm uppercase text-[#3A2E2A]">
          {["Home", "Menu", "Services", "About Us", "Contact Us"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg transition hover:bg-[#E76F51] hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
