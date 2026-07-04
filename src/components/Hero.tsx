import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { IconRenderer } from './IconRenderer';

interface HeroProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Video or Fallback Image */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover filter brightness-[0.35] scale-105 transition-all duration-1000"
            onError={() => setVideoError(true)}
          >
            <source src={`${import.meta.env.BASE_URL}3358672-hd_1920_1080_25fps.mp4`} type="video/mp4" />
          </video>
        ) : null}

        {/* Fallback Image overlay when video is absent or error */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${!videoError ? 'opacity-40' : 'opacity-40'}`}
          style={{ backgroundImage: `url("${import.meta.env.BASE_URL}sewing-workshop.jpg")` }}
        ></div>

        {/* Dark Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b090a] via-[#0b090a]/60 to-black/80"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0b090a]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6 sm:mt-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-zinc-200 mb-6 sm:mb-8 shadow-xl animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-[#800000]"></span>
          <span>Profesionalna tekstilna proizvodnja u Srbiji</span>
          <span className="text-zinc-500">•</span>
          <span className="text-[#C5A059] flex items-center gap-1 font-bold">
            <MapPin className="w-3.5 h-3.5 inline" /> {COMPANY_INFO.city}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1] sm:leading-[1.15]">
          Svakim šavom <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            gradimo{' '}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800000] via-[#C5A059] to-[#800000] relative inline-block">
            poverenje
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#800000]/50 rounded-full blur-xs"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-zinc-300 font-light mb-10 sm:mb-12 leading-relaxed">
          Vrhunska usluga <strong className="text-white font-semibold">industrijskog šivenja</strong>, precizno <strong className="text-white font-semibold">sečenje paspul trake</strong> i softverska <strong className="text-[#C5A059] font-semibold">digitalizacija veza</strong> za vaš brend.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <button
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto bg-gradient-to-r from-[#800000] to-[#5a0000] hover:from-[#C5A059] hover:to-[#800000] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-[#800000]/40 hover:shadow-[#800000]/60 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-white" />
            <span>Zatraži ponudu</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#usluge"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider backdrop-blur-md hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Saznaj više o uslugama</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-zinc-400 mb-12 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#800000]" />
            <span>Wilcom & Tajima standardi</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#800000]" />
            <span>Industrijske norme šivenja</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#800000]" />
            <span>Brzi rokovi isporuke</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#800000]" />
            <span>B2B i B2C saradnja</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A059]/50 rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 group text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#800000]/10 text-[#800000] mb-3 group-hover:scale-110 group-hover:bg-[#800000] group-hover:text-white transition-all duration-300">
                <IconRenderer name={stat.icon} className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
