import { useState } from "react";
import { Download, Sun, Moon } from "lucide-react";

function NavLink({ href, className, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <a href={href} className={className} onClick={handleClick}>
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

function currentTheme() {
  const t = document.documentElement.dataset.theme;
  if (t) return t;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable; theme still applies for this visit
    }
    setTheme(next);
  };

  return (
    <button
      className="icon-btn"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink href="#hero" className="brand">
          <span className="brand-mark">CK</span>
          <span className="brand-name">Cyrill Kiel Musngi</span>
        </NavLink>
        <nav className="nav">
          <NavLink href="#strengths">Strengths</NavLink>
          <NavLink href="#work">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="btn btn-primary btn-sm" onClick={downloadResume}>
            <Download size={14} />
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
