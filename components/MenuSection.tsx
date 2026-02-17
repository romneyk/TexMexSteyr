
import React, { useEffect, useState, useRef } from 'react';
import { MENU_ITEMS, CATEGORY_LABELS } from '../constants';
import { MenuItem, Brand } from '../types';

interface MenuSectionProps {
  currentBrand: Brand;
  onItemClick: (item: MenuItem) => void;
  onCategoryClick?: (categoryId: string) => void;
  initialScrollPosition?: number;
  targetCategory?: string | null;
  onTargetReached?: () => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ 
  currentBrand, 
  onItemClick, 
  onCategoryClick, 
  initialScrollPosition = 0,
  targetCategory,
  onTargetReached
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const isInitialMount = useRef(true);
  
  const brandItems = MENU_ITEMS.filter(item => item.availableIn.includes(currentBrand));
  const categories = Array.from(new Set(brandItems
    .map(item => item.category)
    .filter(cat => cat !== 'extras')
  ));

  useEffect(() => {
    if (isInitialMount.current) {
      if (initialScrollPosition > 0) {
        window.scrollTo({ top: initialScrollPosition, behavior: 'instant' });
      }
      isInitialMount.current = false;
    }
  }, [initialScrollPosition]);

  // Handle direct navigation jumps (from Hero or internal menu clicks)
  useEffect(() => {
    if (targetCategory) {
      const element = document.getElementById(`category-${targetCategory}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveCategory(targetCategory);
        if (onTargetReached) onTargetReached();
      }
    }
  }, [targetCategory, onTargetReached]);

  // Observer for active category tracking
  useEffect(() => {
    if (brandItems.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', 
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id.replace('category-', '');
          setActiveCategory(categoryId);
          const btn = document.getElementById(`nav-btn-${categoryId}`);
          if (btn) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    categories.forEach((cat) => {
      const element = document.getElementById(`category-${cat}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [categories, currentBrand, brandItems.length]);

  if (brandItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fade-in">
         <div className="inline-block p-12 border border-white/5 bg-zinc-900/30 backdrop-blur-sm">
            <h4 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-4">Coming Soon</h4>
            <p className="text-gray-500 uppercase font-bold tracking-[0.2em] text-xs">Unsere Barkarte befindet sich derzeit in Arbeit.</p>
         </div>
      </div>
    );
  }

  const textColor = currentBrand === 'TEXMEX' ? 'text-texmex-red' : 'text-texmex-orange';
  const hoverBg = currentBrand === 'TEXMEX' ? 'hover:bg-texmex-red hover:border-texmex-red' : 'hover:bg-texmex-orange hover:border-texmex-orange hover:text-black';
  const activeBg = currentBrand === 'TEXMEX' ? 'bg-texmex-red border-texmex-red text-white' : 'bg-texmex-orange border-texmex-orange text-black';

  const handleScrollTo = (cat: string) => {
    if (onCategoryClick) {
      onCategoryClick(cat);
      return;
    }

    const element = document.getElementById(`category-${cat}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveCategory(cat);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 min-h-screen">
      
      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-transparent py-2 mb-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 transition-all">
        <div className="bg-black/60 backdrop-blur-xl p-1 rounded-lg border border-white/5 shadow-2xl overflow-hidden">
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-2 p-1 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`nav-btn-${cat}`}
                onClick={() => handleScrollTo(cat)}
                className={`flex-shrink-0 px-4 py-2 uppercase font-bold text-[11px] md:text-xs tracking-wider transition-all duration-300 border rounded-sm whitespace-nowrap ${
                  activeCategory === cat 
                    ? activeBg 
                    : `bg-black/60 border-gray-800 text-gray-400 ${hoverBg} hover:text-white`
                }`}
              >
                {CATEGORY_LABELS[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {categories.map((cat) => {
          const categoryItems = brandItems.filter(item => item.category === cat);
          if (categoryItems.length === 0) return null;

          return (
            <div 
              key={cat} 
              id={`category-${cat}`} 
              className="scroll-mt-48 md:scroll-mt-56"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className={`text-2xl md:text-4xl font-display font-black uppercase tracking-tight ${textColor}`}>
                  {CATEGORY_LABELS[cat]}
                </h3>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
                {categoryItems.map((item) => (
                  <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    currentBrand={currentBrand} 
                    onClick={() => onItemClick(item)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem, currentBrand: Brand, onClick: () => void }> = ({ item, currentBrand, onClick }) => {
  const isTexMex = currentBrand === 'TEXMEX';
  const cleanDescription = (desc: string) => desc.replace(/\s*\([A-Z\s,.]+\)[\s.]*$/, '').trim();
  const descriptionText = cleanDescription(item.description);

  return (
    <div 
      onClick={onClick}
      className={`group bg-texmex-card rounded-sm overflow-hidden border border-gray-800 transition-all duration-300 flex flex-row shadow-lg hover:border-${isTexMex ? 'texmex-red' : 'texmex-orange'}/50 cursor-pointer hover:shadow-2xl hover:-translate-y-1 h-32 md:h-36`}
    >
      <div className="relative w-32 md:w-40 h-full flex-shrink-0 overflow-hidden">
        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-texmex-card"></div>
      </div>
      <div className="p-3 md:p-4 flex-grow flex flex-col justify-between overflow-hidden">
        <div className="w-full">
          <div className="flex justify-between items-start gap-3 mb-1">
            <h3 className={`text-lg md:text-xl font-bold text-white font-display uppercase leading-none transition-colors ${isTexMex ? 'group-hover:text-texmex-red' : 'group-hover:text-texmex-orange'}`} style={{ textShadow: '1px 1px 0 #000' }}>{item.name}</h3>
            <span className={`text-base md:text-lg font-mono font-bold whitespace-nowrap ${isTexMex ? 'text-texmex-red' : 'text-texmex-orange'}`}>€{item.price.toFixed(2)}</span>
          </div>
          <p className="text-gray-400 text-xs md:text-sm leading-snug font-normal line-clamp-3 md:line-clamp-2">{descriptionText}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
