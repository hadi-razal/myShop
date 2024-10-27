import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full bg-bg-gray-900 h-[80px] flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        MyShop
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {[
          ['Pricing', '#pricing'],
          ['About Us', '#about'],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {title}
          </a>
        ))}
        
        <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium 
                         hover:bg-gray-100 transition-colors duration-200">
          Sign In
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 shadow-md md:hidden border-t border-gray-800">
          <nav className="flex flex-col py-2">
            {[
              ['Pricing', '#pricing'],
              ['About Us', '#about'],
            ].map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="text-gray-300 hover:text-white px-6 py-2"
              >
                {title}
              </a>
            ))}
            
            <button className="mx-6 my-2 bg-white text-gray-900 px-4 py-2 rounded-md font-medium">
              Sign In
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;