import React, { useState } from 'react';
import { ShieldCheck, Award, MapPin, CheckCircle2, ArrowRight, Building2, FileText, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const [imgError, setImgError] = useState(false);

  const workflowSteps = [
    {
      step: "01",
      title: "Analiza i Tehnička Priprema",
      desc: "Prijem specifikacije, analiza materijala i planiranje proizvodnog procesa u Pirotu.",
      icon: <FileText className="w-5 h-5 text-[#e63946]" />
    },
    {
      step: "02",
      title: "Wilcom & Tajima Digitalizacija",
      desc: "Softverska obrada logotipa i podešavanje gustine uboda za besprekoran mašinski vez.",
      icon: <Cpu className="w-5 h-5 text-[#e63946]" />
    },
    {
      step: "03",
      title: "Precizna Montaža i Paspul",
      desc: "Sečenje paspul trake pod uglom od 45° i serijsko šivenje uz striktno poštovanje normi.",
      icon: <ShieldCheck className="w-5 h-5 text-[#e63946]" />
    },
    {
      step: "04",
      title: "QC Kontrola i Brza Isporuka",
      desc: "Višestruka kontrola svakog šava pre pakovanja i bezbedna slanja klijentima širom Srbije.",
      icon: <Award className="w-5 h-5 text-[#e63946]" />
    }
  ];

  return (
    <section id="o-nama" className="py-20 lg:py-28 bg-[#0b090a] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main About Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Workshop Image & Silver Badge */}
          <div className="lg:col-span-6 relative group">
            
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black bg-zinc-900 aspect-4/3 sm:aspect-16/10">
              {!imgError ? (
                <img 
                  src={`${import.meta.env.BASE_URL}pirovetex srebro.png`} 
                  alt="Pirovetex Radionica i Srebro" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={() => setImgError(true)}
                />
              ) : null}
              
              {/* Fallback image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imgError ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}sewing-workshop.jpg")` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Overlay Location tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-sm text-white font-medium">
                  <MapPin className="w-4 h-4 text-[#e63946]" />
                  <span>Proizvodni pogon: {COMPANY_INFO.address}, Pirot</span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 z-20 bg-gradient-to-br from-[#e63946] to-[#a4161a] p-6 rounded-2xl shadow-2xl border border-white/20 text-white hidden sm:block max-w-[220px]">
              <div className="text-3xl font-black mb-1">Od 2021.</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-100">
                Pouzdan partner tekstilne industrije Srbije
              </div>
            </div>

            {/* Decorative back blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#e63946]/20 to-transparent rounded-3xl blur-2xl -z-10 group-hover:blur-3xl transition-all"></div>
          </div>

          {/* Right Column: Story & Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5 text-[#e63946]" />
              <span>O Pirovetex-u</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Gde se tradicionalno <br className="hidden sm:inline" />
              <span className="text-[#e63946]">zanatstvo spaja</span> sa digitalnom tehnologijom.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              Firma <strong className="text-white font-semibold">Pirovetex</strong>, osnovana 2021. godine u Pirotu, pruža sveobuhvatnu podršku tekstilnoj industriji u celoj Srbiji i regionu. Pored moderne usluge uslužnog šivenja serija i preciznog sečenja paspul trake, specijalizovani smo za najzahtevnije tehničke operacije.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Naš proizvodni pogon na adresi <span className="text-white">Vojvode Putnika 36</span> predstavlja mesto gde se industrijske norme u potpunosti poštuju. Gradimo dugoročna partnerstva sa modnim studijima i fabrikama kroz maksimalnu transparentnost, brzu komunikaciju i posvećenost vrhunskom kvalitetu.
            </p>

            {/* Credentials / Legal Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">Matični broj</div>
                <div className="text-sm sm:text-base font-bold text-white tracking-wide">{COMPANY_INFO.mb}</div>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">PIB / Poreski br.</div>
                <div className="text-sm sm:text-base font-bold text-white tracking-wide">{COMPANY_INFO.pib}</div>
              </div>

              <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-zinc-400 uppercase font-semibold">Tržište</div>
                <div className="text-sm sm:text-base font-bold text-[#e63946] tracking-wide">Srbija i EU</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#e63946]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Kontaktirajte nas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Otvoreni za B2B i B2C saradnju</span>
              </div>
            </div>

          </div>
        </div>

        {/* Workflow Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Naš <span className="text-[#e63946]">Proizvodni Proces</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Od prvog upita do gotovog proizvoda — svaki korak je optimizovan radi uštede vašeg vremena i materijala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e63946]/40 p-6 rounded-2xl transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-zinc-700 group-hover:text-[#e63946] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#e63946]/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#e63946] transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
