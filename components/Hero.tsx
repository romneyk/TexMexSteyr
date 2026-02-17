
import React from 'react';
import { View, Brand } from '../types';
import { ChevronRight, Wine, Utensils } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: View) => void;
  onCategoryClick: (categoryId: string) => void;
  currentBrand: Brand;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onCategoryClick, currentBrand }) => {
  const isTexMex = currentBrand === 'TEXMEX';

  return (
    <div className="relative h-screen bg-texmex-black overflow-hidden flex items-center justify-center">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          key={currentBrand} 
          src={isTexMex 
            ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
            : "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop" 
          }
          alt={isTexMex ? "Mexican Feast" : "Cocktail Bar"} 
          className="w-full h-full object-cover opacity-60 animate-ken-burns origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-texmex-black via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 flex flex-col items-center justify-center h-full">
        
        {/* Content removed as requested (Quick Links & Logo) */}

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full mt-4">
          <button 
            onClick={() => onNavigate(View.MENU)}
            className={`group relative px-10 py-6 text-xl font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.6)] w-80 md:w-96 transform hover:scale-105 ${
               isTexMex 
               ? 'bg-texmex-red hover:bg-texmex-redDark text-white' 
               : 'bg-texmex-orange hover:bg-orange-600 text-black'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isTexMex ? 'Zur Speisekarte' : 'Zur Barkarte'} <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate(View.CONTACT)}
            className="group px-10 py-6 text-xl bg-black/60 border-2 border-gray-400 hover:border-white text-white font-bold uppercase tracking-wider transition-all duration-300 w-80 md:w-96 flex items-center justify-center gap-3 hover:bg-black/80 backdrop-blur-sm transform hover:scale-105"
          >
            {isTexMex ? <Utensils className="w-6 h-6" /> : <Wine className="w-6 h-6" />}
            Tisch reservieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
