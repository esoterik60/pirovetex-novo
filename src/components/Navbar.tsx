import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O NAMA', href: '#o-nama' },
    { label: 'USLUGE', href: '#usluge' },
    { label: 'TEHNOLOGIJA', href: '#digitalizacija' },
    { label: 'GALERIJA', href: '#galerija' },
    { label: 'ČESTA PITANJA', href: '#faq' },
    { label: 'KONTAKT', href: '#kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b090a]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/50' 
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Pirovetex Logo" 
                className="h-14 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x50?text=PIROVETEX';
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white font-['Montserrat']">
                  PIROVE<span className="text-[#C5A059]">TEX</span>
                </span>
                <span className="bg-[#800000] border border-[#C5A059]/30 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Pirot
                </span>
              </div>
              <span className="text-[9px] tracking-[0.2em] text-zinc-400 uppercase font-bold">
                PREMIUM TEKSTIL
              </span>
            </div>
          </a>

          {/* Desktop Nav Menu */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold tracking-wider text-zinc-200 hover:text-[#e63946] px-3 py-2 rounded-lg transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e63946] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full border border-white/10 transition-all"
              title="Pozovite nas direktno"
            >
              <Phone className="w-3.5 h-3.5 text-[#e63946] animate-pulse" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button 
              onClick={() => onOpenQuoteModal()}
              className="bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#e63946]/30 hover:shadow-[#e63946]/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Zatraži ponudu</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden bg-[#e63946] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md"
            >
              Ponuda
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#e63946]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b090a]/98 border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 hover:text-[#e63946] hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-3">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-zinc-900 py-3 rounded-xl border border-white/10 w-full"
            >
              <Phone className="w-4 h-4 text-[#e63946]" />
              <span>Pozovite: {COMPANY_INFO.phone}</span>
            </a>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-gradient-to-r from-[#e63946] to-[#a4161a] text-white py-3 rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#e63946]/30 text-center block"
            >
              Zatraži besplatnu procenu
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
