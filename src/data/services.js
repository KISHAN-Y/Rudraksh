import { 
  Stethoscope, 
  Syringe, 
  Activity, 
  Smile, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Zap 
} from 'lucide-react';

export const services = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore both function and aesthetics to your smile.',
    icon: Syringe,
    features: ['Titanium root replacement', 'Custom-matched crown', 'Lifetime durability', 'Preserves jawbone'],
    duration: '2-3 visits',
    patientImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment (RCT)',
    description: 'Painless removal of infected pulp to save your natural tooth, completed in a single or multiple visits.',
    icon: Activity,
    features: ['Rotary endodontics', 'Painless procedure', 'Saves natural tooth', 'Prevents extraction'],
    duration: '1-2 visits',
    patientImage: 'https://images.unsplash.com/photo-1598256989800-fea5ea23d248?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'braces',
    title: 'Orthodontics & Braces',
    description: 'Straighten your teeth and correct your bite with our range of metal, ceramic, and invisible aligners.',
    icon: Smile,
    features: ['Metal & Ceramic options', 'Clear aligners available', 'Improves bite', 'Enhances facial profile'],
    duration: '12-24 months',
    patientImage: 'https://images.unsplash.com/photo-1590625698579-22a9eb786d7e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional bleaching treatments to safely remove stains and brighten your smile by several shades.',
    icon: Sparkles,
    features: ['Laser whitening', 'Immediate results', 'Safe for enamel', 'Removes deep stains'],
    duration: '45-60 mins',
    patientImage: 'https://images.unsplash.com/photo-1592862800582-747f52554e20?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'crowns',
    title: 'Crowns & Bridges',
    description: 'High-quality custom caps to protect damaged teeth or bridges to fill gaps left by missing teeth.',
    icon: ShieldCheck,
    features: ['Zirconia crowns', 'PFM (Porcelain Fused to Metal)', 'Highly durable', 'Natural appearance'],
    duration: '2 visits',
    patientImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Complete smile makeovers including veneers and bonding to give you the perfect, confident smile.',
    icon: Heart,
    features: ['Porcelain veneers', 'Composite bonding', 'Smile designing', 'Gap closure'],
    duration: 'Varies',
    patientImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'general',
    title: 'General Checkup & Cleaning',
    description: 'Routine scaling, polishing, and comprehensive checkups to maintain optimal oral hygiene.',
    icon: Stethoscope,
    features: ['Ultrasonic scaling', 'Fluoride application', 'Cavity detection', 'Oral cancer screening'],
    duration: '30-45 mins',
    patientImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'extraction',
    title: 'Painless Extractions',
    description: 'Safe and comfortable removal of severely damaged teeth or problematic wisdom teeth.',
    icon: Zap,
    features: ['Wisdom tooth removal', 'Local anesthesia', 'Post-op care instructions', 'Minimal discomfort'],
    duration: '30-60 mins',
    patientImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=500&q=80'
  }
];
