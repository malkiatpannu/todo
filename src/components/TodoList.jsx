import TodoItem from "./TodoItem";

export default function TodoList({ items, onToggle, onRemove }) {
  if (!items.length) return <p style={{ opacity: 0.6 }}>No todos yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
      {items.map((t) => (
        <TodoItem key={t.id} item={t} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
