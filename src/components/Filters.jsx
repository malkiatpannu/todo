export default function Filters({ value, onChange, onClearCompleted }) {
    const Tab = ({ id, label }) => (
      <button
        onClick={() => onChange?.(id)}
        style={{
          padding: "6px 10px",
          border: "1px solid #eee",
          borderRadius: 8,
          background: value === id ? "#f5f5f5" : "transparent",
        }}
      >
        {label}
      </button>
    );
  
    return (
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 12 }}>
        <Tab id="all" label="All" />
        <Tab id="active" label="Active" />
        <Tab id="completed" label="Completed" />
        <div style={{ flex: 1 }} />
        <button onClick={onClearCompleted}>Clear completed</button>
      </div>
    );
  }
  