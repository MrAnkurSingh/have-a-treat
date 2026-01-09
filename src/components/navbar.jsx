import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0f0f0f] text-white fixed  w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        
        <Link to="/" className="text-2xl font-semibold tracking-wide">
          <img className="h-15" src="../../public/assets/logo/LogoImg.png" alt="Logo" />
        </Link>

        
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <Link className="hover:text-orange-500 transition" to="/">Home</Link>
          <Link className="hover:text-orange-500 transition" to="/menu">Menu</Link>
          <Link className="hover:text-orange-500 transition" to="/services">Services</Link>
          <Link className="hover:text-orange-500 transition" to="/about">About Us</Link>
          <Link className="hover:text-orange-500 transition" to="/contact">Contact Us</Link>
            <Link className="hover:text-orange-500 transition" to="/"><ShoppingCart /></Link>

        </nav>

       
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

  
      {open && (
        <div className="md:hidden bg-[#141414] px-6 pb-6 space-y-4 text-sm uppercase tracking-wider">
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/menu">Menu</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/about">About Us</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/contact">Contact Us</Link>
          <Link onClick={() => setOpen(false)} className="block hover:text-orange-500" to="/"><ShoppingCart /></Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
