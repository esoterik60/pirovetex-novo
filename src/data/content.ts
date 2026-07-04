import { ServiceItem, GalleryItem, FAQItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: "Pirovetex",
  legalName: "Pirovetex (Pirovez)",
  founded: "2021.",
  address: "Vojvode Putnika 36",
  city: "Pirot, Srbija",
  phone: "+381 61 1888 748",
  phoneClean: "+381611888748",
  email: "pirovetex@gmail.com",
  mb: "66165337",
  pib: "112529564",
  workingHours: "Ponedeljak - Petak: 08:00 - 16:00h",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=100073785607378",
    instagram: "https://www.instagram.com/pirovetex/",
    linkedin: "https://www.linkedin.com/in/jovan-vojinovic-18ba7b206/"
  },
  stats: [
    { value: "100,000+", label: "Sašivenih i obrađenih jedinica", icon: "Shirt" },
    { value: "99.8%", label: "Tačnost i poštovanje normi", icon: "CheckCircle2" },
    { value: "4+", label: "Godine tradicije i inovacija", icon: "Calendar" },
    { value: "24/48h", label: "Brza digitalizacija veza", icon: "Zap" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "industrijsko-sivenje",
    title: "Industrijsko šivenje",
    shortDesc: "Profesionalna usluga šivenja za velike serije uz striktno poštovanje najviših industrijskih normi i rokova.",
    fullDesc: "Specijalizovani smo za uslužnu proizvodnju odevnih predmeta i radnih uniformi za modne brendove, korporacije i izvoz. Naš strojni park u Pirotu opremljen je savremenim industrijskim mašinama koje omogućavaju besprekoran ravni šav, overlock, iberdek i specijalizovane operacije.",
    icon: "Scissors",
    category: "sewing",
    benefits: [
      "Strikto praćenje vremenskih normi i specifikacija klijenta",
      "Višestruka kontrola kvaliteta (QC) u svakoj fazi proizvodnje",
      "Mogućnost rada sa lakim, srednjim i teškim materijalima",
      "Kapacitet za male, srednje i velike serije"
    ],
    specs: [
      "Tehnologija: Juki, Brother, Pfaff industrijske mašine",
      "Kapacitet: do 5,000 jedinica mesečno (zavisno od složenosti)",
      "Standardi: ISO kompatibilne procedure šivenja"
    ],
    turnaround: "5 - 14 radnih dana"
  },
  {
    id: "secenje-paspula",
    title: "Sečenje paspul trake",
    shortDesc: "Precizno i brzo sečenje paspul (bias) trake svih širina, uglova i dužina iz vašeg ili našeg materijala.",
    fullDesc: "Sečenje paspul trake zahteva maksimalnu preciznost kako bi se sprečilo krzanje ivica i osiguralo savršeno prijanjanje pri opšivanju. Koristimo automatizovane noževe i mašine za sečenje pod uglom od 45 stepeni, ravno ili uzdužno.",
    icon: "Cut",
    category: "cutting",
    benefits: [
      "Sečenje pod savršenim uglom od 45° (pristrasan kroj / bias)",
      "Širine traka po meri (od 15mm do 100mm+)",
      "Pakovanje u kompaktne rolne za direktno korišćenje na aparatima",
      "Minimalni otpad i maksimalna iskorišćenost materijala"
    ],
    specs: [
      "Tolerancija širine: ±0.5 mm",
      "Dužina rolne: prilagođena specifikaciji aparata za šivenje",
      "Materijali: Pamuk, poliester, saten, keper, trikotaža"
    ],
    turnaround: "24 - 48 sati"
  },
  {
    id: "digitalizacija-veza",
    title: "Digitalizacija veza",
    shortDesc: "Vrhunska softverska priprema i digitalizacija mašinskog veza kompatibilna sa Wilcom i Tajima formatima.",
    fullDesc: "Pretvaramo vaš logotip, grb ili umetnički crtež u savršeno optimizovan program za mašinski vez. Naša digitalizacija osigurava da se niti ne kidaju, da je gustina uboda (stitch density) optimalna i da gotov vez na tekstilu izgleda trodimenzionalno i luksuzno.",
    icon: "FileCode",
    category: "embroidery",
    benefits: [
      "Ekspertsko određivanje smera uboda, podloge (underlay) i kompenzacije potezanja",
      "Optimizovano za mašine sa 1, 4, 6 ili 12+ glava",
      "Besplatna revizija i prilagođavanje za različite vrste tekstila (kačketi, polo majice, jakne)",
      "Isporuka u svim industrijskim formatima (.EMB, .DST, .PES, .EXP, itd.)"
    ],
    specs: [
      "Glavni softver: Wilcom EmbroideryStudio e4.5 / e5",
      "Industrijska mašinska kompatibilnost: Tajima, Barudan, Brother, Happy, ZSK",
      "Isporuka: putem e-maila ili cloud linka u roku od 24h"
    ],
    turnaround: "24 sata (hitne porudžbine do 4h)"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Wilcom softverska digitalizacija logotipa",
    category: "vez",
    image: "vez1.jpg",
    fallbackImage: "embroidery-digitizing.jpg",
    description: "Precizno definisani vektori, smer uboda i gustina konca u Wilcom EmbroideryStudio softveru za industrijski vez.",
    client: "Modni brend Srbija",
    date: "2025."
  },
  {
    id: "g2",
    title: "Realizovan Pirovez mašinski vez",
    category: "vez",
    image: "vez2.jpg",
    fallbackImage: "embroidery-digitizing.jpg",
    description: "Autentičan primer ukrštenog boda (cross-stitch) realizovan na industrijskoj mašini sa zlatnim nitima.",
    client: "Pirovez projekat",
    date: "2025."
  },
  {
    id: "g3",
    title: "Optimizacija datoteka za Tajima mašine",
    category: "vez",
    image: "vez3.jpg",
    fallbackImage: "embroidery-digitizing.jpg",
    description: "Analiza putanje igle i smanjenje nepotrebnih sečenja konca za maksimalnu brzinu mašine u proizvodnji.",
    client: "Tekstilna fabrika Niš",
    date: "2026."
  },
  {
    id: "g4",
    title: "Serijsko šivenje uniformi sa vezom",
    category: "sivenje",
    image: "vez4.jpg",
    fallbackImage: "sewing-workshop.jpg",
    description: "Kompletan proces od sečenja paspula i šivenja do aplikacije mašinskog veza na gotov odevni predmet.",
    client: "Korporativni klijent Beograd",
    date: "2026."
  },
  {
    id: "g5",
    title: "Sečenje paspul trake pod uglom od 45°",
    category: "paspul",
    image: "paspul-cutting.jpg",
    fallbackImage: "paspul-cutting.jpg",
    description: "Automatsko sečenje i rolanje pamučne paspul trake širine 35mm za opšivanje sportske odeće.",
    client: "Proizvodnja trikotaže",
    date: "2026."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "f1",
    question: "Koje usluge u tekstilnoj proizvodnji nudite?",
    answer: "Pored klasičnog industrijskog šivenja serija i sečenja paspula pod uglom od 45 stepeni, Pirovetex pruža i vrhunsku softversku pripremu i digitalizaciju za mašinski vez.",
    category: "opste"
  },
  {
    id: "f2",
    question: "Koji softver koristite za digitalizaciju mašinskog veza?",
    answer: "Naše datoteke su optimizovane i izrađene prvenstveno za rad sa vodećim industrijskim softverima i mašinama, uključujući Wilcom i Tajima standarde (.EMB, .DST, .PES, .EXP i druge po vašem zahtevu).",
    category: "tehnologija"
  },
  {
    id: "f3",
    question: "Gde se nalazi proizvodnja i kako isporučujete robu?",
    answer: "Proizvodni pogon kompanije Pirovetex se nalazi u Pirotu, na adresi Vojvode Putnika 36. Saradnju ostvarujemo sa klijentima širom Srbije i regiona putem brze pošte, kurirskih službi ili direktnim preuzimanjem.",
    category: "saradnja"
  },
  {
    id: "f4",
    question: "Koliko traje izrada i da li radite sa fizičkim licima?",
    answer: "Radimo prvenstveno sa pravnim licima, tekstilnim fabrikama i modnim brendovima, ali smo otvoreni i za saradnju sa fizičkim licima. Vreme izrade zavisi od obima posla i specifikacije industrijskih normi, obično od 3 do 7 radnih dana (dok je digitalizacija veza gotova za 24h).",
    category: "rokovi"
  },
  {
    id: "f5",
    question: "Kako mogu zatražiti ponudu ili procenu cene?",
    answer: "Najjednostavniji način je da pošaljete upit preko naše kontakt forme na sajtu ili nas direktno pozovete na telefon +381 61 1888 748. Za procenu veza, pošaljite nam sliku logotipa i željene dimenzije.",
    category: "saradnja"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Jelena M.",
    location: "Beograd",
    role: "Vlasnica modnog studija",
    quote: "Brza i profesionalna usluga digitalizacije veza. Poslala sam komplikovan grb u podne, a do uveče sam imala savršen Tajima .DST fajl spreman za mašinu. Svaka preporuka za Pirovetex tim!",
    rating: 5,
    service: "Digitalizacija veza"
  },
  {
    id: "t2",
    name: "Marko R.",
    location: "Niš",
    role: "Menadžer proizvodnje radne odeće",
    quote: "Kvalitet šivenja i poštovanje normi su iznad očekivanja, a cene su više nego korektne. Paspul traka seče se besprekorno, što nam je znatno ubrzalo našu montažu.",
    rating: 5,
    service: "Industrijsko šivenje i Paspul"
  },
  {
    id: "t3",
    name: "Dragan S.",
    location: "Pirot",
    role: "Direktor tekstilnog preduzeća",
    quote: "Saradnja sa Pirovetexom nam je obezbedila maksimalnu preciznost u serijskom šivenju uniformi. Odgovoran i stručan tim koji uvek ispoštuje zadate rokove.",
    rating: 5,
    service: "Industrijsko šivenje"
  }
];
