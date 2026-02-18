
import React from 'react';
import { MenuItem } from '../types';
import { X, Trash2, ShoppingBag, CornerDownRight } from 'lucide-react';

interface OrderOverlayProps {
  items: MenuItem[];
  onClose: () => void;
  onRemove: (item: MenuItem) => void;
}

const OrderOverlay: React.FC<OrderOverlayProps> = ({ items, onClose, onRemove }) => {
  
  const calculateItemTotal = (item: MenuItem) => {
    const extrasTotal = item.selectedExtras?.reduce((sum, extra) => sum + extra.price, 0) || 0;
    return item.price + extrasTotal;
  };

  const totalPrice = items.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end animate-fade-in bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 h-full shadow-2xl border-l border-white/5 flex flex-col">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-black">
          <div>
            <h2 className="text-2xl font-display font-black text-white uppercase tracking-wider">Meine Auswahl</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest">{items.length} Positionen</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-950/30">
          {items.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="uppercase font-bold tracking-widest">Die Liste ist leer</p>
             </div>
          ) : (
            items.map((item, idx) => {
                const itemTotal = calculateItemTotal(item);
                return (
                  <div key={`${item.id}-${idx}`} className="bg-black/40 p-3 rounded-sm border border-white/5 group">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow flex flex-col justify-between">
                        <h4 className="text-white font-bold uppercase text-sm leading-tight">{item.name}</h4>
                        <div className="flex justify-between items-end">
                            <span className="text-texmex-orange font-mono font-bold text-sm">€ {item.price.toFixed(2)}</span>
                            <button onClick={() => onRemove(item)} className="text-gray-600 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                            </button>
                        </div>
                        </div>
                    </div>

                    {/* Display Selected Extras */}
                    {item.selectedExtras && item.selectedExtras.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/5 pl-4 space-y-1">
                            {item.selectedExtras.map((extra, exIdx) => (
                                <div key={exIdx} className="flex items-center gap-2 text-xs text-gray-400">
                                    <CornerDownRight size={12} className="text-gray-600" />
                                    <span className="flex-grow uppercase tracking-wider">{extra.name.replace('EXTRA: ', '')}</span>
                                    <span className="font-mono text-gray-500">+ € {extra.price.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                    )}
                  </div>
                );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-black border-t border-gray-800 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold text-white uppercase">
              <span>Gesamt</span>
              <span>€ {totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center italic">
              Zeigen Sie diese Liste unserem Service-Personal zur Bestellung.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderOverlay;
