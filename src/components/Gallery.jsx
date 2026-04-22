import config from '../config';

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Gallery</h2>
          <p className="muted">A look inside {config.businessName}.</p>
        </div>

        <div className="gallery-grid">
          {config.images.gallery.map((src, index) => (
            <figure className="gallery-item card" key={src}>
              <img src={src} alt={`${config.businessName} gallery ${index + 1}`} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
