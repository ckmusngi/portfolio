export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="section" style={{ scrollMarginTop: "72px" }}>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
      {children}
    </section>
  );
}
