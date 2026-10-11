export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
      </div>
      {children}
    </section>
  );
}
