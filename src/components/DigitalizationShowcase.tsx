import React, { useState } from 'react';
import { Cpu, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

interface DigitalizationShowcaseProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const DigitalizationShowcase: React.FC<DigitalizationShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'cad' | 'dst' | 'realized'>('cad');

  const tabs = [
    {
      id: 'cad',
      label: '1. Wilcom Softver (.EMB)',
      title: 'Vektorska priprema i proračun uboda u Wilcom-u',
      desc: 'Pri izradi .EMB datoteke, naši dizajneri precizno određuju smer uboda konca, podlogu (underlay), gustinu (density) i kompenzaciju potezanja (pull compensation). Time garantujemo da se materijal neće naborati tokom veza.',
      image: 'vez1.jpg',
      fallback: 'embroidery-digitizing.jpg',
      stats: { stitches: '~12,450 uboda', time: '24 sati priprema', trims: 'Minimalno sečenje' }
    },
    {
      id: 'dst',
      label: '2. Tajima Mašinski Format (.DST)',
      title: 'Optimizacija za Tajima i industrijske mašine',
      desc: 'Gotov softverski dizajn pretvaramo u mašinski kod kompatibilan sa svim vodećim brendovima (Tajima, Barudan, Brother, ZSK). Fajl je optimizovan za maksimalnu brzinu glave i smanjenje broja prekida niti.',
      image: 'vez3.jpg',
      fallback: 'embroidery-digitizing.jpg',
      stats: { stitches: '100% kompatibilno', time: '850+ RPM brzina', trims: 'Nema nabora' }
    },
    {
      id: 'realized',
      label: '3. Gotov Vez na Tekstilu',
      title: 'Besprekorna realizacija u proizvodnji',
      desc: 'Rezultat profesionalne digitalizacije je luksuzan, trodimenzionalan mašinski vez sa jasnim ivicama, živopisnim bojama konca i izuzetnom trajnošću pri pranju i svakodnevnom nošenju na uniformama.',
      image: 'vez2.jpg',
      fallback: 'sewing-workshop.jpg',
      stats: { stitches: '3D efekat', time: 'Izuzetna trajnost', trims: 'Vrhunski kvalitet' }
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const [imgError, setImgError] = useState(false);

  return (
    <section id="digitalizacija" className="py-20 lg:py-28 bg-[#141214] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Softverska laboratorija veza</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Wilcom & Tajima <span className="text-[#e63946]">Digitalizacija</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Razlika između lošeg i vrhunskog mašinskog veza leži u kvalitetnoj softverskoj pripremi. Pogledajte kako u Pirovetex-u pretvaramo vaš logo u besprekoran mašinski kod.
          </p>
        </div>

        {/* Interactive Showcase Container */}
        <div className="bg-[#0b090a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Tabs Navigation */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8 bg-white/5 p-2 rounded-2xl border border-white/10 justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTab(t.id as any);
                  setImgError(false);
                }}
                className={`flex-1 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === t.id 
                    ? 'bg-gradient-to-r from-[#e63946] to-[#a4161a] text-white shadow-lg shadow-[#e63946]/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Preview Window */}
            <div className="lg:col-span-7 relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-zinc-900 border border-white/15 shadow-xl">
                {!imgError ? (
                  <img 
                    src={`${import.meta.env.BASE_URL}${currentTab.image}`} 
                    alt={currentTab.title} 
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={() => setImgError(true)}
                  />
                ) : null}

                {/* Fallback Image */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imgError ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}
                  style={{ backgroundImage: `url("${import.meta.env.BASE_URL}${currentTab.fallback}")` }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs text-white font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#e63946]" />
                    <span>Faza: {currentTab.label}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Description & Stats */}
            <div className="lg:col-span-5 space-y-6">
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {currentTab.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {currentTab.desc}
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Parametar</div>
                  <div className="text-xs sm:text-sm font-bold text-[#e63946] mt-1">{currentTab.stats.stitches}</div>
                </div>
                
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Performanse</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">{currentTab.stats.time}</div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400 uppercase font-semibold">Rezultat</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-1">{currentTab.stats.trims}</div>
                </div>
              </div>

              {/* Supported Formats List */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-zinc-400 font-semibold uppercase mb-3 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-[#e63946]" />
                  <span>Podržani formati datoteka za isporuku:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['.EMB (Wilcom)', '.DST (Tajima)', '.PES (Brother)', '.EXP (Melco)', '.PXF', '.VP3', '.DXF'].map((fmt, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 rounded-lg text-xs font-mono font-medium">
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenQuoteModal("Digitalizacija veza")}
                  className="w-full bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-[#e63946]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zatraži digitalizaciju svog logotipa</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
