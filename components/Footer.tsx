
import React from 'react';
import { ADDRESS, OPENING_HOURS, CITYBAR_OPENING_HOURS } from '../constants';
import { Instagram, Phone, Clock, Mail, Map as MapIcon } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  onNavigate?: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS.street + ', ' + ADDRESS.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleLegalClick = (e: React.MouseEvent, view: View) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Karte direkt im Footer */}
        <div className="w-full h-64 md:h-80 mb-12 rounded-sm overflow-hidden border border-white/5 relative group">
           <iframe
              title="Location Map"
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
           ></iframe>
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent"></div>
           <div className="absolute bottom-4 left-4 pointer-events-auto">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.street + ' ' + ADDRESS.city)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-texmex-red hover:bg-red-700 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl"
              >
                <MapIcon size={12} /> Route planen
              </a>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start text-center md:text-left">
          
          {/* Section 1: Brand Stack (TexMex & Citybar Logos + Hours) */}
          <div className="flex flex-col items-center md:items-start space-y-12">
             {/* TexMex Brand */}
             <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="inline-block border-2 border-texmex-red bg-zinc-950 px-3 py-2">
                   <h2 className="text-2xl font-display font-black tracking-tighter text-texmex-red leading-none scale-y-125">
                     TEXMEX
                   </h2>
                   <div className="w-full h-px bg-texmex-red my-0.5"></div>
                   <span className="text-[8px] text-white font-sans uppercase tracking-[0.4em] block text-center">
                     RESTAURANT
                   </span>
                </div>
                
                <div className="text-center md:text-left">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3">
                    {ADDRESS.street}, {ADDRESS.city}
                  </p>
                  
                  <div className="flex flex-col gap-1 items-center md:items-start">
                     <div className="flex items-center gap-2 text-texmex-orange mb-1">
                        <Clock size={12} />
                        <span className="uppercase font-bold tracking-[0.2em] text-[10px]">Öffnungszeiten</span>
                     </div>
                     {OPENING_HOURS.map((oh, idx) => (
                        <div key={idx} className="flex justify-between gap-4 w-full max-w-[200px] border-b border-white/5 pb-0.5">
                          <span className="text-gray-500 font-bold uppercase tracking-wider text-[8px]">{oh.day}</span>
                          <span className={`font-mono text-[10px] font-black ${oh.hours === 'Geschlossen' ? 'text-gray-600' : 'text-texmex-orange'}`}>
                            {oh.hours}
                          </span>
                        </div>
                     ))}
                  </div>
                </div>
             </div>

             {/* Citybar Brand */}
             <div className="flex flex-col items-center md:items-start space-y-4 pt-8 border-t border-white/5 w-full">
                <div className="inline-block border-2 border-texmex-orange bg-zinc-950 px-3 py-2">
                   <h2 className="text-2xl font-display font-black tracking-tighter text-texmex-orange leading-none scale-y-125">
                     CITYBAR
                   </h2>
                   <div className="w-full h-px bg-texmex-orange my-0.5"></div>
                   <span className="text-[8px] text-white font-sans uppercase tracking-[0.4em] block text-center">
                     LOUNGE & DRINKS
                   </span>
                </div>

                <div className="flex flex-col gap-1 items-center md:items-start w-full">
                   <div className="flex items-center gap-2 text-texmex-orange mb-1">
                      <Clock size={12} />
                      <span className="uppercase font-bold tracking-[0.2em] text-[10px]">Citybar Öffnungszeiten</span>
                   </div>
                   {CITYBAR_OPENING_HOURS.map((oh, idx) => (
                      <div key={idx} className="flex justify-between gap-4 w-full max-w-[200px] border-b border-white/5 pb-0.5">
                        <span className="text-gray-500 font-bold uppercase tracking-wider text-[8px]">{oh.day}</span>
                        <span className={`font-mono text-[10px] font-black ${oh.hours === 'Ruhetag' ? 'text-gray-600' : 'text-texmex-orange'}`}>
                          {oh.hours}
                        </span>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="hidden md:block"></div>
          
          {/* Section 3: Contact & Socials */}
          <div className="flex flex-col items-center md:items-end space-y-10 h-full justify-between">
             <div className="space-y-6 w-full max-w-[240px]">
                <div className="pt-2">
                   <div className="flex justify-center md:justify-end items-center gap-2 text-texmex-red mb-1">
                      <Phone size={14} />
                      <span className="uppercase font-bold tracking-[0.2em] text-[10px]">Reservierungen</span>
                   </div>
                   <a href={`tel:${ADDRESS.phone}`} className="text-white font-mono text-xl font-bold hover:text-texmex-red transition-colors block text-center md:text-right">
                     {ADDRESS.phone}
                   </a>
                </div>

                <div className="pt-2 border-t border-white/5">
                   <div className="flex justify-center md:justify-end items-center gap-2 text-texmex-red mb-1">
                      <Mail size={14} />
                      <span className="uppercase font-bold tracking-[0.2em] text-[10px]">E-Mail</span>
                   </div>
                   <a href={`mailto:${ADDRESS.email}`} className="text-white font-mono text-xs font-bold hover:text-texmex-red transition-colors block truncate text-center md:text-right">
                     {ADDRESS.email}
                   </a>
                </div>
             </div>

             <div className="flex justify-center md:justify-end items-center gap-4">
                <a href="#" className="p-3 bg-zinc-900 rounded-full text-gray-400 hover:text-texmex-red hover:bg-white transition-all border border-white/5 shadow-lg">
                  <Instagram size={20} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-600 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} TexMex Steyr. Eat. Drink. Enjoy.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" onClick={(e) => handleLegalClick(e, View.IMPRESSUM)} className="hover:text-texmex-red transition-colors">Impressum</a>
             <a href="#" onClick={(e) => handleLegalClick(e, View.PRIVACY)} className="hover:text-texmex-red transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
