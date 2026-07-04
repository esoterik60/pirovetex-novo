import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0b090a] relative overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#e63946]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Poverenje i reputacija</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Zadovoljni <span className="text-[#e63946]">klijenti</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Naši partneri su modne kuće, korporativni brendovi i proizvodni pogoni širom Srbije koji cene preciznost i poštovanje industrijskih normi.
          </p>
        </div>

        {/* Testimonials Grid for Desktop / Carousel for All */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-[#141214] border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                idx === activeIndex 
                  ? 'border-[#e63946] shadow-xl shadow-[#e63946]/10 scale-[1.02]' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <Quote className="w-10 h-10 text-[#e63946]/20 absolute top-6 right-6 group-hover:text-[#e63946]/40 transition-colors" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic mb-8 relative z-10">
                  „{t.quote}“
                </p>
              </div>

              {/* Author & Service Badge */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span title="Verifikovan klijent" className="inline-flex">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">{t.role}, {t.location}</p>
                </div>

                <span className="text-[10px] bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  {t.service}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Controls for Small Screens */}
        <div className="flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-[#e63946] transition-colors"
            aria-label="Prethodno iskustvo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-[#e63946] w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-[#e63946] transition-colors"
            aria-label="Sledeće iskustvo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
