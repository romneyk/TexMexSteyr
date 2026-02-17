
import React, { useEffect } from 'react';
import { MenuItem, Brand } from '../types';
import { ChevronLeft, Info, Star, Heart, Check, Plus } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

interface ItemDetailProps {
  item: MenuItem;
  onBack: () => void;
  currentBrand: Brand;
  orderList: MenuItem[];
  onToggleFavorite: (item: MenuItem) => void;
  onToggleExtra?: (parentItem: MenuItem, extra: MenuItem) => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onBack, currentBrand, orderList, onToggleFavorite, onToggleExtra }) => {
  const isTexMex = currentBrand === 'TEXMEX';
  const orderItem = orderList.find(i => i.id === item.id);
  const isFavorite = !!orderItem;
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Logic to extract Small Portion and Allergens
  let descriptionDisplay = item.description;
  let allergens: string | null = null;
  let smallPortionItem: MenuItem | null = null;

  // 1. Check for Small Portion
  // Matches "Kleine Portion: € 8,30" or "Kleine Portion: € 13,00"
  const smallPortionRegex = /Kleine Portion:\s*€\s*(\d+[,.]\d{2})/i;
  const smallMatch = descriptionDisplay.match(smallPortionRegex);

  if (smallMatch) {
    const price = parseFloat(smallMatch[1].replace(',', '.'));
    smallPortionItem = {
      ...item,
      id: `${item.id}_small`,
      name: `${item.name} (KLEIN)`,
      price: price,
      selectedExtras: [] // Small portion starts with no extras
    };
    // Remove the small portion text from description for display
    descriptionDisplay = descriptionDisplay.replace(smallPortionRegex, '');
  }

  // 2. Extract Allergens
  // Looks for (A, B, C) at the end of the string.
  descriptionDisplay = descriptionDisplay.trim();
  
  // Clean up trailing dot if it exists and is followed by nothing (end of string)
  if (descriptionDisplay.endsWith('.')) {
      descriptionDisplay = descriptionDisplay.slice(0, -1).trim();
  }

  const allergenRegex = /\s*(\([A-Z\s,.]+[\)]?)\s*$/;
  const allergenMatch = descriptionDisplay.match(allergenRegex);
  
  if (allergenMatch) {
    allergens = allergenMatch[1].replace(/[()]/g, '');
    descriptionDisplay = descriptionDisplay.replace(allergenRegex, '').trim();
  }

  // Final cleanup of description (trailing dots after allergen removal)
  if (descriptionDisplay.endsWith('.')) {
      descriptionDisplay = descriptionDisplay.slice(0, -1).trim();
  }

  const isSmallFavorite = smallPortionItem ? orderList.some(i => i.id === smallPortionItem!.id) : false;

  const extras = item.category === 'burgers' 
    ? MENU_ITEMS.filter(i => i.category === 'extras' && i.availableIn.includes(currentBrand))
    : [];

  return (
    <div className="min-h-screen bg-texmex-black text-gray-100 animate-fade-in relative pb-20">
      
      {/* Custom Minimalist Header for Detail Page */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 flex items-center justify-between pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold uppercase tracking-widest text-white hover:bg-texmex-red hover:border-texmex-red transition-all duration-300 shadow-xl"
        >
          <ChevronLeft size={20} strokeWidth={3} /> Zurück zur Karte
        </button>

        <button 
          onClick={() => onToggleFavorite(item)}
          className={`pointer-events-auto p-3 rounded-full border transition-all duration-300 shadow-xl ${
            isFavorite 
            ? 'bg-texmex-red border-texmex-red text-white scale-110' 
            : 'bg-black/50 border-white/10 text-white hover:text-texmex-red'
          }`}
        >
          <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-col">
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
             <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000" />
             <div className="absolute inset-0 bg-gradient-to-t from-texmex-black via-transparent to-black/20"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-texmex-black"></div>
        </div>

        <div className="px-4 md:px-8 max-w-5xl mx-auto -mt-32 relative z-10">
          <div className="text-center md:text-left mb-12">
              <h1 className={`text-5xl md:text-8xl font-display font-black uppercase leading-none mb-6 ${isTexMex ? 'text-texmex-red' : 'text-texmex-orange'}`} style={{ textShadow: '4px 4px 0 #000' }}>
                {item.name}
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-6">
                 {/* Modified Price Display: Removed border class and background */}
                 <span className="text-4xl font-mono font-bold text-white py-2 rounded-sm">
                   € {item.price.toFixed(2)}
                 </span>
                 <div className={`hidden md:block h-1 flex-grow ${isTexMex ? 'bg-texmex-red/50' : 'bg-texmex-orange/50'}`}></div>
              </div>
          </div>

          <div className="space-y-12 mb-16">
            <div className="bg-transparent">
               <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Info size={14} /> Beschreibung
               </h3>
               <p className="text-2xl md:text-3xl text-gray-100 leading-tight font-light max-w-3xl">
                 {descriptionDisplay}
               </p>

               {/* Small Portion Selection */}
               {smallPortionItem && (
                 <div className="mt-8 flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/10 max-w-md hover:bg-white/10 transition-colors">
                     <div className="flex-grow">
                         <h4 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">Kleine Portion</h4>
                         <p className="text-[10px] text-gray-500 uppercase tracking-widest">Alternative Größe</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <span className={`font-mono font-bold text-xl ${isTexMex ? 'text-texmex-red' : 'text-texmex-orange'}`}>
                            € {smallPortionItem.price.toFixed(2)}
                        </span>
                        <button 
                            onClick={() => onToggleFavorite(smallPortionItem!)}
                            className={`p-3 rounded-full border transition-all duration-300 ${
                                isSmallFavorite 
                                ? 'bg-texmex-red border-texmex-red text-white' 
                                : 'bg-black/50 border-white/20 text-gray-400 hover:text-white hover:border-white'
                            }`}
                        >
                            <Heart size={20} fill={isSmallFavorite ? "currentColor" : "none"} />
                        </button>
                     </div>
                 </div>
               )}

               {allergens && (
                 <div className="mt-8 pt-6 border-t border-gray-800/50 max-w-xl">
                   <p className="text-xs text-gray-500 font-mono mb-2">ALLERGENE</p>
                   <p className="text-sm text-gray-400 tracking-[0.2em] uppercase font-bold">{allergens}</p>
                 </div>
               )}
            </div>

            {extras.length > 0 && (
              <div className="pt-12 border-t border-gray-900">
                <h3 className="text-white font-display font-bold uppercase text-2xl mb-6 flex items-center gap-2">
                  <Star className={isTexMex ? 'text-texmex-red' : 'text-texmex-orange'} size={24} /> 
                  Make it better
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {extras.map(extra => {
                    const isExtraSelected = orderItem?.selectedExtras?.some(e => e.id === extra.id);
                    return (
                      <button 
                        key={extra.id} 
                        onClick={() => onToggleExtra && onToggleExtra(item, extra)}
                        className={`p-5 rounded-sm flex justify-between items-center group transition-all duration-300 border text-left w-full ${
                          isExtraSelected 
                            ? (isTexMex ? 'bg-texmex-red/10 border-texmex-red' : 'bg-texmex-orange/10 border-texmex-orange')
                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className={`text-sm font-bold uppercase tracking-wider ${isExtraSelected ? 'text-white' : 'text-gray-300'}`}>
                            {extra.name.replace('EXTRA: ', '')}
                          </span>
                          <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-widest">Upgrade</span>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className={`text-lg font-mono font-bold whitespace-nowrap ${isTexMex ? 'text-texmex-red' : 'text-texmex-orange'}`}>
                            + € {extra.price.toFixed(2)}
                          </span>
                          {isExtraSelected ? (
                            <div className={`p-1 rounded-full ${isTexMex ? 'bg-texmex-red text-white' : 'bg-texmex-orange text-black'}`}>
                               <Check size={14} strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="p-1 rounded-full bg-white/10 text-gray-500 group-hover:bg-white/20 group-hover:text-white transition-colors">
                               <Plus size={14} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
