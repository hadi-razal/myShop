// import { useState } from 'react';

import { Link } from "react-router-dom";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute bg-gray-900 top-0 z-50 w-full  h-[80px] flex items-center justify-between px-6">
      
      <Link to={'/'} className="text-white text-3xl font-bold">
        MyShop
      </Link>

      <div className="text-white text-lg flex items-center  justify-center gap-2">
        <span className="cursor-pointer">Pricing</span>
        <span className="cursor-pointer">About Us</span>
      </div>

      
    </header>
  );
};

export default Header;
