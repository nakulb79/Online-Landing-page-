import config from '../config';

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="container navbar card">
        <h2>{config.businessName}</h2>
        <p>{config.tagline}</p>
        {config.isDemo && <span className="demo-badge">Demo Mode</span>}
      </nav>
    </header>
  );
}
