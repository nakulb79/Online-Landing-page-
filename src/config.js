const presetCatalog = {
  gym: {
    businessName: 'FitZone Gym',
    tagline: 'Transform Your Body Today',
    colors: {
      primary: '#16a34a',
      secondary: '#0f172a',
      accent: '#22c55e',
      background: '#f8fafc',
      surface: '#ffffff',
      muted: '#475569',
    },
    hero: {
      title: 'Get Fit, Stay Strong',
      subtitle: 'Join the best gym in your city and start your transformation today.',
    },
    services: [
      { title: 'Weight Training', desc: 'Build strength and muscle with expert guidance.' },
      { title: 'Cardio', desc: 'Improve stamina and endurance with smart workout plans.' },
      { title: 'Personal Training', desc: 'Get 1-on-1 coaching and accountability.' },
    ],
  },
  clinic: {
    businessName: 'CarePlus Clinic',
    tagline: 'Trusted Healthcare Near You',
    colors: {
      primary: '#2563eb',
      secondary: '#0f172a',
      accent: '#3b82f6',
      background: '#f8fafc',
      surface: '#ffffff',
      muted: '#475569',
    },
    hero: {
      title: 'Compassionate Care, Modern Treatment',
      subtitle: 'Book your consultation with experienced doctors today.',
    },
    services: [
      { title: 'General Checkup', desc: 'Routine and preventive health screenings.' },
      { title: 'Dental Care', desc: 'Comprehensive oral health consultations.' },
      { title: 'Diagnostic Support', desc: 'Quick test recommendations and follow-ups.' },
    ],
  },
  tuition: {
    businessName: 'Bright Future Academy',
    tagline: 'Learn Smart. Score Better.',
    colors: {
      primary: '#7c3aed',
      secondary: '#0f172a',
      accent: '#8b5cf6',
      background: '#f8fafc',
      surface: '#ffffff',
      muted: '#475569',
    },
    hero: {
      title: 'Top Coaching for School & Competitive Exams',
      subtitle: 'Personalized mentorship for consistent academic growth.',
    },
    services: [
      { title: 'Math Coaching', desc: 'Clear concepts and problem-solving practice.' },
      { title: 'Science Coaching', desc: 'Structured lesson plans with doubt support.' },
      { title: 'Test Series', desc: 'Weekly assessments with progress reports.' },
    ],
  },
  restaurant: {
    businessName: 'Spice Garden',
    tagline: 'Fresh Flavors, Every Day',
    colors: {
      primary: '#ea580c',
      secondary: '#0f172a',
      accent: '#f97316',
      background: '#fff7ed',
      surface: '#ffffff',
      muted: '#475569',
    },
    hero: {
      title: 'Taste the Best Local Dining Experience',
      subtitle: 'Reserve your table and enjoy chef-crafted meals.',
    },
    services: [
      { title: 'Dine-In', desc: 'Comfortable family-friendly dining space.' },
      { title: 'Takeaway', desc: 'Fast pickup for your favorite dishes.' },
      { title: 'Event Catering', desc: 'Custom menus for parties and celebrations.' },
    ],
  },
};

const userConfig = {
  preset: 'gym',
  isDemo: true,

  seo: {
    title: 'Gym in Bangalore | FitZone Gym',
    description:
      'FitZone Gym offers premium fitness training, cardio, personal coaching, and transformation programs in Bangalore.',
  },

  contact: {
    phone: '9876543210',
    email: 'fitzone@gmail.com',
    address: 'Bangalore, India',
  },

  images: {
    hero: '/images/hero.svg',
    gallery: ['/images/gallery-1.svg', '/images/gallery-2.svg', '/images/gallery-3.svg'],
  },

  sections: {
    showServices: true,
    showPackages: true,
    showTestimonials: true,
    showGallery: true,
    showMap: true,
  },

  contactForm: {
    enabled: true,
  },

  packages: [
    {
      name: 'Basic',
      price: '₹999',
      features: ['1 Service Highlight', 'WhatsApp Contact CTA', 'Business Contact Section'],
    },
    {
      name: 'Standard',
      price: '₹1999',
      features: ['All Services', 'Gallery Section', 'Google Maps + Testimonials'],
    },
    {
      name: 'Premium',
      price: '₹2999',
      features: ['Everything Included', 'Lead Capture Form', 'Priority Customization'],
    },
  ],

  testimonials: [
    { name: 'Rahul S.', text: 'Excellent trainers and equipment. I saw results in 6 weeks.' },
    { name: 'Anita K.', text: 'Super clean gym and a very motivating atmosphere.' },
    { name: 'Vikram P.', text: 'Friendly staff and personal training really helped me stay consistent.' },
  ],

  mapEmbed: 'https://www.google.com/maps?q=Bangalore%2C+India&z=13&output=embed',

  footer: {
    businessHours: ['Mon - Fri: 6:00 AM - 10:00 PM', 'Sat - Sun: 7:00 AM - 9:00 PM'],
    socialLinks: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
    ],
  },
};

const selectedPreset = presetCatalog[userConfig.preset] || presetCatalog.gym;

const config = {
  ...selectedPreset,
  ...userConfig,
  hero: {
    ...selectedPreset.hero,
    ...(userConfig.hero || {}),
  },
  colors: {
    ...selectedPreset.colors,
    ...(userConfig.colors || {}),
  },
  services: userConfig.services || selectedPreset.services,
};

if (!config.isDemo) {
  config.testimonials = userConfig.testimonials || [];
  config.images.gallery = userConfig.images.gallery || [];
}

export default config;
