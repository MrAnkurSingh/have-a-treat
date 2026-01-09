import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
       
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/">
          <img
            src="/assets/logo/LogoImg.png"
            alt="Logo"
            className="h-15 object-contain"
          />
        </Link>

       
        <nav className="hidden md:flex space-x-1 text-sm uppercase tracking-wider text-[#3A2E2A] font-extrabold">

          {["Home", "Menu", "Services", "About Us", "Contact Us"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="
                px-4 py-2 rounded-full
                transition-all duration-200
                hover:bg-[#E76F51]
                hover:text-white
              "
            >
              {item}
            </Link>
          ))}

          <Link
            to="/"
            className="
              px-4 py-2 rounded-full
              transition-all duration-200
              hover:bg-[#E76F51]
              hover:text-white
            "
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm px-6 pb-6 space-y-2 text-sm uppercase text-[#3A2E2A]">

          {["Home", "Menu", "Services", "About Us", "Contact Us"].map((item, i) => (
            <Link
              key={i}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className="
                block px-4 py-3 rounded-lg
                transition-all duration-200
                hover:bg-[#E76F51]
                hover:text-white
              "
            >
              {item}
            </Link>
          ))}

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              block px-4 py-3 rounded-lg
              transition-all duration-200
              hover:bg-[#E76F51]
              hover:text-white
            "
          >
            <ShoppingCart />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
