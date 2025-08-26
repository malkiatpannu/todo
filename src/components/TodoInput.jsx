import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd?.(text);
    setText("");
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
      <input
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: 8 }}
      />
      <button style={{ padding: 8, background: "green", color: "white" }}>Add</button>
    </form>
  );
}
