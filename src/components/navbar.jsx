import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0f0f0f] text-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          <span className="text-orange-500">Bakery</span>
        </Link>

        
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link className="hover:text-orange-500 transition" to="/">Home</Link>
          <Link className="hover:text-orange-500 transition" to="/pages">Pages</Link>
          <Link className="hover:text-orange-500 transition" to="/">Home</Link>
          <Link className="hover:text-orange-500 transition" to="/about">About</Link>
          <Link className="hover:text-orange-500 transition" to="/contact">Contact</Link>
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
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/about">Add </Link>

        </div>
      )}
    </header>
  );
};

export default Navbar;
