import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/World2.png";
import ProductsDropdown from "./ProductsDropdown";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto bg-black/80 backdrop-blur-lg z-50 border border-gray-800 rounded-full"
        ref={dropdownRef}
      >
        <div className="w-full  sm:px-2 md:px-2">
          <div className="flex justify-between items-center py-1 sm:py-2">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src={logo} alt="logo" className="h-7 w-7 sm:h-8 sm:w-8" />
              <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">TeleWorld</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex px-10 gap-2">
                {["Products", "Pricing", "Resources", "FAQ"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-300 gap-4 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white text-black rounded-full font-medium text-sm"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 p-1"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Products Dropdown */}
        <AnimatePresence>
          {isDropdownOpen && <ProductsDropdown />}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu - Outside nav for better positioning */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] sm:w-80 md:hidden bg-black/80 backdrop-blur-lg border border-gray-800 rounded-2xl z-40"
          >
            <div className="px-4 py-4 space-y-3">
              {["Products", "Pricing", "Resources", "FAQ"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-6 py-2 bg-white text-black rounded-full font-medium text-sm mt-2"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
