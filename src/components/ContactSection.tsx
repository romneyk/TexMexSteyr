
import React from 'react';
import { OPENING_HOURS, ADDRESS } from '../constants';
import { MapPin, Phone, Mail, Clock, Map as MapIcon } from 'lucide-react';

const ContactSection: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY || ''}&q=${encodeURIComponent(ADDRESS.street + ', ' + ADDRESS.city)}&language=de`;
  
  // Note: If no API key is provided for the Embed API, we can use a standard search embed which is often keyless or use a generic one.
  // Using the standard embed URL which works without a key for simple display:
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS.street + ', ' + ADDRESS.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-texmex-black border-t border-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Info Column */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-display font-black text-white mb-6 uppercase tracking-wider text-shadow">
              Visit the <span className="text-texmex-red">Cantina</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Komm vorbei am Stadtplatz in Steyr. Ob für ein saftiges Steak, einen schnellen Burger oder einen langen Abend an der Bar.
            </p>
          </div>

          {/* Opening Hours Card */}
          <div className="bg-texmex-dark p-8 rounded-sm border border-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-texmex-red/10 rounded-full blur-3xl group-hover:bg-texmex-red/20 transition-all"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-black/50 rounded-full text-texmex-red border border-gray-700">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">Öffnungszeiten</h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {OPENING_HOURS.map((oh, idx) => (
                <li key={idx} className="flex justify-between items-end border-b border-gray-700/50 pb-2 last:border-0 last:pb-0">
                  <span className="text-gray-400 text-sm uppercase tracking-wide">{oh.day}</span>
                  <span className="font-mono text-texmex-orange font-bold text-lg">{oh.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-6 group">
              <div className="mt-1 text-gray-500 group-hover:text-texmex-red transition-colors">
                 <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Location</h3>
                <p className="text-gray-400">{ADDRESS.street}, {ADDRESS.city}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="mt-1 text-gray-500 group-hover:text-texmex-red transition-colors">
                 <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Call Us</h3>
                <p className="text-gray-400 font-mono text-lg">{ADDRESS.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
               <div className="mt-1 text-gray-500 group-hover:text-texmex-red transition-colors">
                 <Mail className="w-6 h-6" />
               </div>
               <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-1">Write Us</h3>
                <p className="text-gray-400">{ADDRESS.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Column - Replaced image with iframe */}
        <div className="h-[600px] bg-texmex-dark rounded-sm border border-gray-800 overflow-hidden relative group">
           <iframe
              title="Google Maps Location"
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
           ></iframe>
           
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent"></div>
           
           <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
              <div className="pointer-events-auto bg-black/60 backdrop-blur-md p-6 border border-white/10">
                <h3 className="text-3xl font-display font-bold text-white mb-1 uppercase tracking-tight">Stadtplatz 40</h3>
                <p className="text-gray-300 mb-4 text-sm">Direkt im Herzen von Steyr.</p>
                
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS.street + ' ' + ADDRESS.city)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full justify-center bg-texmex-red hover:bg-red-700 text-white px-6 py-4 font-bold uppercase tracking-widest transition-colors gap-3 items-center shadow-2xl"
                >
                  <MapIcon size={20} />
                  Route planen
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
