import config from '../config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{config.businessName}</h3>
          <p className="muted">{config.tagline}</p>
        </div>

        <div>
          <h4>Business Hours</h4>
          <ul>
            {config.footer.businessHours.map((hours) => (
              <li key={hours}>{hours}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Social</h4>
          <ul>
            {config.footer.socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
    </footer>
  );
}
