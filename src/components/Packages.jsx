import config from '../config';

export default function Packages() {
  return (
    <section className="section" id="packages">
      <div className="container">
        <div className="section-head">
          <h2>Membership Packages</h2>
          <p className="muted">Choose the right plan for your fitness journey.</p>
        </div>

        <div className="packages-grid">
          {config.packages.map((pkg) => (
            <article className="package card" key={pkg.name}>
              <h3>{pkg.name}</h3>
              <p className="package__price">{pkg.price}</p>

              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="btn" href={`https://wa.me/91${config.contact.phone}`}>
                Choose {pkg.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
