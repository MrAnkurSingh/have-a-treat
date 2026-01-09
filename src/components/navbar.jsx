import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0b0b0b] text-[#f5f5f5] fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/*Logo*/}
        <Link to="/" className="text-2xl">
          <span className="text-orange-500">Bakery</span>
        </Link>

        
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link className="hover:text-orange-500 transition cursor-pointer" to="/">Home</Link>
          <Link className="hover:text-orange-500 transition cursor-pointer" to="/pages">About Us</Link>
          <Link className="hover:text-orange-500 transition cursor-pointer" to="/">Contact Us</Link>
          <Link className="hover:text-orange-500 transition cursor-pointer" to="/about">Services</Link>
          <Link className="hover:text-orange-500 transition cursor-pointer" to="/contact"></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-[#141414] px-6 pb-6 space-y-4 text-sm uppercase tracking-wider">
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/pages">Menu</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/shop">About Us</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/features">Contact Us</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/about">Add To Cart </Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;
