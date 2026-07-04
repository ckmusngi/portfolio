import { contact } from "../data.js";

export default function Contact() {
  return (
    <footer id="contact" className="footer" style={{ scrollMarginTop: "72px" }}>
      <div className="footer-cta">Let's build something that works.</div>
      <div className="contact-row">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
        <a href={contact.linkedin} onClick={(e) => e.preventDefault()}>
          LinkedIn
        </a>
      </div>
      <div className="footer-note">{contact.location}</div>
    </footer>
  );
}
