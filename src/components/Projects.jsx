import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import Section from "./Section.jsx";
import { projects } from "../data.js";

function stackTags(stack) {
  return stack.split(/\s+[·.]\s+/).map((t) => (
    <span key={t} className="tag">
      {t}
    </span>
  ));
}

/**
 * Screenshot viewer for a project. A native <dialog> handles focus, Esc and
 * the backdrop; it's mounted per project, so it always opens on the first shot.
 */
function ProjectGallery({ project, onClose }) {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(0);
  const shots = project.screenshots;
  const shot = shots[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
  }, []);

  const close = () => dialogRef.current.close();
  const step = (by) => setIndex((i) => (i + by + shots.length) % shots.length);

  return (
    <dialog
      ref={dialogRef}
      className="gallery"
      aria-labelledby="gallery-title"
      onClose={onClose}
      // A click on the dialog itself, rather than its panel, is on the backdrop
      onClick={(e) => e.target === e.currentTarget && close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      <div className="gallery-panel">
        <div className="gallery-head">
          <div>
            <h3 id="gallery-title" className="gallery-title">
              {project.title}
            </h3>
            <div className="tag-row">{stackTags(project.stack)}</div>
          </div>
          <div className="gallery-actions">
            {project.link && (
              <a className="btn btn-primary btn-sm" href={project.link} target="_blank" rel="noreferrer">
                Visit site <ArrowUpRight size={14} />
              </a>
            )}
            <button className="icon-btn" type="button" onClick={close} aria-label="Close">
              <X size={16} />
            </button>
          </div>
        </div>

        <figure className="gallery-stage">
          <div className="gallery-shot">
            <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
            {shots.length > 1 && (
              <>
                <button
                  className="icon-btn gallery-nav gallery-prev"
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="icon-btn gallery-nav gallery-next"
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
          <figcaption>{shot.caption}</figcaption>
        </figure>

        {shots.length > 1 && (
          <div className="gallery-thumbs">
            {shots.map((s, i) => (
              <button
                key={s.src}
                className="gallery-thumb"
                type="button"
                onClick={() => setIndex(i)}
                aria-current={i === index}
                aria-label={`Screenshot ${i + 1}: ${s.caption}`}
              >
                <img src={s.thumb} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>
    </dialog>
  );
}

export default function Projects() {
  const [viewing, setViewing] = useState(null);

  return (
    <Section
      id="projects"
      title="Projects"
      sub="Things I've designed, built, and shipped."
    >
      <div className="project-grid">
        {projects.map((p) => {
          // Projects with screenshots open the viewer; others link out if they can
          const hasShots = p.screenshots?.length > 0;
          const Wrapper = hasShots ? "button" : p.link ? "a" : "div";
          const wrapperProps = hasShots
            ? { type: "button", onClick: () => setViewing(p), "aria-haspopup": "dialog" }
            : p.link
              ? { href: p.link, target: "_blank", rel: "noreferrer" }
              : {};
          return (
            <Wrapper
              key={p.title}
              className={`card project-card${hasShots || p.link ? " is-link" : ""}`}
              {...wrapperProps}
            >
              {/* Spans rather than divs, so the card can also be a button */}
              <span className="project-top">
                {p.status && <span className="badge">{p.status}</span>}
                {hasShots ? (
                  <span className="project-preview">
                    <Images size={16} aria-hidden="true" /> Screenshots
                  </span>
                ) : (
                  p.link && <ArrowUpRight className="project-arrow" size={18} />
                )}
              </span>
              <span className="project-title">{p.title}</span>
              <span className="project-desc">{p.desc}</span>
              <span className="tag-row">{stackTags(p.stack)}</span>
            </Wrapper>
          );
        })}
      </div>
      {viewing && <ProjectGallery project={viewing} onClose={() => setViewing(null)} />}
    </Section>
  );
}
