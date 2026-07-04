import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { DigitalizationShowcase } from './components/DigitalizationShowcase';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleOpenQuoteModal = (serviceName?: string, message?: string) => {
    setModalService(serviceName || "");
    setModalMessage(message || "");
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b090a] text-white selection:bg-[#800000] selection:text-white font-['Montserrat',sans-serif]">
      
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Section */}
      <main>
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        <Services onOpenQuoteModal={handleOpenQuoteModal} />
        <About onOpenQuoteModal={handleOpenQuoteModal} />
        <DigitalizationShowcase onOpenQuoteModal={handleOpenQuoteModal} />
        <Gallery onOpenQuoteModal={handleOpenQuoteModal} />
        <FAQ />
        <Testimonials />
        <Contact initialService={modalService} initialMessage={modalMessage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Request Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        serviceName={modalService}
        initialMessage={modalMessage}
      />

      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#800000] to-[#5a0000] text-white flex items-center justify-center shadow-2xl shadow-[#800000]/50 hover:scale-110 transition-transform group relative"
          title="Pozovite nas direktno"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-6 h-6 animate-bounce" />
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-xl">
            Pozovi: {COMPANY_INFO.phone}
          </span>
        </a>

        <button
          onClick={() => handleOpenQuoteModal()}
          className="w-14 h-14 rounded-full bg-zinc-900 border border-white/20 text-white flex items-center justify-center shadow-2xl hover:bg-white/10 hover:scale-110 transition-all group relative cursor-pointer"
          title="Zatraži ponudu"
          aria-label="Zatraži ponudu"
        >
          <MessageCircle className="w-6 h-6 text-[#800000]" />
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 backdrop-blur-md text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-xl">
            Brzi upit za ponudu
          </span>
        </button>
      </div>

    </div>
  );
}
