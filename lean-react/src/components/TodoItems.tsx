import React from "react";
import type { Todo } from "./TodoApp";

interface TodoItemsProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItems({ todo, toggleTodo, deleteTodo }: TodoItemsProps) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItems;
