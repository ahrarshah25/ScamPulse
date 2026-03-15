import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import Logo from './Logo';
import Tabs from './Tabs';
import Button from './Button';
import { navigate } from "../../../hooks/useNavigate";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:block">
          <Tabs />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button icon={LogIn} name="Login" variant="outline" onClick={() => navigate("/login")} />
          <Button icon={UserPlus} name="Sign Up" onClick={() => navigate("/signup")} />
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />
          <button
            onClick={closeMenu}
            className="text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <div className="p-6">
          <Tabs mobile />
        </div>

        <div className="px-6 flex flex-col gap-3">
          <Button icon={LogIn} name="Login" onClick={closeMenu} />
          <Button icon={UserPlus} name="Sign Up" variant="outline" onClick={closeMenu} />
        </div>
      </aside>
    </header>
  );
};

export default Navbar;