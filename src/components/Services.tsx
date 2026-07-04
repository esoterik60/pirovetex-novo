import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, Sparkles, X } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { IconRenderer } from './IconRenderer';

interface ServicesProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="usluge" className="py-20 lg:py-28 bg-[#141214] relative overflow-hidden border-t border-white/5">
      
      {/* Background Decorative glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e63946]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#a4161a]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sveobuhvatna podrška u tekstilu</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Naše <span className="text-[#e63946]">Usluge</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Spoj tradicionalnog zanatstva i savremene softverske tehnologije. Nudimo kompletne usluge od preciznog sečenja paspula i serijskog šivenja do vrhunske digitalizacije mašinskog veza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-[#0b090a] border border-white/10 hover:border-[#e63946]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e63946]/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e63946] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div>
                {/* Icon & Turnaround Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#e63946]/10 text-[#e63946] flex items-center justify-center group-hover:bg-[#e63946] group-hover:text-white transition-all duration-300 shadow-lg">
                    <IconRenderer name={service.icon} className="w-8 h-8" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#e63946]" />
                    <span>Rok: {service.turnaround}</span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#e63946] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Benefits List */}
                <div className="space-y-2.5 mb-8 border-t border-white/10 pt-6">
                  <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-3">
                    Ključne prednosti:
                  </h4>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#e63946]/20 text-[#e63946] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-auto">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="flex-1 bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-[#e63946]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zatraži ponudu</span>
                </button>

                <button
                  onClick={() => setSelectedService(service)}
                  className="bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider border border-white/10 transition-all cursor-pointer"
                >
                  Specifikacije
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Specification Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#141214] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#e63946] text-white flex items-center justify-center shadow-lg shadow-[#e63946]/30">
                <IconRenderer name={selectedService.icon} className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <span className="text-xs text-[#e63946] font-semibold uppercase tracking-wider">
                  Tehnička specifikacija i detalji
                </span>
              </div>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-zinc-300">
              <div>
                <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-2">
                  Opis i metodologija rada:
                </h4>
                <p className="leading-relaxed text-zinc-200 bg-black/40 p-4 rounded-xl border border-white/5">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-3">
                  Tehnički parametri i standardi:
                </h4>
                <div className="space-y-2 bg-[#0b090a] p-4 rounded-xl border border-white/10">
                  {selectedService.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 py-1.5 border-b border-white/5 last:border-0">
                      <div className="w-2 h-2 rounded-full bg-[#e63946]"></div>
                      <span className="font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#e63946]/10 border border-[#e63946]/30 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[#e63946] font-bold text-sm">
                  <Clock className="w-5 h-5" />
                  <span>Procenjeno vreme realizacije:</span>
                </div>
                <span className="font-black text-white text-base">
                  {selectedService.turnaround}
                </span>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => {
                    const serviceName = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteModal(serviceName);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#e63946] to-[#a4161a] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#e63946]/30 hover:scale-[1.02] transition-transform text-center"
                >
                  Zatraži ponudu za {selectedService.title}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
