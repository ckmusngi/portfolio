import { Mail, Phone, MapPin } from "lucide-react";
import { contact } from "../data.js";

/**
 * Placeholder illustration for the hero image slot.
 * Swap this out for a real photo by replacing <HeroPlaceholder /> below
 * with: <img src="/profile.jpg" alt="Cyrill Kiel Musngi" />
 * (put profile.jpg in the public/ folder)
 */
function HeroPlaceholder() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f1f5f9" />
      <rect x="30" y="46" width="140" height="90" rx="8" fill="#ffffff" stroke="#0f766e" strokeWidth="2" />
      <circle cx="44" cy="60" r="3" fill="#0f766e" />
      <circle cx="54" cy="60" r="3" fill="#94a3b8" />
      <circle cx="64" cy="60" r="3" fill="#94a3b8" />
      <line x1="42" y1="78" x2="120" y2="78" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="90" x2="150" y2="90" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="102" x2="100" y2="102" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="114" x2="130" y2="114" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <div className="hero-image">
          <HeroPlaceholder />
        </div>
        <div>
          <div className="hero-kicker">Full Stack Developer</div>
          <h1>I build web apps and make the systems behind them work together.</h1>
          <p className="hero-lede">
            6+ years building scalable web applications, backend services, and SaaS integrations —
            from requirements and architecture through deployment and production support.
          </p>
          <div className="hero-meta">
            <span>
              <MapPin size={14} /> {contact.location}
            </span>
            <span>
              <Mail size={14} /> {contact.email}
            </span>
            <span>
              <Phone size={14} /> {contact.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
