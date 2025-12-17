import React, { useState } from "react";

// Initial demo todos
const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
];

function TodoList() {
      const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          data-testid="new-todo-input"
        />
        <button type="submit" data-testid="add-todo-button">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid="todo-item">
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              data-testid="todo-text"
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} data-testid="delete-todo-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;