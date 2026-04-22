import config from '../config';

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Our Services</h2>
          <p className="muted">Programs crafted for your fitness goals.</p>
        </div>

        <div className="services-grid">
          {config.services.map((service) => (
            <article key={service.title} className="service-card card">
              <h3>{service.title}</h3>
              <p className="muted">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
