import config from '../config';

export default function Testimonials() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <h2>What Clients Say</h2>
          <p className="muted">Real stories from our community.</p>
        </div>

        <div className="testimonials-grid">
          {config.testimonials.map((item) => (
            <article className="testimonial card" key={item.name}>
              <p>“{item.text}”</p>
              <h4>{item.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
