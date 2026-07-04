import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  initialMessage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  serviceName = "", 
  initialMessage = "" 
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    usluga: serviceName || 'Industrijsko šivenje',
    poruka: initialMessage || (serviceName ? `Upit za uslugu: ${serviceName}. Molimo pošaljite nam procenu rokova i uslova saradnje.` : ''),
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
      formPayload.append('usluga', formData.usluga);
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
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#141214] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#e63946] text-white flex items-center justify-center shadow-lg shadow-[#e63946]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Zatražite Ponudu
            </h3>
            <span className="text-xs text-[#e63946] font-semibold uppercase tracking-wider">
              Brz odgovor u roku od 2 sata
            </span>
          </div>
        </div>

        {status === 'success' ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Upit je uspešno poslat!</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Zahvaljujemo vam na interesovanju za Pirovetex. Tehnolog naše proizvodnje u Pirotu će razmotriti vaš upit i kontaktirati vas putem e-maila ili telefona.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-[#e63946] to-[#a4161a] text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider"
              >
                Zatvori prozor
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Ime / Firma *
              </label>
              <input
                type="text"
                name="ime"
                required
                value={formData.ime}
                onChange={handleChange}
                placeholder="Unesite naziv firme ili ime..."
                className="w-full px-4 py-3 bg-[#0b090a] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  E-mail adresa *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vaš@email.com"
                  className="w-full px-4 py-3 bg-[#0b090a] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  placeholder="+381..."
                  className="w-full px-4 py-3 bg-[#0b090a] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Izabrana Usluga
              </label>
              <select
                name="usluga"
                value={formData.usluga}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b090a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e63946] text-sm font-semibold"
              >
                <option value="Industrijsko šivenje">Industrijsko šivenje serija</option>
                <option value="Sečenje paspul trake">Sečenje paspul trake (45°)</option>
                <option value="Digitalizacija veza">Digitalizacija veza (Wilcom/Tajima)</option>
                <option value="Kompletna proizvodnja">Kompletna proizvodnja sa vezom</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                Poruka ili Specifikacija *
              </label>
              <textarea
                name="poruka"
                required
                rows={4}
                value={formData.poruka}
                onChange={handleChange}
                placeholder="Količina, rokovi, napomene..."
                className="w-full px-4 py-3 bg-[#0b090a] border border-white/10 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-[#e63946] text-sm resize-none"
              ></textarea>
            </div>

            {status === 'error' && (
              <div className="text-xs text-red-400 font-semibold p-2 bg-red-500/10 rounded-lg">
                Greška pri slanju. Pozovite nas direktno na {COMPANY_INFO.phone}.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-[#e63946] to-[#a4161a] hover:from-[#f28482] hover:to-[#e63946] text-white py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#e63946]/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
            >
              {status === 'submitting' ? <span>Slanje upita...</span> : <> <Send className="w-4 h-4" /> <span>Pošalji Upit</span> </>}
            </button>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#e63946]" />
                <span>Pozovite direktno</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-[#e63946]" />
                <span>pirovetex@gmail.com</span>
              </a>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
