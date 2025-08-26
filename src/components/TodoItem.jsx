export default function TodoItem({ item, onToggle, onRemove }) {
    return (
      <li
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          borderBottom: "1px solid #eee",
          padding: "8px 0",
        }}
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle?.(item.id)}
        />
        <span
          style={{
            flex: 1,
            textDecoration: item.completed ? "line-through" : "none",
            opacity: item.completed ? 0.6 : 1,
          }}
        >
          {item.text}
        </span>
        <button onClick={() => onRemove?.(item.id)} aria-label="Delete">
          ✖
        </button>
      </li>
    );
  }
  