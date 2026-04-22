import config from '../config';

export default function Contact() {
  return (
    <section className="section" id="contact-details">
      <div className="container card contact-card">
        <h2>Contact Us</h2>
        <p>
          <strong>Phone:</strong> {config.contact.phone}
        </p>
        <p>
          <strong>Email:</strong> {config.contact.email}
        </p>
        <p>
          <strong>Address:</strong> {config.contact.address}
        </p>

        <div className="contact-actions">
          <a className="btn" href={`https://wa.me/91${config.contact.phone}`}>
            WhatsApp Now
          </a>
          <a className="btn btn--ghost" href={`tel:${config.contact.phone}`}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
