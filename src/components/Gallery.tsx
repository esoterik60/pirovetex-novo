import React, { useState } from 'react';
import { Eye, Filter, X, ShieldCheck, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('sve');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'sve', label: 'Svi projekti' },
    { id: 'vez', label: 'Digitalizacija & Vez' },
    { id: 'sivenje', label: 'Industrijsko Šivenje' },
    { id: 'paspul', label: 'Sečenje Paspula' },
  ];

  const filteredItems = activeFilter === 'sve' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleImageError = (id: string) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="galerija" className="py-20 lg:py-28 bg-[#0b090a] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>naš portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Galerija <span className="text-[#e63946]">Radova</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Istražite primere naših projekata u tekstilnoj industriji. Od pripreme fajlova u Wilcom softveru do gotove serije sašivenih uniformi.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 mr-2 uppercase font-bold tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#e63946] text-white shadow-lg shadow-[#e63946]/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const hasError = imgErrors[item.id];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative bg-[#141214] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#e63946]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e63946]/10 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-900">
                  {!hasError ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : null}

                  {/* Fallback image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${hasError ? 'opacity-95' : 'opacity-0 pointer-events-none'}`}
                    style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${item.fallbackImage}")` }}
                  ></div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#e63946] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white">
                      {item.category === 'vez' ? 'Digitalizacija / Vez' : item.category === 'sivenje' ? 'Šivenje' : 'Paspul'}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#e63946] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-[11px] text-zinc-500 font-medium">
                    <span>{item.client || 'Pirovetex Projekat'}</span>
                    <span>{item.date || '2026.'}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#141214] border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden relative shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#e63946] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Image */}
            <div className="lg:w-3/5 bg-zinc-950 relative min-h-[300px] flex items-center justify-center">
              {!imgErrors[selectedItem.id] ? (
                <img
                  src={`${import.meta.env.BASE_URL}${selectedItem.image}`}
                  alt={selectedItem.title}
                  className="max-h-[70vh] w-auto object-contain p-4"
                  onError={() => handleImageError(selectedItem.id)}
                />
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}${selectedItem.fallbackImage}`}
                  alt={selectedItem.title}
                  className="max-h-[70vh] w-full object-cover"
                />
              )}
            </div>

            {/* Right Side: Info */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#e63946]/20 text-[#e63946] text-xs font-bold uppercase tracking-wider inline-block mb-4">
                  {selectedItem.category === 'vez' ? 'Digitalizacija / Vez' : selectedItem.category === 'sivenje' ? 'Šivenje' : 'Paspul'}
                </span>

                <h3 className="text-2xl font-black text-white mb-4">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="space-y-3 bg-[#0b090a] p-4 rounded-xl border border-white/10 mb-6 text-xs text-zinc-400">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Klijent / Projekat:</span>
                    <span className="text-white font-semibold">{selectedItem.client || 'Partner tekstilne industrije'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-zinc-500">Godina izrade:</span>
                    <span className="text-white font-semibold">{selectedItem.date || '2026.'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-500">Standard:</span>
                    <span className="text-[#e63946] font-semibold">ISO & Wilcom normativi</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onOpenQuoteModal(title);
                  }}
                  className="w-full bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#e63946]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zatraži sličan projekat</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
