import config from '../config';

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-grid card">
        <div className="hero-content">
          <p className="eyebrow">Premium {config.preset} Experience</p>
          <h1>{config.hero.title}</h1>
          <p className="muted">{config.hero.subtitle}</p>

          <div className="hero-actions">
            <a className="btn" href={`https://wa.me/91${config.contact.phone}`}>
              Contact on WhatsApp
            </a>
            <a className="btn btn--ghost" href={`tel:${config.contact.phone}`}>
              Call Now
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src={config.images.hero}
            alt={`${config.businessName} hero`}
            className="hero-image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
