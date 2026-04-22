import config from '../config';

export default function MapSection() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section-head">
          <h2>Find Us</h2>
          <p className="muted">Visit us at {config.contact.address}.</p>
        </div>

        <div className="card map-wrap">
          <iframe
            src={config.mapEmbed}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${config.businessName} location`}
          />
        </div>
      </div>
    </section>
  );
}
