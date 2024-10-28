import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../libs/firebase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUser(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsUser(false);
      toggleMenu(); // Close menu on mobile when logging out
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="absolute top-0 z-50 w-full h-[80px] px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full h-full">
        <Link to="/" className="text-slate-950 text-3xl font-bold">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-slate-950 text-lg items-center gap-6">
          <Link to="/pricing" className="cursor-pointer">
            Pricing
          </Link>
          <Link to="/about" className="cursor-pointer">
            About Us
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Contact Us
          </Link>
          {!isUser ? (
            <Link to="/login" className="cursor-pointer py-1 px-4 bg-slate-950 text-white rounded-md">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="cursor-pointer py-1 px-4 bg-red-500 text-white rounded-md">
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-slate-950 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Slider */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-gray-300 shadow-lg transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col items-center py-4 space-y-4 text-slate-950 text-lg">
            <Link to="/pricing" onClick={toggleMenu} className="cursor-pointer">
              Pricing
            </Link>
            <Link to="/about" onClick={toggleMenu} className="cursor-pointer">
              About Us
            </Link>
            <Link to="/contact" onClick={toggleMenu} className="cursor-pointer">
              Contact Us
            </Link>
            {!isUser ? (
              <Link to="/login" onClick={toggleMenu} className="cursor-pointer py-1 px-4 bg-slate-950 text-white rounded-md">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="cursor-pointer py-1 px-4 bg-red-500 text-white rounded-md">
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
