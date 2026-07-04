import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b090a] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3">
              {!logoError ? (
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`} 
                  alt="Pirovetex Logo" 
                  className="h-16 w-auto object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : null}
              
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  PIROVE<span className="text-[#e63946]">TEX</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
                  Tekstilna Proizvodnja Pirot
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Pirovetex pruža vrhunske usluge industrijskog šivenja serija, preciznog sečenja paspul trake i softverske digitalizacije mašinskog veza po Wilcom i Tajima normama.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href={COMPANY_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e63946] border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1"
                title="Facebook Pirovetex"
              >
                <i className="fab fa-facebook-f text-sm"></i>
                <span className="font-bold text-xs">FB</span>
              </a>
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e63946] border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1"
                title="Instagram Pirovetex"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              <a 
                href={COMPANY_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e63946] border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1"
                title="LinkedIn Jovan Vojinović"
              >
                <span className="font-bold text-xs">in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e63946]"></span>
              <span>Usluge u Tekstilu</span>
            </h3>
            
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#usluge" className="hover:text-[#e63946] transition-colors flex items-center gap-2">
                  <span className="text-[#e63946]">›</span>
                  <span>Industrijsko šivenje serija</span>
                </a>
              </li>
              <li>
                <a href="#usluge" className="hover:text-[#e63946] transition-colors flex items-center gap-2">
                  <span className="text-[#e63946]">›</span>
                  <span>Sečenje paspul trake (45°)</span>
                </a>
              </li>
              <li>
                <a href="#digitalizacija" className="hover:text-[#e63946] transition-colors flex items-center gap-2">
                  <span className="text-[#e63946]">›</span>
                  <span>Digitalizacija veza (Wilcom/Tajima)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e63946]"></span>
              <span>Kontakt Informacije</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#e63946] shrink-0 mt-0.5" />
                <span>Adresa: {COMPANY_INFO.address}, {COMPANY_INFO.city}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e63946] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors font-bold text-white">
                  Telefon: {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#e63946] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  Email: {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#e63946] shrink-0" />
                <span>Radno vreme: 08:00 - 16:00h</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality Norms & Newsletter / Badge */}
          <div className="bg-[#141214] p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#e63946] uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Industrijski standard</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Sve naše vez datoteke i krojačke specifikacije prolaze trostruku tehničku proveru tačnosti pre puštanja u serijsku proizvodnju.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-zinc-300">
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Matični broj:</span>
                <span className="font-bold">{COMPANY_INFO.mb}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">PIB / Poreski br:</span>
                <span className="font-bold">{COMPANY_INFO.pib}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>© 2026 Pirovetex (Pirovez). Sva prava zadržana.</span>
            <span>•</span>
            <span>MB: {COMPANY_INFO.mb}</span>
            <span>•</span>
            <span>PIB: {COMPANY_INFO.pib}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#o-nama" className="hover:text-zinc-300 transition-colors">O nama</a>
            <a href="#usluge" className="hover:text-zinc-300 transition-colors">Usluge</a>
            <a href="#faq" className="hover:text-zinc-300 transition-colors">FAQ</a>
            <a href="#kontakt" className="hover:text-zinc-300 transition-colors">Kontakt</a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#e63946] text-white flex items-center justify-center transition-all ml-2"
              title="Povratak na vrh"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
