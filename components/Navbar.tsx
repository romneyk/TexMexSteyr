
import React, { useState, useEffect } from 'react';
import { View, Brand } from '../types';
import { Menu, X, Utensils, Wine, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  currentBrand: Brand;
  onBrandChange: (brand: Brand) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, currentBrand, onBrandChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary navigation items
  const navItems = [
    { label: 'SPEISEKARTE', value: View.MENU },
    { label: 'RESERVIEREN', value: View.CONTACT },
  ];

  const handleNav = (view: View) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const handleBrandSelect = (brand: Brand) => {
    onBrandChange(brand);
    setIsOpen(false);
  }

  const isTexMex = currentBrand === 'TEXMEX';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-black/95 shadow-lg' : 'bg-transparent'
    } ${scrolled && !isOpen ? 'border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="flex items-center">
            {/* Logo link to Home */}
            <button 
              onClick={() => handleNav(View.HOME)}
              className={`text-2xl font-display font-black tracking-tighter transition-colors relative z-[101] ${isTexMex ? 'text-texmex-red' : 'text-texmex-orange'}`}
            >
              {isTexMex ? 'TEXMEX' : 'CITYBAR'}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-lg font-bold uppercase tracking-wider transition-all duration-300 ${
                  currentView === item.value 
                    ? (isTexMex ? 'text-texmex-red scale-110' : 'text-texmex-orange scale-110')
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-texmex-red focus:outline-none p-2 transition-colors relative z-[101]"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/98 backdrop-blur-xl z-[100] flex flex-col pt-24 px-6">
          <div className="max-w-sm mx-auto w-full flex flex-col items-center flex-grow justify-center">
             
             {/* Brand Switcher at Top */}
             <div className="flex w-full mb-16 border border-white/10 rounded-sm overflow-hidden bg-zinc-900/50">
                <button 
                  onClick={() => handleBrandSelect('TEXMEX')}
                  className={`flex-1 py-4 font-black uppercase tracking-tighter text-sm transition-all ${
                    isTexMex ? 'bg-texmex-red text-white' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  TEXMEX
                </button>
                <button 
                  onClick={() => handleBrandSelect('CITYBAR')}
                  className={`flex-1 py-4 font-black uppercase tracking-tighter text-sm transition-all ${
                    !isTexMex ? 'bg-texmex-orange text-black' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  CITYBAR
                </button>
             </div>

             {/* Centered Navigation Links - Only Speisekarte and Reservieren */}
             <div className="flex flex-col items-center gap-10 mb-8">
                {navItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleNav(item.value)}
                    className={`text-5xl font-display font-black uppercase tracking-tight transition-all active:scale-95 ${
                      currentView === item.value 
                        ? (isTexMex ? 'text-texmex-red' : 'text-texmex-orange') 
                        : 'text-white hover:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
             </div>

             {/* Bottom Spacing / Logo Placeholder */}
             <div className="h-20 w-full mt-auto mb-12 flex justify-center opacity-20">
                <div className={`h-1 w-12 rounded-full ${isTexMex ? 'bg-texmex-red' : 'bg-texmex-orange'}`}></div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
