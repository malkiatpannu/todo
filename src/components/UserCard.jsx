export default function UserCard({ name, role, avatarUrl }) {
    return (
      <article
        className="user-card"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          padding: 12,
          marginBottom: 12,
          border: "1px solid #eee",
          borderRadius: 12,
        }}
      >
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          width={48}
          height={48}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p style={{ margin: 0, opacity: 0.7 }}>{role}</p>
        </div>
      </article>
    );
  }
  