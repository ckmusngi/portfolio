import { Download } from "lucide-react";

function NavLink({ href, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Cyrill_Kiel_Musngi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink href="#hero"><span className="brand">Cyrill Kiel Musngi</span></NavLink>
        <nav className="nav">
          <NavLink href="#strengths">Strengths</NavLink>
          <NavLink href="#work">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button className="btn-resume" onClick={downloadResume}>
          <Download size={14} />
          Resume
        </button>
      </div>
    </header>
  );
}
