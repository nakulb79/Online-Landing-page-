import config from '../config';

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/91${config.contact.phone}`}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}
