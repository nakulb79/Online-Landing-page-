import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import LeadForm from './components/LeadForm';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import config from './config';

export default function App() {
  const themeVars = {
    '--color-primary': config.colors.primary,
    '--color-secondary': config.colors.secondary,
    '--color-accent': config.colors.accent,
    '--color-bg': config.colors.background,
    '--color-surface': config.colors.surface,
    '--color-muted': config.colors.muted,
  };

  useEffect(() => {
    document.title = config.seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', config.seo.description);
  }, []);

  return (
    <div style={themeVars}>
      <Navbar />
      <Hero />
      {config.sections.showServices && <Services />}
      {config.sections.showPackages && <Packages />}
      {config.contactForm.enabled && <LeadForm />}
      {config.sections.showTestimonials && config.testimonials?.length > 0 && <Testimonials />}
      {config.sections.showGallery && config.images.gallery?.length > 0 && <Gallery />}
      {config.sections.showMap && <MapSection />}
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
