// import { useState } from 'react';

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full  bg-gray-900 h-[80px] flex items-center justify-between px-6">
      
      <div className="text-white text-3xl font-bold">
        MyShop
      </div>

      <div className="text-white text-lg flex items-center  justify-center gap-2">
        <span className="cursor-pointer">Pricing</span>
        <span className="cursor-pointer">About Us</span>
      </div>

      
    </header>
  );
};

export default Header;
