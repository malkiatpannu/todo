export default function Card({ title, children }) {
    return (
      <section style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        {children}
      </section>
    );
  }
  