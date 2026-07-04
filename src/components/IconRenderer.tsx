import React from 'react';
import { 
  Scissors, 
  Layers, 
  FileCode, 
  Shirt, 
  CheckCircle2, 
  Calendar, 
  Zap, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award,
  ShieldCheck,
  Cpu,
  Ruler,
  HelpCircle
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Scissors': return <Scissors className={className} />;
    case 'Cut': return <Scissors className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'FileCode': return <FileCode className={className} />;
    case 'Shirt': return <Shirt className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'Calendar': return <Calendar className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Award': return <Award className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Ruler': return <Ruler className={className} />;
    case 'HelpCircle': return <HelpCircle className={className} />;
    default: return <Sparkles className={className} />;
  }
};
