import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Filters from './components/Filters'

const STORAGE_KEY = "todos.v1";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all"); // all | active | completed

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter(t => !t.completed);
    if (filter === "completed") return todos.filter(t => t.completed);
    return todos;
  }, [todos, filter]);

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos(prev => [
      ...prev,
      { id: crypto.randomUUID(), text: trimmed, completed: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };
  
  return (
    <main style={{ padding: 24, maxWidth: 560, margin: "0 auto" }}>
      <Hello name="ToDo App" />
      <TodoInput onAdd={addTodo} />
      <Filters value={filter} onChange={setFilter} onClearCompleted={clearCompleted} />
      <TodoList items={visibleTodos} onToggle={toggleTodo} onRemove={removeTodo} />
      <p style={{ opacity: 0.6, marginTop: 12 }}>
        {todos.filter(t => !t.completed).length} remaining
      </p>
    </main>
  );
}

export default App
