import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ContactProps {
  initialService?: string;
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = "", initialMessage = "" }) => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    usluga: initialService,
    poruka: initialMessage,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Update form if initial props change
  React.useEffect(() => {
    if (initialService || initialMessage) {
      setFormData(prev => ({
        ...prev,
        usluga: initialService || prev.usluga,
        poruka: initialMessage || prev.poruka
      }));
    }
  }, [initialService, initialMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const formPayload = new FormData();
      formPayload.append('ime', formData.ime);
      formPayload.append('email', formData.email);
      formPayload.append('telefon', formData.telefon || 'Nije navedeno');
      formPayload.append('usluga', formData.usluga || 'Opšti upit');
      formPayload.append('poruka', formData.poruka);
      formPayload.append('_captcha', 'false');

      const response = await fetch('https://formspree.io/f/xnndjeyq', {
        method: 'POST',
        body: formPayload,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ ime: '', email: '', telefon: '', usluga: '', poruka: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-[#141214] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>na raspolaganju smo vam</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Kontaktirajte <span className="text-[#e63946]">Nas</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Zatražite ponudu za serijsko šivenje, sečenje paspula ili pošaljite logotip za besplatnu procenu digitalizacije mašinskog veza.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Contact Cards & Map Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0b090a] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Pirovetex Proizvodnja
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Nalazimo se u Pirotu, a saradnju i isporuku vršimo u celoj Srbiji i regionu. Slobodno nas pozovite u radno vreme ili pošaljite upit 24/7.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e63946]/10 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-semibold uppercase">Telefon / Viber / WhatsApp</div>
                    <div className="text-base font-bold text-white group-hover:text-[#e63946] transition-colors">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e63946]/10 text-[#e63946] group-hover:bg-[#e63946] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-semibold uppercase">Email za upite i fajlove</div>
                    <div className="text-base font-bold text-white group-hover:text-[#e63946] transition-colors">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#e63946]/10 text-[#e63946] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-semibold uppercase">Adresa pogona</div>
                    <div className="text-base font-bold text-white">{COMPANY_INFO.address}, {COMPANY_INFO.city}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#e63946]/10 text-[#e63946] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-semibold uppercase">Radno Vreme</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.workingHours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span>MB: {COMPANY_INFO.mb}</span>
                <span>PIB: {COMPANY_INFO.pib}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Formspree Contact Form */}
          <div className="lg:col-span-7 bg-[#0b090a] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            
            <h3 className="text-2xl font-bold text-white mb-2">
              Pošaljite poruku ili zatražite ponudu
            </h3>
            <p className="text-sm text-zinc-400 mb-8">
              Popunite polja ispod i naš tim u Pirotu će vam odgovoriti u najkracem mogućem roku.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Vaše Ime i Prezime / Firma *
                  </label>
                  <input
                    type="text"
                    name="ime"
                    required
                    value={formData.ime}
                    onChange={handleChange}
                    placeholder="npr. Jovan Vojinović / Pirovez"
                    className="w-full px-4 py-3.5 bg-[#141214] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] transition-colors text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Vaš E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="npr. pirovetex@gmail.com"
                    className="w-full px-4 py-3.5 bg-[#141214] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] transition-colors text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Kontakt Telefon (opciono)
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="+381 6..."
                    className="w-full px-4 py-3.5 bg-[#141214] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] transition-colors text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Tip Usluge
                  </label>
                  <select
                    name="usluga"
                    value={formData.usluga}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#141214] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e63946] transition-colors text-sm font-semibold"
                  >
                    <option value="Opšti upit">Izaberite uslugu...</option>
                    <option value="Industrijsko šivenje">Industrijsko šivenje</option>
                    <option value="Sečenje paspul trake">Sečenje paspul trake</option>
                    <option value="Digitalizacija veza">Digitalizacija veza (Wilcom/Tajima)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  Vaša Poruka ili Specifikacija *
                </label>
                <textarea
                  name="poruka"
                  required
                  rows={5}
                  value={formData.poruka}
                  onChange={handleChange}
                  placeholder="Navedite okvirne količine, tip materijala, rokove ili bilo koje specifične zahteve..."
                  className="w-full px-4 py-3.5 bg-[#141214] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] transition-colors text-sm font-medium resize-none"
                ></textarea>
              </div>

              {/* Status feedback */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Uspešno ste poslali poruku! Naš tim u Pirovetex-u će vas kontaktirati uskoro.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold">Došlo je do greške pri slanju. Molimo pokušajte ponovo ili nas pozovite na +381 611888748.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] disabled:opacity-50 text-white py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm shadow-xl shadow-[#e63946]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>Slanje poruke...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Pošalji Poruku</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#e63946]" />
                <span>Vaši podaci su bezbedni i koriste se represents samo za izradu ponude.</span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
