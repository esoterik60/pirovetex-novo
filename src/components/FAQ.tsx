import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('f1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('sve');

  const categories = [
    { id: 'sve', label: 'Sva pitanja' },
    { id: 'opste', label: 'Opšte usluge' },
    { id: 'tehnologija', label: 'Wilcom & Tajima softver' },
    { id: 'saradnja', label: 'Saradnja u Srbiji' },
    { id: 'rokovi', label: 'Rokovi izrade' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'sve' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#141214] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>informacije za klijente</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Često postavljana <span className="text-[#e63946]">pitanja</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Sve što vas zanima u vezi naših usluga uslužnog šivenja, preciznog sečenja paspula i softverske digitalizacije mašinskog veza.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Pretražite pitanja (npr. Wilcom, Pirot, rokovi...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[#0b090a] border border-white/10 rounded-2xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e63946] transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Poništi
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#e63946] text-white shadow-md'
                    : 'bg-[#0b090a] text-zinc-400 border border-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#0b090a] border-[#e63946] shadow-xl shadow-[#e63946]/5' 
                      : 'bg-[#0b090a]/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-[#e63946]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#e63946] text-white rotate-180' : 'bg-white/5 text-zinc-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                      <p className="bg-black/40 p-4 rounded-xl border border-white/5">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#0b090a] rounded-2xl border border-white/10">
              <Sparkles className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-400 font-medium">Nije pronađeno nijedno pitanje za vašu pretragu.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('sve'); }}
                className="mt-4 text-xs font-bold text-[#e63946] hover:underline"
              >
                Prikaži sva pitanja
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
