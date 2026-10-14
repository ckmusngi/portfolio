import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "../data.js";

export default function Contact() {
  const hasLinkedin = contact.linkedin && contact.linkedin !== "#";
  return (
    <footer id="contact" className="footer">
      <div className="cta-panel reveal">
        <div className="footer-cta">Let's build something that works.</div>
        <p className="footer-sub">
          Need a web app, an integration between your tools, or a payment flow that can't afford to
          break? I'd love to hear about it.
        </p>
        <div className="contact-row">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>
            <Mail size={16} /> {contact.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${contact.phoneHref}`}>
            <Phone size={16} /> {contact.phone}
          </a>
          {hasLinkedin && (
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          )}
          {contact.github && (
            <a className="btn btn-ghost" href={contact.github} target="_blank" rel="noreferrer">
              <FaGithub size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
      <div className="footer-note">
        © {new Date().getFullYear()} Cyrill Kiel Musngi · {contact.location}
      </div>
    </footer>
  );
}
