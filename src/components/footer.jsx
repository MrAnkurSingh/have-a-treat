import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FFF3E8] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        
        <div>
          <h3 className="text-2xl font-bold text-[#FF6F61] mb-3">
            Have a Treat
          </h3>
          <p className="text-sm leading-relaxed">
            Sweet moments for every family.  
            Fresh desserts made with love for kids and grown-ups.
          </p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#FF6F61] cursor-pointer">Home</li>
            <li className="hover:text-[#FF6F61] cursor-pointer">Menu</li>
            <li className="hover:text-[#FF6F61] cursor-pointer">About Us</li>
            <li className="hover:text-[#FF6F61] cursor-pointer">Contact</li>
            <li className="hover:text-[#FF6F61] cursor-pointer">FAQ</li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3">Our Treats</h4>
          <ul className="space-y-2 text-sm">
            <li>Cookies</li>
            <li>Cakes</li>
            <li>Cupcakes</li>
            <li>Brownies</li>
            <li>Special Treats</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Jaipur, India</li>
            <li>📧 hello@haveatreat.com</li>
            <li>📞 +91 90000 00000</li>
          </ul>
        </div>

      </div>

    
      <div className="border-t border-gray-200 py-4 text-sm text-center">
        <p>© 2026 Have a Treat. All rights reserved.</p>
        <div className="mt-1 space-x-2">
          <span className="hover:text-[#FF6F61] cursor-pointer">
            Privacy Policy
          </span>
          <span>|</span>
          <span className="hover:text-[#FF6F61] cursor-pointer">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

