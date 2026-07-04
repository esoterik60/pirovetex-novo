export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  specs: string[];
  turnaround: string;
  category: 'sewing' | 'cutting' | 'embroidery';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sve' | 'vez' | 'sivenje' | 'paspul';
  image: string;
  fallbackImage: string;
  description: string;
  client?: string;
  date?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'opste' | 'tehnologija' | 'saradnja' | 'rokovi';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  quote: string;
  rating: number;
  service: string;
}
