
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';
import OrderOverlay from './components/OrderOverlay';
import LegalPage from './components/LegalPage';
import { View, Brand, MenuItem } from './types';
import { Heart } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [currentBrand, setCurrentBrand] = useState<Brand>('TEXMEX');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [targetCategory, setTargetCategory] = useState<string | null>(null);
  
  // Order State
  const [orderList, setOrderList] = useState<MenuItem[]>([]);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleNavigate = (view: View) => {
    // Wenn "Reservieren" geklickt wird, scrolle einfach zum Footer
    if (view === View.CONTACT) {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Wenn "Speisekarte" geklickt wird, gehe zur Startseite und scrolle zum Menü
    if (view === View.MENU) {
      setTargetCategory(null);
      setCurrentView(View.HOME);
      setSelectedItem(null);
      
      // Kleiner Timeout, um sicherzustellen, dass der View gerendert ist
      setTimeout(() => {
        const menuStart = document.getElementById('menu-start');
        if (menuStart) {
          menuStart.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setSavedScrollPosition(0);
    setTargetCategory(null);
    setCurrentView(view);
    setSelectedItem(null);
    if (view === View.HOME) window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrandChange = (brand: Brand) => {
    setCurrentBrand(brand);
    setCurrentView(View.HOME);
    setSelectedItem(null);
    setSavedScrollPosition(0);
    setTargetCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: MenuItem) => {
    setSavedScrollPosition(window.scrollY);
    setSelectedItem(item);
    setCurrentView(View.ITEM_DETAIL);
  };

  const handleBackFromDetail = () => {
    setSelectedItem(null);
    // Zurück geht immer zur Startseite an die gespeicherte Position
    setCurrentView(View.HOME);
    setTimeout(() => {
        window.scrollTo({ top: savedScrollPosition, behavior: 'instant' });
    }, 0);
  };

  const toggleFavorite = (item: MenuItem) => {
    setOrderList(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.filter(i => i.id !== item.id);
      return [...prev, item]; // Adds item without extras initially
    });
  };

  // Neue Funktion: Fügt ein Extra spezifisch zu einem Item in der Liste hinzu
  const handleToggleExtra = (parentItem: MenuItem, extra: MenuItem) => {
    setOrderList(prev => {
      const parentIdx = prev.findIndex(i => i.id === parentItem.id);
      
      // Wenn das Hauptitem noch nicht auf der Liste ist, fügen wir es samt Extra hinzu
      if (parentIdx === -1) {
        return [...prev, { ...parentItem, selectedExtras: [extra] }];
      }

      // Hauptitem existiert bereits -> Update der Extras
      const newList = [...prev];
      const existingParent = { ...newList[parentIdx] };
      const currentExtras = existingParent.selectedExtras || [];
      
      const extraExists = currentExtras.find(e => e.id === extra.id);

      if (extraExists) {
        // Extra entfernen
        existingParent.selectedExtras = currentExtras.filter(e => e.id !== extra.id);
      } else {
        // Extra hinzufügen
        existingParent.selectedExtras = [...currentExtras, extra];
      }

      newList[parentIdx] = existingParent;
      return newList;
    });
  };

  const handleCategoryNavigate = (catId: string) => {
    setTargetCategory(catId);
    if (currentView !== View.HOME) {
      setCurrentView(View.HOME);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        // View.MENU ist jetzt integriert in View.HOME
        return (
          <>
            <Hero onNavigate={handleNavigate} onCategoryClick={handleCategoryNavigate} currentBrand={currentBrand} />
            <div id="menu-start" className="py-12 bg-texmex-black bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]">
                <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-4 uppercase tracking-widest text-shadow-strong">
                      {currentBrand === 'TEXMEX' ? 'SPEISEKARTE' : 'BARKARTE'}
                    </h2>
                    {currentBrand === 'CITYBAR' && (
                      <div className="animate-pulse">
                        <p className="text-texmex-orange font-bold uppercase tracking-[0.4em] text-xs md:text-sm mt-2">
                          In Arbeit
                        </p>
                      </div>
                    )}
                    <div className={`h-1 w-24 mx-auto mb-8 mt-4 ${currentBrand === 'TEXMEX' ? 'bg-texmex-red' : 'bg-texmex-orange'}`}></div>
                </div>
                <MenuSection 
                  currentBrand={currentBrand} 
                  onItemClick={handleItemClick}
                  onCategoryClick={handleCategoryNavigate}
                  targetCategory={targetCategory}
                  onTargetReached={() => setTargetCategory(null)}
                />
            </div>
          </>
        );
      case View.ITEM_DETAIL:
        if (!selectedItem) return null;
        return (
          <ItemDetail 
            item={selectedItem} 
            currentBrand={currentBrand} 
            onBack={handleBackFromDetail} 
            orderList={orderList}
            onToggleFavorite={toggleFavorite}
            onToggleExtra={handleToggleExtra}
          />
        );
      case View.IMPRESSUM:
        return (
          <LegalPage 
            title="Impressum" 
            type="impressum" 
            onBack={() => handleNavigate(View.HOME)} 
          />
        );
      case View.PRIVACY:
        return (
          <LegalPage 
            title="Datenschutz" 
            type="privacy" 
            onBack={() => handleNavigate(View.HOME)} 
          />
        );
      default:
        // Fallback
        return <Hero onNavigate={handleNavigate} onCategoryClick={handleCategoryNavigate} currentBrand={currentBrand} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-texmex-black text-gray-100 font-sans selection:bg-texmex-red selection:text-white relative">
      {(currentView !== View.ITEM_DETAIL && currentView !== View.IMPRESSUM && currentView !== View.PRIVACY) && (
        <Navbar currentView={currentView} onNavigate={handleNavigate} currentBrand={currentBrand} onBrandChange={handleBrandChange} />
      )}
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating Selection Button (Herz) */}
      <button 
        onClick={() => setIsOrderOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-zinc-900 border border-white/10 rounded-full shadow-2xl hover:bg-white hover:text-black transition-all group"
      >
        <div className="relative">
          <Heart 
            className={`w-8 h-8 transition-colors ${orderList.length > 0 ? 'text-texmex-red' : 'text-gray-500 group-hover:text-black'}`} 
            fill={orderList.length > 0 ? "currentColor" : "none"} 
          />
          {orderList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-texmex-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {orderList.length}
            </span>
          )}
        </div>
      </button>

      {isOrderOpen && (
        <OrderOverlay 
          items={orderList} 
          onClose={() => setIsOrderOpen(false)} 
          onRemove={toggleFavorite} 
        />
      )}
    </div>
  );
}

export default App;
