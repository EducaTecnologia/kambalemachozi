import React, { useState, useEffect, useRef } from 'react';
import { MapPin, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { IMAGES, getTranslation } from '../data/content';
import { Language } from '../types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface InteractiveMapProps {
  currentLang?: Language;
}

interface LocationPin {
  id: string;
  name: string;
  zone: string;
  lat: number;
  lng: number;
  zoom: number;
  title: string;
  desc: string;
  stats: string;
  activeInitiatives: string[];
  photo: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ currentLang = 'fr' }) => {
  const [activeLocId, setActiveLocId] = useState<string>('boma');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const t = getTranslation(currentLang).map;

  // Real geographic coordinates for ETS KAMBALE MACHOZI operational hubs across the DRC:
  // boma -> Kinshasa (Cité du Fleuve, Limete)
  // matadi -> Kolwezi & Kisanfu (Lualaba Mining Belt)
  // kabondo -> Goma & Beni (Nord-Kivu / Ituri Agro-Export & Roads)
  // bas-fleuve -> Matadi Seaport & Export Corridor
  const locationCoords: Record<string, { lat: number; lng: number; zoom: number; photo: string }> = {
    boma: { lat: -4.3180, lng: 15.3350, zoom: 11, photo: IMAGES.heroPeople },
    matadi: { lat: -10.7148, lng: 25.4667, zoom: 10, photo: IMAGES.heroAction },
    kabondo: { lat: -1.6585, lng: 29.2205, zoom: 9, photo: IMAGES.projectAgri },
    'bas-fleuve': { lat: -5.8167, lng: 13.4500, zoom: 10, photo: IMAGES.fardcRations },
  };

  const locations: LocationPin[] = t.locations.map((loc) => {
    const coords = locationCoords[loc.id] || locationCoords.boma;
    return {
      id: loc.id,
      name: loc.name,
      zone: loc.zone,
      lat: coords.lat,
      lng: coords.lng,
      zoom: coords.zoom,
      title: loc.title,
      desc: loc.desc,
      stats: loc.stats,
      activeInitiatives: loc.activeInitiatives,
      photo: coords.photo,
    };
  });

  const activeLocation = locations.find((l) => l.id === activeLocId) || locations[0];

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [-5.8, 21.5],
      zoom: 5,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
      subdomains: ['a', 'b', 'c'],
    }).addTo(map);

    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    locations.forEach((loc) => {
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative flex items-center justify-center cursor-pointer group">
            <span class="absolute w-8 h-8 rounded-full bg-red-600/30 animate-ping"></span>
            <div class="w-7 h-7 rounded-full bg-[#D71920] border-2 border-white shadow-lg flex items-center justify-center text-[#F7C600] font-bold text-[10px]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div class="absolute -bottom-5 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
              ${loc.name}
            </div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);

      marker.bindPopup(`
        <div class="p-1 text-slate-900 font-sans">
          <strong class="text-xs font-bold text-[#1B2A6B] block">${loc.name}</strong>
          <span class="text-[10px] text-slate-600 block">${loc.zone}</span>
          <p class="text-[11px] text-slate-700 mt-1">${loc.stats}</p>
        </div>
      `);

      marker.on('click', () => {
        setActiveLocId(loc.id);
      });

      markersRef.current[loc.id] = marker;
    });

    mapInstanceRef.current = map;

    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleSelectLocation = (loc: LocationPin) => {
    setActiveLocId(loc.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([loc.lat, loc.lng], loc.zoom, {
        duration: 1.2,
      });
      const marker = markersRef.current[loc.id];
      if (marker) {
        marker.openPopup();
      }
    }
  };

  return (
    <section id="territoire" className="relative py-20 sm:py-28 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D71920]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1B2A6B]">
              {t.sectionKicker}
            </span>
            <span className="w-8 h-[2px] bg-[#D71920]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display">
            {t.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.sub}
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => handleSelectLocation(loc)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeLocId === loc.id
                  ? 'bg-[#1B2A6B] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${activeLocId === loc.id ? 'text-[#F7C600]' : 'text-[#D71920]'}`} />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>

        {/* Main Grid: Interactive Map + Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg relative min-h-[380px] lg:min-h-[500px]">
            <div ref={mapContainerRef} className="w-full h-full min-h-[380px] lg:min-h-[500px] z-10" />

            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm text-xs font-semibold text-slate-700 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#1B2A6B]" />
              <span>{t.activeCountPill}</span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-lg flex flex-col justify-between">
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src={activeLocation.photo}
                  alt={activeLocation.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F7C600] block">
                    {activeLocation.zone}
                  </span>
                  <div className="text-base font-bold font-display">{activeLocation.name}</div>
                </div>
              </div>

              <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-mono font-bold mb-3 border border-blue-100">
                {activeLocation.stats}
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                {activeLocation.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {activeLocation.desc}
              </p>

              <div className="space-y-2 mb-6">
                {activeLocation.activeInitiatives.map((init, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{init}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-[#1B2A6B] hover:bg-[#2A3EB1] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{activeLocation.name}</span>
              <ArrowRight className="w-4 h-4 text-[#F7C600]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
