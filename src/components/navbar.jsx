import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
  <header className="
  fixed top-0 left-0 w-full z-50
  bg-[#0f0f0f]/70
  backdrop-blur-md
  supports-[backdrop-filter]:bg-black/30
">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    <Link to="/">
      <img
        src="/assets/logo/LogoImg.png"
        alt="Logo"
        className="h-15 object-contain"
      />
    </Link>

    <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider text-white">
      <Link className="hover:text-orange-500 transition" to="/">Home</Link>
      <Link className="hover:text-orange-500 transition" to="/menu">Menu</Link>
      <Link className="hover:text-orange-500 transition" to="/services">Services</Link>
      <Link className="hover:text-orange-500 transition" to="/about">About Us</Link>
      <Link className="hover:text-orange-500 transition" to="/contact">Contact Us</Link>
      <Link className="hover:text-orange-500 transition" to="/">
        <ShoppingCart />
      </Link>
    </nav>

    <button
      className="md:hidden text-2xl text-white"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>
  </div>

  {open && (
    <div className="md:hidden bg-black/60 backdrop-blur-md px-6 pt-2 pb-6 space-y-4 text-sm uppercase">
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/">Home</Link>
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/menu">Menu</Link>
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/services">Services</Link>
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/about">About Us</Link>
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/contact">Contact Us</Link>
      <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/">
        <ShoppingCart />
      </Link>
    </div>
  )}
</header>


  );
};

export default Navbar;
