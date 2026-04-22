import { useState } from 'react';
import config from '../config';

export default function LeadForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const message = `Hi ${config.businessName}, I'm ${name}. Phone: ${phone}. Fitness goal: ${goal}. Please share membership details.`;
    window.open(`https://wa.me/91${config.contact.phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section section--alt" id="lead-form">
      <div className="container">
        <div className="section-head">
          <h2>Book a Free Consultation</h2>
          <p className="muted">Share your details and we’ll connect with you quickly on WhatsApp.</p>
        </div>

        <form className="card lead-form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Your phone number"
              required
            />
          </label>

          <label>
            Fitness Goal
            <textarea
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              placeholder="Weight loss, strength, mobility..."
              rows="4"
              required
            />
          </label>

          <button className="btn lead-form__submit" type="submit">
            Submit Enquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
